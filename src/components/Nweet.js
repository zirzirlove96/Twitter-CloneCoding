import React from "react";

const Nweet = ({nweetObj, IsOwner}) => {
    return(
        <div>
            <h4>{nweetObj.text}</h4>
            {IsOwner && (
                <>
                    <button>Edit button</button>
                    <button>Delete button</button>
                </>
            )}
        </div>
    );
}

export default Nweet;