import { Meal } from './Meal';
import './Menu.css';

const menuData = {

    houseSpecials: [
        { name: 'Korean BBQ Chicken Wings', description: 'Six large, meaty, fried wings seasoned with choice of sweet soy garlic soy or spicy Korean barbeque.', price: '$19.00', imgSrc: 'url-to-image' },
        { name: 'Seafood Pancake', description: 'Large skillet-cooked pancake with squid, shrimp, octopus, mussels, carrots, onions, and zucchini.', price: '$21.00', imgSrc: 'url-to-image' },
        { name: 'Okonomiyaki', description: 'Large Osaka-style shredded cabbage and onion pancake topped with strips of bacon and okonomiyaki sauce, mayo, dried bonito fish, over-easy fried egg, and seasoned seaweed.', price: '$22.00', imgSrc: 'url-to-image' },
        { name: 'Bulgogi Salad', description: 'House salad with marinated pork or chicken bulgogi. Beef for an additional charge.', price: '$23.00', imgSrc: 'url-to-image' },
        { name: 'Tteokbokki', description: 'Rice cakes in spicy gochujang sauce with veggies. With cheese for an additional charge.', price: '$19.00', imgSrc: 'url-to-image' },
        { name: 'Soondubu', description: 'Spicy soft-tofu stew with vegetables, egg, gochujang chili paste and choice of kimchi, seafood, or bulgogi pork. Rice on the side.', price: '$21.00', imgSrc: 'url-to-image' },
    ],

    smallPlatesAndSides: [
        { name: 'Edamame', description: 'Boiled soybeans sprinkled with salt.', price: '$9.00', imgSrc: 'url-to-image' },
        { name: 'Gyoza', description: 'Six chicken-and-veggie or vegetarian potsticker dumplings.', price: '$10.00', imgSrc: 'url-to-image' },
        { name: 'Chicken Egg Rolls', description: 'Four veggie egg rolls, deep fried.', price: '$10.00', imgSrc: 'url-to-image' },
        { name: 'Calamari', description: 'Six sticks of calamari, deep fried.', price: '$9.00', imgSrc: 'url-to-image' },
        { name: 'Takoyaki', description: 'Croquettes', price: '$13.00', imgSrc: 'url-to-image' },
        { name: 'Croquettes', description: 'Two breaded mashed potato fritters with takoyaki sauce', price: '$10.00', imgSrc: 'url-to-image' },
        { name: 'Korean Noodle Rolls', description: 'Six deep fried rolls filled with sweet potato noodles, wrapped in seaweed, tempura battered and fried. Spicy or mild.', price: '$10.00', imgSrc: 'url-to-image' },
        { name: 'House Salad', description: 'Lettuce, bell peppers, cucumbers, onions, tomatoes, carrots and egg, with Asian sesame, honey mustard or thousand island dressing.', price: '$15.00', imgSrc: 'url-to-image' },
        { name: 'Seaweed Salad', description: 'Classic seaweed salad.', price: '$10.00', imgSrc: 'url-to-image' },
    ],

    ramen: [
        { name: 'Shoyu', description: 'Mildly sweet soy sauce base', price: '$21.00', imgSrc: 'url-to-image' },
        { name: 'Tonkatsu', description: 'Rich, creamy pork broth.', price: '$21.00', imgSrc: 'url-to-image' },
        { name: 'Miso', description: 'Soybean paste & garlic.', price: '$21.00', imgSrc: 'url-to-image' },
        { name: 'Spicy', description: 'Roasted sesame and chili oil.', price: '$21.00', imgSrc: 'url-to-image' },
        { name: 'Wonton Ramen', description: 'Shoyu broth with ramen noodles and dumplings - additional charge to add meat.', price: '$23.00', imgSrc: 'url-to-image' },
        { name: 'Shio', description: 'Bonito and sea salt.', price: '$21.00', imgSrc: 'url-to-image' },
        { name: 'Curry Udon With Chicken', description: 'Curry broth with chicken, veggies, and a croquette.', price: '$20.00', imgSrc: 'url-to-image' },
        { name: 'Korean Spicy Ramen', description: 'Red-pepper broth with fried noodles.', price: '$19.00', imgSrc: 'url-to-image' },
        { name: 'Spicy Curry Ramen', description: 'Red-pepper broth and curry broth.', price: '$20.00', imgSrc: 'url-to-image' },
        { name: 'Korean Army Ramen', description: 'Spicy kimchi ramen.', price: '$20.00', imgSrc: 'url-to-image' },
        { name: 'Kid\'s', description: 'Half order of ramen with veggies and meat. No egg.', price: '$12.00', imgSrc: 'url-to-image' },
    ],

    cupbop: [
        { name: 'Bibimbap Cupbop', description: 'Steamed rice with lettuce, spinach, zucchini, carorts, cabbage, onion, bean sprouts, and a choice of pork, bulgogi, or tofu. Topped with an over-easy egg.', price: '$21.00', imgSrc: 'url-to-image' },
        { name: 'Ridge Cupbop', description: 'Steamed rice with lettuce, zucchini, carrots, cabbage, and a choice of chicken, pork, or tofu. Topped with an over-easy fried egg.', price: '$20.00', imgSrc: 'url-to-image' },
        { name: 'Bibim Ramen', description: 'Bibimbap ingredients served on chilled and seasoned ramen noodles. No broth.', price: '$20.00', imgSrc: 'url-to-image' },
        { name: 'Kimchi Fried Rice', description: 'Steamed rice pan-fried with kimchi, onions, and bacon, toppe with a fried egg.', price: '$23.00', imgSrc: 'url-to-image' },
        { name: 'Curry Chicken Cupbop', description: 'Curry sauce on steamed rice with vegetables, bulgogi chicken, and fried egg.', price: '$20.00', imgSrc: 'url-to-image' },
    ]
    
};

export function Menu() {
    return (
        <div className="menu">
            {Object.keys(menuData).map(category => (
                <div key={category} className="menu-category">
                    <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
                    {menuData[category] && menuData[category].map((meal, index) => (
                        <Meal key={index} {...meal} />
                    ))}
                </div>
            ))}
        </div>
    );
}

