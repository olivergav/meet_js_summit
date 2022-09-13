import {useRef} from "react";

function ImageTogglerOnMouseOver({primaryImage, secondaryImage}){
    const imageRef = useRef(null);

    return (
        <div>
            <img src={primaryImage}
                 ref={imageRef}
                 onMouseOver={() => {
                     imageRef.current.src = secondaryImage
                 }}
                 onMouseOut={() => {
                     imageRef.current.src = primaryImage
                 }}
                alt="Speaker"
            />
        </div>
    )
}

export default ImageTogglerOnMouseOver;