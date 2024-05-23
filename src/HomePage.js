import { HomeSlideshow } from './HomeSlideshow';
import { Welcome } from './MainPageWelcome';
import { ReviewSection } from './ReviewSection';
import './HomePage.css';


export function HomePage() {
    return (
        <div class="HomePage">
            <HomeSlideshow />
            <Welcome />
            <ReviewSection />
        </div>
    )
}