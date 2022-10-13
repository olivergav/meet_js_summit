import React from "react";
import ImageChangeOnScroll from "./ImageChangeOnScroll";

// eslint-disable-next-line react/display-name
const SpeakerDetail = React.memo(({speaker, heartFavoriteHandler}) => {
    const {id, firstName, lastName, bio, favorite} = speaker;
    console.log(`SpeakerDetail:${id} ${firstName} ${lastName} ${favorite}`);

    return (
        <div className="card col-4 cardmin">
            <ImageChangeOnScroll
                className="card-img-top"
                primaryImage={`/static/speakers/bw/Speaker-${id}.jpg`}
                secondaryImage={`/static/speakers/Speaker-${id}.jpg`}
                alt={`${firstName} ${lastName}`}
            />
            <div className="card-body">
                <h4 className="card-title">
                    <button
                        className={favorite ? 'heartredbutton' : 'heartdarkbutton'}
                        onClick={() => {
                            heartFavoriteHandler(speaker)
                        }}
                    />

                    <span>
                        {firstName} {lastName}
                    </span>

                </h4>

                <span>{bio}</span>
            </div>
        </div>
    )
})

export default SpeakerDetail;