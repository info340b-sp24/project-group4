import { HomeSlideshow } from './HomeSlideshow';
import { Welcome } from './MainPageWelcome';
import { ReviewSection } from './ReviewSection';

export function HomePage() {
    return (
        <div>
            <HomeSlideshow />
            <Welcome />
            <ReviewSection />
        </div>
    )
}