import './MainPageSlideshow.css';
import React, { useState, useEffect } from 'react';


const images = require.context('../public/Images/Vertical', true);
const imageList = images.keys().map(image => images(image));

export function MainSlideshow() {
    const [currIndex, setcurrIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (currIndex === imageList.length - 1) {
                setcurrIndex(0);
            }
            else {
                setcurrIndex(currIndex + 1);
            }
        }, 2700)

        return () => clearInterval(intervalId);
    }, [])

    return (
        <div>
            <img src={imageList[currIndex]} alt={`slideshow featured menu item ${currIndex}`} />
        </div>
    )
}

