import { Meal } from './Meal';

const menuData = {


    smallPlatesAndSides: [

        { name: 'Gyoza', description: 'Six chicken-and-veggie or vegetarian potsticker dumplings.', price: '$10.00', imgSrc: '/Images/Gyoza2.jpg' },
       
        { name: 'Calamari', description: 'Six sticks of calamari, deep fried.', price: '$9.00', imgSrc: '/Images/Fried_Calamari.jpg' },
        { name: 'Takoyaki', description: 'Six octopus dumplings topped with sauce and dried bonito.', price: '$13.00', imgSrc: '/Images/Takoyaki.jpg' },
        { name: 'Croquettes', description: 'Two breaded mashed potato fritters with takoyaki sauce', price: '$10.00', imgSrc: '/Images/Croquette.jpg' },
        
        
    ],
    
};

function formatCategoryTitle(category) {
    if (category === 'smallPlatesAndSides') {
        return 'Small Plates & Sides';
    }
    return category.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
}

export function Menu() {
    return (
        <div className="menu">
            {Object.keys(menuData).map(category => (
                <div key={category} className="menu-category">
                    <h2>{formatCategoryTitle(category)}</h2>
                    <div className="meals">
                        {menuData[category].map((meal, index) => (
                            <Meal key={index} {...meal} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}