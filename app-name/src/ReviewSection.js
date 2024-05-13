import './ReviewSection.css';
import React, { useState } from 'react';


const images = require.context('../public/Images/ReviewPhotos', true);
const imageList = images.keys().map(image => images(image));
var reviewList = ["this is good.", "wow.", "amazing.", "this is great.", "nice food.", "good."];



export function ReviewSection() {
    const [currentReview, setCurrentReview] = useState(0);

    function handleClick(event) {
        if (currentReview === reviewList.length - 1) {
            setCurrentReview(0);
        } else {
            setCurrentReview(currentReview + 1);
        }
    }

    var textReview = reviewList[currentReview];
    var pictureReview = imageList[currentReview];

    function handleSubmit() {
        return (
            <p>submitted!</p>
        );
    }

    return (
        <div className='reviewContainer'>
            <img src={pictureReview} className='reviewImgs'></img>
            <p>{textReview}</p>
            <button aria-label="next arrow button" onClick={handleClick}><span class="material-icons">arrow_forward_ios</span></button>

            <form onSubmit={handleSubmit} aria-label="submit a review form">
                <label>
                    <input className="textReviewInput" type="text" minlength="3" maxlength="300" placeholder="Submit a review with us! (min char 3; max char 300)" />
                </label>
                <label>
                    <input type="file" name="file" />
                </label>
                <input type="submit" />
            </form>
        </div>
    )
}