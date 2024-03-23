class OCTAdapter {
  ui = {
    file: "oct-service-image-file",
    resultsJSON: "dPossibleDiseases",
    serviceModal: "octAPIServiceModal",
    requestServiceBtn: "requestOCTServiceBtn",
    downloadReportBtn: "downloadOCTReportBtn",
  };

  endpoints = {
    baseURL: "https://octapi.artelus.in",
    predictionSingle: "https://octapi.artelus.in/predict/",
  };

  diseaseMap = {
    "OCT Diseases Report": [
      "Normal",
      "Drusen",
      "DME",
      "CNV",
      "AMD",
      "CSR",
      "DR",
      "MH",
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
      this.gradCamFileURL = response.data.gradcam_path;
      this.totalResponse = response;
      let correctedJSON = response.data.prediction_tags.replace(/'/g, '"');
      this.predictions = JSON.parse(correctedJSON);
      this.resetUI();
    } catch (error) {
      console.error(error);
    }
  }

  resetUI() {
    document.getElementById("heatmapImage").src =
      this.endpoints.baseURL + this.gradCamFileURL;
    document.getElementById("dEyeImage").src =
      this.endpoints.baseURL + this.gradCamFileURL;

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

    document.getElementById(this.ui.resultsJSON).innerHTML = "";
    let uiMap = {};

    // Find the highest scoring prediction
    let maxPrediction = Object.keys(this.predictions).reduce((a, b) =>
      this.predictions[a] > this.predictions[b] ? a : b
    );
    let maxValue = this.predictions[maxPrediction];

    for (let i in this.diseaseMap) {
      if (this.diseaseMap[i].includes(maxPrediction)) {
        uiMap[i] = `<div class="disease-section-headline">${i}</div>`;
        uiMap[i] =
          uiMap[i] +
          `<div class="possible-diseases-section">
                <div class="disease-data">
                    <div class="disease-name">${maxPrediction}</div>
                    <div class="detect-percent">${(
                      Math.round((maxValue * 100 + Number.EPSILON) * 100) / 100
                    ).toFixed(2)}%</div>
                </div>
                <div class="progress">
                    <div class="progress-bar disease-progress" style="width: ${
                      maxValue * 100
                    }%" role="progressbar" aria-valuenow="${
            maxValue * 100
          }%" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                </div>`;
        document.getElementById(this.ui.resultsJSON).innerHTML += uiMap[i];
      }
    }

    document.getElementById("dEyeImage").src = URL.createObjectURL(
      this.getUploadedImage()
    );
    $("#" + this.ui.serviceModal).modal("toggle");
  }

  downloadReport(url = this.endpoints.baseURL + this.gradCamFileURL) {
    this.downloadImage(url, "ARTELUS" + new Date().getTime());
  }

  generatePDFReport(url) {
    this.generatePDF(url);
  }

  generatePDF(url) {
    const doc = new jsPDF();
    let Name = document.getElementById("oct-service-name").value;
    let Email = document.getElementById("oct-service-email").value;

    const logo = new Image();
    const resultImage = new Image();
    resultImage.src = url;
    logo.src = "/assets/images/logo.png";

    logo.onload = function () {
      doc.addImage(logo, "PNG", 10, 10, 60, 18);
      let counterY = 50;
      for (let i in octAdapter.totalResponse.data.prediction_tags) {
        doc.text(
          `${i} : ${octAdapter.totalResponse.data.prediction_tags[i]}`,
          10,
          counterY
        );
        counterY += 10;
      }

      doc.addImage(resultImage, "PNG", 10, 100, 170, 60);
      doc.save("document.pdf");
    };
  }
}

let octAdapter = new OCTAdapter();
