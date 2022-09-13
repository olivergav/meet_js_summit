import ImageTogglerOnMouseOver from "../src/ImageTogglerOnMouseOver";

function ImageChangeOnMouseOver(){

    return (
        <div>
            <ImageTogglerOnMouseOver primaryImage={"./static/speakers/bw/speaker-187.jpg"} secondaryImage={"./static/speakers/speaker-187.jpg"}/>
            <ImageTogglerOnMouseOver primaryImage={"./static/speakers/bw/speaker-823.jpg"} secondaryImage={"./static/speakers/speaker-823.jpg"}/>
            <ImageTogglerOnMouseOver primaryImage={"./static/speakers/bw/speaker-1124.jpg"} secondaryImage={"./static/speakers/speaker-1124.jpg"}/>
        </div>
    )
}

export default ImageChangeOnMouseOver;