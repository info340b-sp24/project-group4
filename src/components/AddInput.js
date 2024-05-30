import React, { useState, useEffect } from 'react';
import { getDatabase, ref as dbRef, push, get } from 'firebase/database';
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useParams } from 'react-router-dom';

export function AddInput() {
    const { foodName } = useParams();
    const foodNameString = decodeURIComponent(foodName);
    const [comment, setComment] = useState('');
    const [image, setImage] = useState(null);
    const [feedback, setFeedback] = useState([]);

    const db = getDatabase();
    const storage = getStorage();
    const feedbackRef = dbRef(db, `FoodDetails/Feedback/${foodNameString}`);

    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };

    const handleImageChange = (e) => {
        if (e.target.files.length > 0 && e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!comment && !image) return;

        let imageURL = '';

        if (image) {
            const fileRef = storageRef(storage, `images/${foodNameString}/${image.name}`);
            await uploadBytes(fileRef, image)
                .then(() => {
                    return getDownloadURL(fileRef);
                })
                .then((url) => {
                    imageURL = url;
                })
                .catch((error) => {
                    console.error('Error uploading image:', error);
                });
        }

        const newFeedback = {
            comment: comment,
            imageURL: imageURL,
            timestamp: Date.now()
        };

        push(feedbackRef, newFeedback)
            .then(() => {
                setFeedback([...feedback, newFeedback]);
                setComment('');
                setImage(null);
            })
            .catch((error) => {
                console.error('Error saving feedback:', error);
            });
    };

    useEffect(() => {
        get(feedbackRef).then((snapshot) => {
            if (snapshot.exists()) {
                setFeedback(Object.values(snapshot.val()));
            }
        }).catch((error) => {
            console.error('Error fetching feedback:', error);
        });
    }, [foodNameString]);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="comment">Comment:</label>
                    <textarea id="comment" value={comment} onChange={handleCommentChange}></textarea>
                </div>
                <div>
                    <label htmlFor="image">Upload Image:</label>
                    <input type="file" id="image" accept="image/*" onChange={handleImageChange} />
                </div>
                <button type="submit">Submit</button>
            </form>
            <div>
                <h3>User Feedback:</h3>
                {feedback.map((fb, index) => (
                    <div key={index}>
                        <p>{fb.comment}</p>
                        {fb.imageURL && <img src={fb.imageURL} alt="User uploaded" />}
                    </div>
                ))}
            </div>
        </div>
    );
}
