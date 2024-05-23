import { ReviewSection } from './ReviewSection';
import React, { useState, useEffect } from 'react';


const images = require.context('../../public/Images/Vertical', true);
const imageList = images.keys().map(image => images(image));

export function HomePage() {
    const [currIndex, setcurrIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (currIndex === imageList.length - 1) {
                setcurrIndex(0);
            }
            else {
                setcurrIndex(currIndex + 1);
            }
        }, 2700);
        return () => clearInterval(intervalId);
    })

    return (
        <div class="HomePage">
            <div aria-label="a menu photos slideshow">
                <img className='homeSlideshowBackground' src={imageList[currIndex]} alt={`slideshow featured menu item ${currIndex}`} />
            </div>
            <div className='welcomeContainer'>
                <div>
                    <h1>Welcome to Ridge Cupbop and Ramen!</h1>
                </div>
                <div className='welcomeContainerInner' aria-label="a semi-opaque white rectangle">
                    <p>About us... ~</p>
                    <p>We are committed to good food that will make you happy.</p>
                    <p>We hope to make your ordering, menu browsing, and reservations easier. And don't forget to see some of our customer reviews and photos, and submit your own below!</p>
                </div>
            </div>
            <ReviewSection />
        </div>
    )
}