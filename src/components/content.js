import ProgressBar from "./progressBar.js";
import "./content.css";
import glaucoma from "./assets/images/final-eye-samples/glaucoma.png";
import glaucom from "./assets/images/final-heatmaps/Glaucoma.png";
import ARMD from "./assets/images/final-heatmaps/ARMD.png";
import DME2 from "./assets/images/final-eye-samples/DME.png";
import DME from "./assets/images/final-heatmaps/DME.png";
import DR1 from "./assets/images/final-heatmaps/DR1.png";
import DR2 from "./assets/images/final-heatmaps/DR2.png";
import DR3 from "./assets/images/final-heatmaps/DR3.png";
import DR4 from "./assets/images/final-heatmaps/DR4.png";
import Drusen from "./assets/images/final-heatmaps/Drusen.png";
import Laser from "./assets/images/final-heatmaps/Laser.png";
import Myopia from "./assets/images/final-heatmaps/MyopicDegenration.png";
import NVD from "./assets/images/final-heatmaps/NVD.png";
import NVE from "./assets/images/final-heatmaps/NVE.png";
import Peripa from "./assets/images/final-heatmaps/PeripappilaryAtrophy.png";
import SoftEx from "./assets/images/final-heatmaps/SoftExudates.png";
import Tortous from "./assets/images/final-heatmaps/TortousVessels.png";
import AMD from "./assets/images/final-oct-heatmaps/AMD.png";
import CNV from "./assets/images/final-oct-heatmaps/CNV.png";
import CSR from "./assets/images/final-oct-heatmaps/CSR.png";
import DME22 from "./assets/images/final-oct-heatmaps/DME.png";
import DR from "./assets/images/final-oct-heatmaps/DR.png";
import DRUSSEN from "./assets/images/final-oct-heatmaps/DRUSEN.png";
import MH from "./assets/images/final-oct-heatmaps/MH.png";
import NORMAL from "./assets/images/final-oct-heatmaps/NORMAL.png";
import ARMD2 from "./assets/images/final-eye-samples/ARMD.png";
import DR11 from "./assets/images/final-eye-samples/DR1.png";
import DR22 from "./assets/images/final-eye-samples/DR2.png";
import DR33 from "./assets/images/final-eye-samples/DR3.png";
import DR44 from "./assets/images/final-eye-samples/DR4.png";
import Laser2 from "./assets/images/final-eye-samples/Laser.png";
import Myopic2 from "./assets/images/final-eye-samples/MyopicDegenration.png";
import Drusen2 from "./assets/images/final-eye-samples/Drusen.png";

import NVD2 from "./assets/images/final-eye-samples/NVD.png";
import NVE2 from "./assets/images/final-eye-samples/NVE.png";
import Peripa2 from "./assets/images/final-eye-samples/PeripappilaryAtrophy.png";
import Soft2 from "./assets/images/final-eye-samples/SoftExudates.png";
import Tortous2 from "./assets/images/final-eye-samples/TortousVessels.png";

import AMDOCT from "./assets/images/final-oct-samples/AMD.jpg";
import CNVOCT from "./assets/images/final-oct-samples/CNV.jpeg";
import CSROCT from "./assets/images/final-oct-samples/CSR.jpg";
import DROCT from "./assets/images/final-oct-samples/DR.jpg";
import DRUSSENOCT from "./assets/images/final-oct-samples/DRUSEN.jpeg";
import MHOCT from "./assets/images/final-oct-samples/MH.jpg";
import NORMALOCT from "./assets/images/final-oct-samples/NORMAL.jpeg";
import DMEOCT from "./assets/images/final-oct-samples/DME.jpeg";

import { useState } from "react";

const Content = () => {

  const glaucomaPercent = 75.8;
  const drPercent = 100;
  const nodrPercent = 99.3;
  const [image, setimage] = useState(glaucoma);
  const [image2, setimage2] = useState(glaucom);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageChange = (image, image2,index) => {
    setimage(image);
    setimage2(image2);
    setCurrentIndex(index);
  
    
  };
let diseaseData = [
    
        {"Disease Report": [
            { name: "Glaucoma", percent: 75.8 },
        ],
        "DR Report": [
            { name: "dr_0", percent: 100 },
        ],
        "Additional Report": [
            { name: "no_dr", percent: 99.3 },
        ],
      },

    
       { "Disease Report": [
            { name: "ARMD", percent: 73.7 },
        ],
        "DR Report": [
            { name: "dr_0", percent: 100 },
        ],
        "Additional Report": [
            { name: "no_dr", percent: 99.3 },
        ],
      },
    

     {
        "Disease Report": [
            { name: "BRVO", percent: 40.3 },
        ],
        "DR Report": [
            { name: "dr_2", percent: 100 },
        ],
        "Additional Report": [
            { name: "Hard Exudates", percent: 78.9 },
            { name: "DME", percent: 53.7 },
            { name: "HM", percent: 25.4 },
        ],
    },

    {
        "Disease Report": [
            { name: "No Disease", percent: 87.6 },
        ],
        "DR Report": [
            { name: "dr_1", percent: 100 },
        ],
        "Additional Report": [
            { name: "Micraneurysms", percent: 21.2 },
        ],
    },

    {
        "Disease Report": [
            { name: "Drusen", percent: 64.9 },
            { name: "Chorioretinitis", percent: 38.2 },
        ],
        "DR Report": [
            { name: "dr_2", percent: 100 },
        ],
        "Additional Report": [
            { name: "Micraneurysms", percent: 59.7 },
            { name: "Hard Exudates", percent: 80.4 },
            { name: "DME", percent: 46.4 },
            { name: "HM", percent: 29 },
        ],
    },

    {
        "DR Report": [
            { name: "dr_3", percent: 100 },
        ],
        "Additional Report": [
            { name: "Micraneurysms", percent: 75.6 },
            { name: "Hard Exudates", percent: 50 },
            { name: "Cotton Wool Spot", percent: 38.2 },
            { name: "DME", percent: 37.7 },
            { name: "HM", percent: 69.3 },

        ],
    },

  {
        "Disease Report": [
            { name: "Hypertensive DR", percent: 40.9 },
        ],
        "DR Report": [
            { name: "dr_4", percent: 100 },
        ],
        "Additional Report": [
            { name: "Hard Exudates", percent: 92.7 },
            { name: "DME", percent: 86.1 },
            { name: "FPD", percent: 41.7 },
            { name: "NVD", percent: 85 },
            { name: "NVE", percent: 77.3 },
            { name: "HM", percent: 60 },
        ],
    },

     {
        "Disease Report": [
            { name: "Drusen", percent: 59.3 },
        ],
        "DR Report": [
            { name: "dr_0", percent: 100 },
        ],
        "Additional Report": [
            { name: "no_dr", percent: 93.8 },
        ],
    },

    {
        "Disease Report": [
            { name: "ERM", percent: 68.7 },
            { name: "Myopic Degeneration", percent: 56.7 },
        ],
        "DR Report": [
            { name: "dr_4", percent: 100 },
        ],
        "Additional Report": [
            { name: "Laser", percent: 80.8 },
            { name: "Hard Exudates", percent: 82.1 },
            { name: "DME", percent: 59.1 },
            { name: "Micraneurysms", percent: 38.8 },
            { name: "HM", percent: 35.3 },
        ],
    },

    {
        "Disease Report": [
            { name: "Peripapilary Atrophy", percent: 92.5 },
        ],
        "DR Report": [
            { name: "dr_0", percent: 100 },
        ],
        "Additional Report": [
            { name: "no_dr", percent: 99.8 },
        ],
    },

     {
        "Disease Report": [
            { name: "Drusen", percent: 51.4 },
        ],
        "DR Report": [
            { name: "dr_4", percent: 100 },
        ],
        "Additional Report": [
            { name: "NVD", percent: 88.4 },
            { name: "Micraneurysms", percent: 70.7 },
            { name: "Hard Exudates", percent: 97.4 },
            { name: "Cotton Wool Spot", percent: 71.6 },
            { name: "DME", percent: 97.9 },
            { name: "NVE", percent: 90.2 },
            { name: "HM", percent: 58 },
            { name: "Viterous HM", percent: 40.3 },
        ],
    },

     {
        "DR Report": [
            { name: "dr_4", percent: 100 },
        ],
        "Additional Report": [
            { name: "NVE", percent: 96 },
            { name: "Hard Exudates", percent: 98.6 },
            { name: "DME", percent: 96.9 },
            { name: "FPE", percent: 86.4 },
            { name: "NVD", percent: 97.4 },
            { name: "Viterous HM", percent: 88.5 },
            { name: "HM", percent: 45.3 },
        ],
    },

    {
        "Disease Report": [
            { name: "Myopic Degeneration", percent: 94.9 },
        ],
        "DR Report": [
            { name: "dr_0", percent: 100 },
        ],
        "Additional Report": [
            { name: "no_dr", percent: 98.5 },
        ],
    },

     {
        "DR Report": [
            { name: "dr_3", percent: 100 },
        ],
        "Additional Report": [
            { name: "Hard Exudates", percent: 93.9 },,
            { name: "Cotton Wool Spot", percent: 96.1 },
            { name: "DME", percent: 97.2 },
            { name: "High HM", percent: 70.2 },
            { name: "Micraneurysms", percent: 29.2 },
        ],
    },

     {
        "Disease Report": [
            { name: "Tortuous vessels", percent: 71.7 },
        ],
        "DR Report": [
            { name: "dr_0", percent: 100 },
        ],
        "Additional Report": [
            { name: "no_dr", percent: 100 },
        ],
    },
     {
        "Disease Report": [
            { name: "Normal", percent: 93.2 },
        ],
    },
    {
        "Disease Report": [
            { name: "Drusen", percent: 92.6 },
        ],
    },
     {
        "Disease Report": [
            { name: "DME", percent: 93.1 },
        ],
    },
  {
        "Disease Report": [
            { name: "CNV", percent: 71.2 },
        ],
    },
    {
        "Disease Report": [
            { name: "AMD", percent: 93.7 },
        ],
    },
     {
        "Disease Report": [
            { name: "CSR", percent: 91.6 },
        ],
    },
    {
        "Disease Report": [
            { name: "DR", percent: 84.5 },
        ],
    },
     {
        "Disease Report": [
            { name: "MH", percent: 88.2 },
        ],
    },
  ];
  return (
    <>
      <div className="container">
        <div className="fundus-oct">
          <div className="fundus">
            <p className="heading">Fundus</p>
            <div className="button-container">
              <button
                className="button-item"
                onClick={() => handleImageChange(glaucoma, glaucom,0)}
              >
                Glaucoma
              </button>
              <button
                className="button-item"
                onClick={() => handleImageChange(ARMD2, ARMD,1)}
              >
                ARMD
              </button>
              <button
                className="button-item"
                onClick={() => handleImageChange(DME2, DME,2)}
              >
                DME
              </button>
              <button
                className="button-item"
                onClick={() => handleImageChange(DR11, DR1,3)}
              >
                DR1
              </button>
              <button
                className="button-item"
                onClick={() => handleImageChange(DR22, DR2,4)}
              >
                DR2
              </button>
              <button
                className="button-item"
                onClick={() => handleImageChange(DR33, DR3,5)}
              >
                DR3
              </button>
              <button
                className="button-item"
                onClick={() => handleImageChange(DR44, DR4,6)}
              >
                DR4
              </button>
              <button
                className="button-item"
                onClick={() => handleImageChange(Laser2, Laser,8)}
              >
                Laser
              </button>
              <button
                className="button-item"
                onClick={() => handleImageChange(Drusen2, Drusen,7)}
              >
                Drusen
              </button>
              <button
                className="button-item"
                onClick={() => handleImageChange(Soft2, SoftEx,13)}
              >
                Hard Exudates
              </button>
              <button
                className="button-item"
                onClick={() => handleImageChange(NVD2, NVD,10)}
              >
                NVD
              </button>
              <button
                className="button-item"
                onClick={() => handleImageChange(Peripa2, Peripa,9)}
              >
                Peripapillary Atrophy
              </button>
              <button
                className="button-item"
                onClick={() => handleImageChange(NVE2, NVE,11)}
              >
                NVE
              </button>
              <button
                className="button-item"
                onClick={() => handleImageChange(Tortous2, Tortous,14)}
              >
                Tartous Vessels
              </button>
              <button
                className="button-item"
                onClick={() => handleImageChange(Myopic2, Myopia,12)}
              >
                Myopic Degeneration
              </button>
            </div>
          </div>
          <div className="oct">
            <p className="heading">OCT</p>
            <div className="button-container">
              <button
                className="button-item"
                onClick={() => handleImageChange(NORMALOCT, NORMAL,15)}
              >
                Normal
              </button>
              <button
                className="button-item"
                onClick={() => handleImageChange(DRUSSENOCT, DRUSSEN,16)}
              >
                Drusen
              </button>
              <button
                className="button-item"
                onClick={() => handleImageChange(DMEOCT, DME22,17)}
              >
                DME
              </button>
              <button
                className="button-item"
                onClick={() => handleImageChange(CNVOCT, CNV,18)}
              >
                CNV
              </button>
              <button
                className="button-item"
                onClick={() => handleImageChange(AMDOCT, AMD,19)}
              >
                AMD
              </button>
              <button
                className="button-item"
                onClick={() => handleImageChange(CSROCT, CSR,20)}
              >
                CSR
              </button>
              <button
                className="button-item"
                onClick={() => handleImageChange(DROCT, DR,21)}
              >
                DR
              </button>
              <button
                className="button-item"
                onClick={() => handleImageChange(MHOCT, MH,22)}
              >
                MH
              </button>
            </div>
          </div>
        </div>
        <div className="target-img">
          <div className="quadrant top-left"></div>
          <div className="quadrant top-right"></div>
          <div className="quadrant bottom-left"></div>
          <div className="quadrant bottom-right"></div>
          <img src={image} className="bulls-eye" alt="image1" />
        </div>
        <div className="report">
          <div className="generated-report">
            <p className="heading">Generated Report</p>
            <img src={image2} className="retina-img" alt="retina" />
            <p className="para">
              This report is for screening purpose only. No
              <br />
              way is this meant to replace doctor's
              <br />
              diagnosis. kindly correlate clinically
            </p>
          </div>
           {/* <div className="possible-diseases-container">
            <h3 className="possible-disease-heading">Possible Diseases</h3>
            <div className="progress-bar-cont">
              <p className="disease-name">Disease report</p>
              <ProgressBar name={"glaucoma"} percent={glaucomaPercent} />
            </div>
            <div className="progress-bar-cont">
              <p className="disease-name">DR Report</p>
              <ProgressBar name={"dr_0"} percent={drPercent} />
            </div>
            <div className="progress-bar-cont">
              <p className="disease-name">Additional Report</p>
              <ProgressBar name={"no_dr"} percent={nodrPercent} />
            </div>

            <div className="doctor-recommend">
              <div className="red-ball"></div>
              <div>
                <p style={{ fontSize: "14px" }}>Doctor Review Recommended</p>
              </div>
            </div>
          </div>  */}
             <div className="possible-diseases-container">
      <h3 className="possible-disease-heading">Possible Diseases</h3>
      {diseaseData.map((data, index) => (
        <div key={index}>
          {currentIndex === index && (
            <div>
              {Object.entries(data).map(([category, values], i) => (
                <div key={i} className="progress-bar-cont">
                  <p className="disease-name">{category}</p>
                  {values.map((item, j) => (
                    <ProgressBar key={j} name={item.name} percent={item.percent} />
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
      <div className="doctor-recommend">
        <div className="red-ball"></div>
        <div>
          <p style={{ fontSize: "14px" }}>Doctor Review Recommended</p>
        </div>
      </div>
    </div>
          
        </div>
      </div>
      <div className="upload-button-cont">
        <center>
          <button className="button-item-new">
            <div className="button-content">
              <p className="upload-name">Upload Fundus Image </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-arrow-right-circle"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"
                />
              </svg>
            </div>
          </button>
          <button className="button-item-new">
            <div className="button-content">
              <p className="upload-name">Upload OCT Image</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-arrow-right-circle"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"
                />
              </svg>
            </div>
          </button>
        </center>
      </div>
    </>
  );
};

export default Content;
