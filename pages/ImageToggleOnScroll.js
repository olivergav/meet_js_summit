import ImageChangeOnScroll from "../src/ImageChangeOnScroll";

function ImageToggleOnScroll(props){
    return (
        <>
            {[1124, 187, 823, 1269, 1530].map((speakerId) => (
                <ImageChangeOnScroll
                    key={speakerId}
                    primaryImage={`./static/speakers/bw/Speaker-${speakerId}.jpg`}
                    secondaryImage={`./static/speakers/Speaker-${speakerId}.jpg`}/>
            ))}

        </>
    )
}

export default ImageToggleOnScroll;