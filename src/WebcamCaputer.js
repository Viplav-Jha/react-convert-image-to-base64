
import React, { useRef,useCallback,useState } from 'react';
import Webcam from "react-webcam";
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';

const videoConstraints = {
    width:250,
    height:400,
    facingMode:"user",
}


function WebcamCaputer() {
    const webcamRef = useRef(null)
    const [image, setImage] = useState("");

  const capture= useCallback(()=>{
    const imageSrc = webcamRef.current.getScreenshot();
    console.log(imageSrc);
    setImage(imageSrc)

  },[webcamRef])

    return (
        <div className="webcamCapture">
          <Webcam 
          audio={false}
          height={videoConstraints.height} ref={webcamRef} 
          screenshotFormate="image/jpeg"
          width={videoConstraints.width}
          videoConstraints={videoConstraints}

          />
       <RadioButtonUncheckedIcon 
       className="webcamCapture__button" 
        onClick={capture}
        fontSize="large"
       />
      <img src={image} alt="" />

        </div>
    );
}

export default WebcamCaputer;