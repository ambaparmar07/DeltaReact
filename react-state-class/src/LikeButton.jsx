import { useState } from "react";

export default function LikeButton() {
    let [isLiked, setIsLLiked] = useState(false)

    // let clicked = () => {
    //     console.log("clicked");
    // }

    let toggleLike = () => {
        setIsLLiked(!isLiked);
    }

    let likeStyle = { color: "red" };

    return (
        <div>
            <p onClick={toggleLike}>
                {isLiked ? (
                    <i className="fa-solid fa-heart" style={likeStyle}></i>
                ) : (
                    <i className="fa-regular fa-heart"></i>
                )
                }
            </p>
        </div>
    )
}