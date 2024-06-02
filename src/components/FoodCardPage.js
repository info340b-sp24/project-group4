import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { Link, useParams } from 'react-router-dom';
import { getDatabase, ref, get, child, set } from "firebase/database";
import StarRatings from 'react-star-ratings';

export function FoodCardPage() {
    const [FOOD_DETAILS, setFOOD_DETAILS] = useState(null);
    const [currRatings, setCurrRatings] = useState(0);
    const [currAvgRatings, setCurrAvgRatings] = useState(0);
    const [comments, setComments] = useState([]);

    const { foodName } = useParams();
    const foodNameString = decodeURIComponent(foodName);

    const db = getDatabase();
    const FoodDataRef = ref(db, "FoodDetails/FoodDetailsData");

    useEffect(() => {
        async function fetchData() {
            try {
                const snapshot = await get(FoodDataRef);
                setFOOD_DETAILS(snapshot.val());
            } catch (error) {
                console.log(error);
            }
        }

        fetchData();
    }, []);

    useEffect(() => {
        if (FOOD_DETAILS) {
            getRatings();
        }
    }, [FOOD_DETAILS]);

    function getRatings() {
        if (!FOOD_DETAILS) return;

        const itemId = Object.keys(FOOD_DETAILS).find(
            (key) => FOOD_DETAILS[key].name === foodNameString
        );

        if (itemId) {
            setCurrAvgRatings(FOOD_DETAILS[itemId].avgRating);
            setCurrRatings(FOOD_DETAILS[itemId].ratings);
            setComments(FOOD_DETAILS[itemId].comments);
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        const dateTime = new Date();
        const currentTime = dateTime.toLocaleString();
        const newComment = `${currentTime} - ${event.target.comment.value}`;
        const updatedComments = [...comments, newComment];

        const itemId = Object.keys(FOOD_DETAILS).find(
            (key) => FOOD_DETAILS[key].name === foodName
        );

        let index = updatedComments.length;

        if (itemId) {
            set(child(ref(db), `FoodDetails/FoodDetailsData/${itemId}/comments/${index}`), newComment)
                .catch((error) => {
                    console.error('Error updating data:', error);
                });
        }

        setComments(updatedComments);
    }

    const commentList = () => {
        return (
            <div className="comments">
                <h2>Comments</h2>
                {comments.map((comment, index) => (
                    <div key={index} className="aComment">
                        {comment}
                    </div>
                ))}
            </div>
        );
    };

    let food = _.find(FOOD_DETAILS, { name: foodNameString });
    if (!food) {
        return <div>Food not found</div>;
    }

    return (
        <div aria-label='pop up food card detail' className="cardPageDetail">
            <Link to={`/foodDetails`} className="btn btn-primary material-icons">close</Link>
            <h1>{food.name} ({food.calories} Calories)</h1>
            <p>{currRatings === null ? '0' : (currRatings)} ratings, {currAvgRatings === null ? '' : (currAvgRatings.toFixed(2))} stars</p>
            <StarRatings
                rating={currAvgRatings}
                starRatedColor="gold"
                starDimension="20px"
                numberOfStars={5}
                name='rating'
            />
            <div className='foodDetailsContainer'>
                <img src={food.img} alt='{food.name}' />
                <div>
                    <p>Gluten free options? {food.gfoption ? 'Yes' : 'No'}.</p>
                    <p>Vegan options? {food.veganoption ? 'Yes' : 'No'}.</p>
                    <p>Spicy? {food.spicy ? 'Yes' : 'No'}.</p>
                    <p>Contains seafood? {food.seafood ? 'Yes' : 'No'}.</p>
                </div>
            </div>
            {commentList()}
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="comment">Comment:</label>
                        <textarea id="comment" name="comment" ></textarea>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

