import React, { useState, useEffect } from 'react';
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getDatabase, ref, get, set, child } from 'firebase/database';

const images = require.context('../../public/Images/ReviewPhotos', true);

export function ReviewSection() {
    const [imageList, setImageList] = useState(images.keys().map(image => images(image)));
    const [reviewList, setReviewList] = useState(["Friendly service and good food. What more can you ask for? After visiting Snoqualmie Falls, we stopped in for lunch. Cozy place with good selection of dry and soupy dishes. Ramen was non fried Japanese style soup. Yummy and soothing. Kimchi pancake was not spicy and perfect dip in the sauce that came with it. We're definitely stopping by again next time we visit the area again.", "Delicious food and great service. Walk in and order first, then sit down. Their kitchen is fast! Complimentary barley tea :) and kimchi.", "The food is delicious and the staff is wonderful. We're big fans of the ramen and hot pots!", "Awesome little restaurant with friendly service and great tasting food. The menu is large and offers lots of choices including vegetarian options. Loved our visit here and will definitely return!", "This place is sooooo yummy! The ramen is very good. You can dine in or take out. There are seats/tables inside and outside for sunny days.", "The food was awesome. My husband got the spicy ramen with pork belly and I got the shoyu vegetarian. We both truly enjoyed our dishes and the environment was so welcoming. Very fast and kind service. Limited drink options but that's ok."]);

    const [currentReview, setCurrentReview] = useState(0);
    const [showNotification, setShowNotification] = useState(false);

    const db = getDatabase();
    const storage = getStorage();

    useEffect(() => {
        const reviewsTextListRef = ref(db, "Reviews/ReviewsListData");
        get(reviewsTextListRef).then((snapshot) => {
            if (snapshot.exists()) {
                setReviewList(snapshot.val());
            }
        }).catch((error) => {
            console.error('Error getting data:', error);
        });

        const reviewsPicListRef = ref(db, "Reviews/ReviewsPicturesURL");
        get(reviewsPicListRef).then((snapshot) => {
            if (snapshot.exists()) {
                setImageList(snapshot.val());
                console.log("got image list");
            }
        }).catch((error) => {
            console.error('Error getting data:', error);
        });
    }, []);


    function handleClick(event) {
        if (currentReview === reviewList.length - 1) {
            setCurrentReview(0);
        } else {
            setCurrentReview(currentReview + 1);
        }
        if (showNotification) {
            setShowNotification(false);
        }
    }

    let textReview = "\"" + reviewList[currentReview] + "\"";
    let pictureReview = imageList[currentReview];

    function handleSubmit(event) {
        event.preventDefault();
        const chosenFile = event.target.elements.file.files[0];
        const fileRef = storageRef(storage, `reviews/${chosenFile.name}`);
        uploadBytes(fileRef, chosenFile)
            .then((snapshot) => {
                return getDownloadURL(snapshot.ref);
            }).then((downloadURL) => {
                setImageList([...imageList, downloadURL]);
                setReviewList([...reviewList, event.target.textRev.value]);

                let index = imageList.length;
                set(child(ref(db), `Reviews/ReviewsPicturesURL/${index}`), downloadURL)
                    .catch((error) => {
                        console.error(error);
                    });
                
                set(child(ref(db), `Reviews/ReviewsListData/${index}`), event.target.textRev.value)
                    .catch((error) => {
                        console.error(error);
                    });
                setCurrentReview(reviewList.length - 1);
                setShowNotification(true);
            })
            .catch((error) => console.error(error));
    }

    return (
        <div className='reviewContainer'>
            <img src={pictureReview} className='reviewImgs'></img>
            <p className="textReviewArea">{textReview}</p>
            <button aria-label="next arrow button" onClick={handleClick}><span className="material-icons">arrow_forward_ios</span></button>

            <form onSubmit={handleSubmit} aria-label="submit a review form">
                <label>
                    <input className="textReviewInput" type="text" minLength="3" maxLength="300" placeholder="Submit a review with us! (min char 3; max char 300)" name="textRev" required />
                </label>
                <label>
                    <input type="file" name="file" required />
                </label>
                <input type="submit" />
            </form>
            <p className="noti" style={{ display: showNotification ? 'block' : 'none' }} >Success!</p>
        </div>
    )
}