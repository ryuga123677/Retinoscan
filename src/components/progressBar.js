import './progressBar.css'

const ProgressBar= ({name, percent}) => {

  return (
    <>
      <div class="progress-cont">
        <div className='name-cont'>
           <p className='name'>{name}</p>
           <p><span>{parseFloat(percent)}%</span></p>
        </div>
         <div className="progress">
            <div
        // style={{ width: `${percent}%` }}
                style={{
                transform: `scaleX(${(parseFloat((percent)/100))})`,
                 transformOrigin: "left"
                }}
        
                aria-valuenow={percent}
               role="progressbar"
            />
            </div>
      </div>  
    </>
    
  );
}

export default ProgressBar
