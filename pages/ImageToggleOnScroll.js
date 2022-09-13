import ImageChangeOnScroll from "../src/ImageChangeOnScroll";
import {useEffect, useState} from "react";

function ImageToggleOnScroll(props){
    const [currentSpeakerId, setCurrentSpeakerId] = useState(0);
    const [mouseEventCounter, setMouseEventCounter] = useState(0);

    useEffect(() => {
        window.document.title = `SpeakerID: ${currentSpeakerId}`
    }, [currentSpeakerId])

    return (
        <>
            <span>
                Mouse Event Counter: {mouseEventCounter}
            </span>

            {[1124, 187, 823, 1269, 1530].map((speakerId) => (
                <div
                    key={speakerId}
                    onMouseOver={() => {
                        setCurrentSpeakerId(speakerId);
                        setMouseEventCounter(mouseEventCounter + 1);

                        // console.log(`On mouse over: ${mouseEventCounter}`);
                    }}>
                    <ImageChangeOnScroll
                        primaryImage={`./static/speakers/bw/Speaker-${speakerId}.jpg`}
                        secondaryImage={`./static/speakers/Speaker-${speakerId}.jpg`}/>
                </div>
            ))}

        </>
    )
}

export default ImageToggleOnScroll;