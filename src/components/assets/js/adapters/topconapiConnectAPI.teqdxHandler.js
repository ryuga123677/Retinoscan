class TopconApdapter {
  ui = {
    file: "fundus-service-image-file",
    resultsJSON: "dPossibleDiseases",
    serviceModal: "topiconAPIServiceModal",
    requestServiceBtn: "requestServiceBtn",
    downloadReportBtn: "downloadReportBtn",
  };
  endpoints = {
    basURL: "https://cvmultipathapi.artelus.in",
    predictionSingle: "https://cvmultipathapi.artelus.in/predict/",
  };

  diseaseMap = {
    "Diseases Report": [
      "micraneurysms",
      "hard_exudates",
      "cotton_wool_spot",
      "DME",
      "venous_looping",
      "FPD",
      "FPE",
      "NVD",
      "NVE",
      "viterous_HM",
      "PreRetinal_HM",
      "laser",
      "HM",
      "VB",
      "IRMA",
      "no_dr",
      "high_HM",
    ],
    "DR Report": ["dr_0", "dr_1", "dr_2", "dr_3", "dr_4"],
    "Additional Report": [
      "ERM",
      "Myopic degeneration",
      "Drusen",
      "Hypertensive DR",
      "Peripapilary Atrophy",
      "Tortuous vessels",
      "Macular Dystrophy",
      "Chorioretinitis",
      "Papilledema",
      "Nevus",
      "FTMH",
      "CRVO",
      "BRVO",
      "Myelination",
      "Glaucoma",
      "Cataract",
      "ME",
      "ARMD",
      "RP",
      "CSR",
      "no_disease",
    ],
  };

  downloadImage = (url, filename) =>
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = filename || "image";
        a.click();
      });

  constructor() {}
  getImage(uiFileSelectorId = this.ui.file) {
    return document.getElementById(uiFileSelectorId);
  }
  getUploadedImage() {
    return this.uploadedFile;
  }
  async readFile(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }
  async predictImage() {
    try {
      let file = this.getImage().files[0];
      this.uploadedFile = file;
      const formData = new FormData();
      formData.append("myfile", file);
      formData.append("title", file.name);

      const response = await axios.post(
        this.endpoints.predictionSingle,
        formData,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      this.gradCamFileURL = response.data.gradcam_path;
      this.totalResponse = response;
      this.predictions = response.data.prediction_tags;
      this.resetUI();
    } catch (error) {
      console.error(error);
      // Handle the error appropriately
    }
  }
  resetUI() {
    document.getElementById("heatmapImage").src =
      this.endpoints.basURL + "/" + this.gradCamFileURL;
    document.getElementById("dEyeImage").src =
      this.endpoints.basURL + "/" + this.gradCamFileURL;

    document
      .getElementById("heatmapImage")
      .setAttribute(
        "class",
        document.getElementById("heatmapImage").className + " heatmapImageAfter"
      );
    document
      .getElementById("dEyeImage")
      .setAttribute(
        "class",
        document.getElementById("dEyeImage").className + " dEyeImageAfter"
      );

    document.getElementById("dPossibleDiseases").innerHTML = "";
    let uiMap = {};
    for (let i in this.diseaseMap) {
      uiMap[i] = `<div class="disease-section-headline">${i}</div>`;

      // console.log(i);
      for (let j of this.diseaseMap[i]) {
        if (this.predictions[j]) {
          uiMap[i] =
            uiMap[i] +
            `<div class="possible-diseases-section">
                    <div class="disease-data">
                        <div class="disease-name">${j}</div>
                        <div class="detect-percent">${
                          Math.round(
                            (this.predictions[j] * 100 + Number.EPSILON) * 100
                          ) / 100
                        }%</div>
                    </div>
                    <div class="progress">
                        <div class="progress-bar disease-progress" style="width: ${
                          this.predictions[j] * 100
                        }%" role="progressbar" aria-valuenow="87.7%" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>`;
        }
      }
      if (uiMap[i] != `<div class="disease-section-headline">${i}</div>`) {
        document.getElementById("dPossibleDiseases").innerHTML =
          document.getElementById("dPossibleDiseases").innerHTML + uiMap[i];
      }
    }
    document.getElementById("dEyeImage").src = URL.createObjectURL(
      this.getUploadedImage()
    );
    // document.getElementById(this.ui.requestServiceBtn).hidden = true;
    // document.getElementById(this.ui.downloadReportBtn).hidden = false;
    $("#" + this.ui.serviceModal).modal("toggle");
  }
  downloadReport(url = this.endpoints.basURL + "/" + this.gradCamFileURL) {
    //this.generatePDFReport(url);
    this.downloadImage(url, "ARTELUS" + new Date().getTime());
  }
  generatePDFReport(url) {
    this.generatePDF(url);
  }
  generatePDF(url) {
    const doc = new jsPDF();
    let Name = document.getElementById("fundus-service-name").value;
    let Email = document.getElementById("fundus-service-email").value;

    let predictions = this.predictions;
    //console.log(this.totalResponse);
    const logo = new Image();
    const resultImage = new Image();
    resultImage.src = url;
    logo.src = "/assets/images/logo.png"; // Relative URL to the logo image
    // doc.text(`Name : ${Name}`, 10, 40);
    // doc.text(`Email : ${Email}`, 10, 50);
    logo.onload = function () {
      doc.setPage(1);
      doc.addImage(logo, "PNG", 10, 10, 60, 18);
      let counterX = 10;
      let counterY = 50;
      for (let i in topconAdapter.totalResponse.data.prediction_tags) {
        doc.text(
          `${i} : ${topconAdapter.totalResponse.data.prediction_tags[i]}`,
          counterX,
          counterY
        );
        //counterX = counterX + 10;
        counterY = counterY + 10;
      }

      doc.addImage(resultImage, "PNG", 10, 100, 170, 60);

      doc.save("document.pdf");
    };
  }
}
let topconAdapter = new TopconApdapter();
