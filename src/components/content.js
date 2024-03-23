import ProgressBar from "./progressBar.js";
import './content.css'
import glaucoma from "./assets/images/final-eye-samples/glaucoma.png"
import glaucom from "./assets/images/final-heatmaps/Glaucoma.png"
import ARMD from "./assets/images/final-heatmaps/ARMD.png"
import dme from "./assets/images/final-eye-samples/DME.png"
import DME from "./assets/images/final-heatmaps/DME.png"
import DR1 from "./assets/images/final-heatmaps/DR1.png"
import DR2 from "./assets/images/final-heatmaps/DR2.png"
import DR3 from "./assets/images/final-heatmaps/DR3.png"
import DR4 from "./assets/images/final-heatmaps/DR4.png"
import Drusen from "./assets/images/final-heatmaps/Drusen.png"
import Laser from "./assets/images/final-heatmaps/Laser.png"
import Myopia from "./assets/images/final-heatmaps/MyopicDegenration.png"
import NVD from "./assets/images/final-heatmaps/NVD.png"
import NVE from "./assets/images/final-heatmaps/NVE.png"
import Peripa from "./assets/images/final-heatmaps/PeripappilaryAtrophy.png"
import SoftEx from "./assets/images/final-heatmaps/SoftExudates.png"
import Tortous from "./assets/images/final-heatmaps/TortousVessels.png"
import AMD from "./assets/images/final-oct-heatmaps/AMD.png";
import CNV from "./assets/images/final-oct-heatmaps/CNV.png";
import CSR from "./assets/images/final-oct-heatmaps/CSR.png";
import DME2 from "./assets/images/final-oct-heatmaps/DME.png";
import DR from "./assets/images/final-oct-heatmaps/DR.png";
import DRUSSEN from "./assets/images/final-oct-heatmaps/DRUSEN.png";
import MH from "./assets/images/final-oct-heatmaps/MH.png";
import NORMAL from "./assets/images/final-oct-heatmaps/NORMAL.png";
import ARMD2 from "./assets/images/final-eye-samples/ARMD.png"
import DR11 from "./assets/images/final-eye-samples/DR1.png"
import DR22 from "./assets/images/final-eye-samples/DR2.png"
import DR33 from "./assets/images/final-eye-samples/DR3.png"
import DR44 from "./assets/images/final-eye-samples/DR4.png"
import Laser2 from "./assets/images/final-eye-samples/Laser.png"
import Myopic2 from "./assets/images/final-eye-samples/MyopicDegenration.png"
import Drusen2 from "./assets/images/final-eye-samples/Drusen.png"

import NVD2 from "./assets/images/final-eye-samples/NVD.png"
import NVE2 from "./assets/images/final-eye-samples/NVE.png"
import Peripa2 from "./assets/images/final-eye-samples/PeripappilaryAtrophy.png"
import Soft2 from "./assets/images/final-eye-samples/SoftExudates.png"
import Tortous2 from "./assets/images/final-eye-samples/TortousVessels.png"


import {useState} from 'react';

const Content = () => {
  const glaucomaPercent = 75.8;
  const drPercent = 100;
  const nodrPercent=99.3;
  const [image,setimage]=useState("");
  const [image2,setimage2]=useState("");

  const handleImageChange = (image,image2) => {
    setimage(image);
    setimage2(image2);

  };

  return(
    <>
    <div className='container'>
     <div className="fundus-oct">
       <div className='fundus'>
        <p className="heading">Fundus</p>
        <div className='button-container'>
          <button className='button-item' onClick={() => handleImageChange(glaucoma,glaucom)}>Glaucoma</button>
          <button className='button-item' onClick={() => handleImageChange(ARMD2,ARMD)}>ARMD</button>
          <button className='button-item'onClick={() => handleImageChange(DME2,DME)}>DME</button>
          <button className='button-item' onClick={() => handleImageChange(DR11,DR1)}>DR1</button>
          <button className='button-item'onClick={() => handleImageChange(DR22,DR2)}>DR2</button>
          <button className='button-item'onClick={() => handleImageChange(DR33,DR3)}>DR3</button>
          <button className='button-item'onClick={() => handleImageChange(DR44,DR4)}>DR4</button>
          <button className='button-item'onClick={() => handleImageChange(Laser2,Laser)}>Laser</button>
          <button className='button-item'onClick={() => handleImageChange(Drusen2,Drusen)}>Drusen</button>
          <button className='button-item'onClick={() => handleImageChange(Soft2,SoftEx)}>Hard Exudates</button>
          <button className='button-item'onClick={() => handleImageChange(NVD2,NVD)}>NVD</button>
          <button className='button-item'onClick={() => handleImageChange(Peripa2,Peripa)}>Peripapillary Atrophy</button>
          <button className='button-item'onClick={() => handleImageChange(NVE2,NVE)}>NVE</button>
          <button className='button-item'onClick={() => handleImageChange(Tortous2,Tortous)}>Tartous Vessels</button>
          <button className='button-item'onClick={() => handleImageChange(Myopic2,Myopia)}>Myopic Degeneration</button>
        </div>
       </div>
       <div className='oct'>
        <p className="heading">OCT</p>
        <div className='button-container'>
          <button className='button-item'onClick={() => handleImageChange(AMD)}>Normal</button>
          <button className='button-item'onClick={() => handleImageChange(CNV)}>Drusen</button>
          <button className='button-item'onClick={() => handleImageChange(CSR)}>DME</button>
          <button className='button-item'onClick={() => handleImageChange(DME)}>CNV</button>
          <button className='button-item'onClick={() => handleImageChange(DR)}>AMD</button>
          <button className='button-item'onClick={() => handleImageChange(DRUSSEN)}>CSR</button>
          <button className='button-item'onClick={() => handleImageChange(MH)}>DR</button>
          <button className='button-item'onClick={() => handleImageChange(NORMAL)}>MH</button>
        </div>
      </div>
     </div>    
      <div className='target-img'>
          <div className='quadrant top-left'></div>
          <div className='quadrant top-right'></div>
          <div className='quadrant bottom-left'></div>
          <div className='quadrant bottom-right'></div>
          <img src={image} className='bulls-eye'alt="image1"/>
        </div>
      <div className='report'>
         <div className='generated-report'>
             <p className='heading'>Generated Report</p>
             <img src={image2} className='retina-img' alt='retina'/> 
             <p className='para'>This report is for screening purpose only. No<br/>way is this meant to replace doctor's<br/>diagnosis. kindly correlate clinically</p>
          </div> 
          <div className='possible-diseases-container'>
            <h3 className="possible-disease-heading">Possible Diseases</h3>
            <div className="progress-bar-cont">
               <p className="disease-name">Disease report</p>
               <ProgressBar  name={"Glaucoma"} percent={glaucomaPercent} />
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
                <p style={{fontSize:"14px"}}>Doctor Review Recommended</p>
              </div>
            </div>
          </div>
      </div>
     </div> 
     <div className="upload-button-cont">
        <center>
            <button className="button-item-new"><div className="button-content"><p className="upload-name">Upload Fundus Image </p><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
            </svg></div></button>
            <button className="button-item-new"><div className="button-content"><p className="upload-name">Upload OCT Image</p><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
            </svg></div></button>
        </center>
       </div>
    </>
  )
}

export default Content;