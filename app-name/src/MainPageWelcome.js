import './MainPageWelcome.css';
export function Welcome() {
    return (
        <div className='welcomeContainer'>
            <div>
                <h1>Welcome to Ridge Cupbop and Ramen!</h1>
            </div>
            <div className='welcomeContainerInner' aria-label="a semi-opaque white rectangle">
                <p>About us...</p>
                <p>We are committed to good food that will make you happy. We hope to make your ordering, menu browsing, and reservations easier. And don't forget to see some of our customer reviews and photos, and submit your own below!</p>
            </div>
        </div>
    )
}