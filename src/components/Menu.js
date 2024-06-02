import { Meal } from './Meal';

const menuData = {

    cupbop: [
        { name: 'Bibimbap Cupbop', description: 'Steamed rice with lettuce, spinach, zucchini, carorts, cabbage, onion, bean sprouts, and a choice of pork, bulgogi, or tofu. Topped with an over-easy egg.', price: '$21.00', imgSrc: '/Images/Bibimbap1.png' },
        { name: 'Ridge Cupbop', description: 'Steamed rice with lettuce, zucchini, carrots, cabbage, and a choice of chicken, pork, or tofu. Topped with an over-easy fried egg.', price: '$20.00', imgSrc: '/Images/Ridge-Cupbop.jpg' },
        { name: 'Bulgogi Cupbop', description: 'Cupbop for meat lovers. Extra pork or chicken bulgogi cooked with carrots, onions, and green onions. Served on steamed rice with fried egg.', price: '$24.00', imgSrc: '/Images/Bulgogi-Cupbop1.png' },
        { name: 'Bibim Ramen', description: 'Bibimbap ingredients served on chilled and seasoned ramen noodles. No broth.', price: '$20.00', imgSrc: '/Images/Bibim-Ramen1.png' },
        { name: 'Kimchi Fried Rice', description: 'Steamed rice pan-fried with kimchi, onions, and bacon, topped with a fried egg.', price: '$23.00', imgSrc: '/Images/KFR.jpg' },
        { name: 'Curry Chicken Cupbop', description: 'Curry sauce on steamed rice with vegetables, bulgogi chicken, and fried egg.', price: '$20.00', imgSrc: '/Images/Curry-Cupbop.jpg' },
    ],

    ramen: [
        { name: 'Shoyu', description: 'Mildly sweet soy sauce base.', price: '$21.00', imgSrc: '/Images/Ramen-Shoyu3.jpg' },
        { name: 'Tonkatsu', description: 'Rich, creamy pork broth.', price: '$21.00', imgSrc: 'Images/Tonkatsu-Ramen1.png' },
        { name: 'Miso', description: 'Soybean paste & garlic.', price: '$21.00', imgSrc: '/Images/Ramen-Miso2.jpg' },
        { name: 'Spicy', description: 'Roasted sesame and chili oil.', price: '$21.00', imgSrc: '/Images/Ramen-Spicy.jpg' },
        { name: 'Wonton Ramen', description: 'Shoyu broth with ramen noodles and dumplings - additional charge to add meat.', price: '$23.00', imgSrc: '/Images/Wonton-Ramen1.png' },
        { name: 'Shio', description: 'Bonito and sea salt.', price: '$21.00', imgSrc: '/Images/Ramen-Shio.png' },
        { name: 'Curry Udon With Chicken', description: 'Curry broth with chicken, veggies, and a croquette.', price: '$20.00', imgSrc: '/Images/Ramen-Curry.jpg' },
        { name: 'Korean Spicy Ramen', description: 'Red-pepper broth with fried noodles.', price: '$19.00', imgSrc: '/Images/Ramen-Korean-Spicy.jpg' },
        { name: 'Spicy Curry Ramen', description: 'Red-pepper broth and curry broth.', price: '$20.00', imgSrc: '/Images/Spicy-Curry-Ramen.jpg' },
        { name: 'Korean Army Ramen', description: 'Spicy kimchi ramen.', price: '$20.00', imgSrc: '/Images/Army-Ramen.jpg' },
        { name: 'Kid\'s', description: 'Half order of ramen with veggies and meat. No egg.', price: '$12.00', imgSrc: '/Images/Kids-Ramen.png' },
    ],

    houseSpecials: [
        { name: 'Korean BBQ Chicken Wings', description: 'Six large, meaty, fried wings seasoned with choice of sweet soy garlic soy or spicy Korean barbeque.', price: '$19.00', imgSrc: '/Images/Wings.jpg' },
        { name: 'Seafood Pancake', description: 'Large skillet-cooked pancake with squid, shrimp, octopus, mussels, carrots, onions, and zucchini.', price: '$21.00', imgSrc: '/Images/Seafood-Pancake3.jpg' },
        { name: 'Kimchi Pancake', description: 'Large kimchi and onion pancake cooked in a skillet.', price: '$19.00', imgSrc: '/Images/Kimchi-Pancake1.png' },
        { name: 'Okonomiyaki', description: 'Large Osaka-style shredded cabbage and onion pancake topped with strips of bacon and okonomiyaki sauce, mayo, dried bonito fish, over-easy fried egg, and seasoned seaweed.', price: '$22.00', imgSrc: '/Images/Okonomoyaki.jpg' },
        { name: 'Bulgogi Salad', description: 'House salad with marinated pork or chicken bulgogi. Beef for an additional charge.', price: '$23.00', imgSrc: '/Images/Bulgogi-Salad.png' },
        { name: 'Tteokbokki', description: 'Rice cakes in spicy gochujang sauce with veggies. With cheese for an additional charge.', price: '$19.00', imgSrc: '/Images/Tteokbokki1.png' },
        { name: 'Soondubu', description: 'Spicy soft-tofu stew with vegetables, egg, gochujang chili paste and choice of kimchi, seafood, or bulgogi pork. Rice on the side.', price: '$21.00', imgSrc: '/Images/Soondubu.jpg' },
    ],

    smallPlatesAndSides: [
        { name: 'Edamame', description: 'Boiled soybeans sprinkled with salt.', price: '$9.00', imgSrc: '/Images/Edamame1.png' },
        { name: 'Gyoza', description: 'Six chicken-and-veggie or vegetarian potsticker dumplings.', price: '$10.00', imgSrc: '/Images/Gyoza2.jpg' },
        { name: 'Chinese Egg Rolls', description: 'Four veggie egg rolls, deep fried.', price: '$10.00', imgSrc: '/Images/Chinese-Egg-Roll1.png' },
        { name: 'Calamari', description: 'Six sticks of calamari, deep fried.', price: '$9.00', imgSrc: '/Images/Fried_Calamari.jpg' },
        { name: 'Takoyaki', description: 'Six octopus dumplings topped with sauce and dried bonito.', price: '$13.00', imgSrc: '/Images/Takoyaki.jpg' },
        { name: 'Croquettes', description: 'Two breaded mashed potato fritters with takoyaki sauce', price: '$10.00', imgSrc: '/Images/Croquette.jpg' },
        { name: 'Korean Noodle Rolls', description: 'Six deep fried rolls filled with sweet potato noodles, wrapped in seaweed, tempura battered and fried. Spicy or mild.', price: '$10.00', imgSrc: '/Images/Noodle-Roll.jpg' },
        { name: 'House Salad', description: 'Lettuce, bell peppers, cucumbers, onions, tomatoes, carrots and egg, with Asian sesame, honey mustard or thousand island dressing.', price: '$15.00', imgSrc: '/Images/Salad.jpg' },
        { name: 'Seaweed Salad', description: 'Classic seaweed salad.', price: '$10.00', imgSrc: '/Images/Seaweed-Salad.jpg' },
    ],
    
};

function formatCategoryTitle(category) {
    if (category === 'smallPlatesAndSides') {
        return 'Small Plates & Sides';
    }
    return category.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
}

export function Menu() {
    const categories = Object.keys(menuData).map(category => {
        return {
            title: formatCategoryTitle(category),
            meals: menuData[category]
        };
    });

    const mealsArray = categories.map(({ title, meals }, categoryIndex) => (
        <div key={categoryIndex} className="menu-category">
            <h2>{title}</h2>
            <div className="meals">
                {meals.map((meal, mealIndex) => (
                    <Meal key={mealIndex} {...meal} />
                ))}
            </div>
        </div>
    ));

    return (
        <div className="menu">
            {mealsArray}
        </div>
    );
}