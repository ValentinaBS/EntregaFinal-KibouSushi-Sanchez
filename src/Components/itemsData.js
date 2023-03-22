export const items = [
    {
        id: "1",
        img: "phila.jpg",
        name: "Phila",
        category: "regular",
        shortDescription: "Salmon and Cream Cheese, with Sesame Seeds on the outside.",
        longDescription: "Our Philadelphia Roll is a classic sushi dish that combines the creaminess of cream cheese with the freshness of salmon and the nuttiness of sesame seeds.",
        ingredients: [{id: 1, name: "Salmon"}, {id: 2, name: "Cream Cheese"}, {id: 3, name: "Sesame Seeds"}],
        price: "5.00",
        pieces: "6",
        stock: 29,
        isPremium: false,
        isVegetarian: false
    },
    {
        id: "2",
        img: "veggie.jpg",
        name: "Veggie",
        category: "vegetarian",
        shortDescription: "Spinach, Avocado and Cucumber, with Green Onion on the outside.",
        longDescription: "Our Veggie Roll is a delicious and healthy option for vegetarians and sushi lovers alike. Made with fresh spinach, creamy avocado, crisp cucumber, and savory green onion, this roll is packed with flavor and nutrients.",
        ingredients: [{id: 1, name: "Spinach"}, {id: 2, name: "Avocado"}, {id: 3, name: "Cucumber"}, {id: 4, name: "Green Onion"}],
        price: "5.00",
        pieces: "6",
        stock: 35,
        isPremium: false,
        isVegetarian: true
    },
    {
        id: "3",
        img: "tuna.jpg",
        name: "Tuna",
        category: "regular",
        shortDescription: "Tuna Paste, Carrot and Cucumber, with Green Onion on the outside.",
        longDescription: "Our Tuna Roll is a unique take on the classic sushi dish, made with flavorful tuna paste and crunchy veggies. Freshly prepared with carrot, cucumber, and green onion, this roll offers a perfect blend of textures and flavors.",
        ingredients: [{id: 1, name: "Tuna Paste"}, {id: 2, name: "Carrot"}, {id: 3, name: "Cucumber"}, {id: 4, name: "Green Onion"}],
        price: "5.00",
        pieces: "6",
        stock: 47,
        isPremium: false,
        isVegetarian: false
    },
    {
        id: "4",
        img: "california.png",
        name: "California",
        category: "regular",
        shortDescription: "Avocado, Crab Sticks, and Cucumber, with Sesame Seeds on the outside.",
        longDescription: "Our California Roll is a classic sushi dish that's beloved by sushi lovers everywhere. Made with creamy avocado, tender crab sticks, crisp cucumber, and nutty sesame seeds, this roll offers a perfect balance of flavors and textures.",
        ingredients: [{id: 1, name: "Avocado"}, {id: 2, name: "Crab Sticks"}, {id: 3, name: "Cucumber"}, {id: 4, name: "Sesame Seeds"}],
        price: "5.00",
        pieces: "6",
        stock: 7,
        isPremium: false,
        isVegetarian: false
    },
    {
        id: "5",
        img: "veggie-mix.png",
        name: "Veggie Mix",
        category: "vegetarian",
        shortDescription: "Tomato, Swiss Cheese, Avocado and Cucumber.",
        longDescription: "Our Veggie Mix Roll is a delightful vegetarian option that combines fresh vegetables and cheese in a unique sushi roll. Made with juicy tomato, creamy avocado, crisp cucumber, and savory Swiss cheese, this roll is a burst of flavor in every bite.",
        ingredients: [{id: 1, name: "Tomato"}, {id: 2, name: "Swiss Cheese"}, {id: 3, name: "Avocado"}, {id: 4, name: "Cucumber"}],
        price: "10.00",
        pieces: "8",
        stock: 57,
        isPremium: true,
        isVegetarian: true
    },
    {
        id: "6",
        img: "kibou-salmon.png",
        name: "Kibou Salmon",
        category: "premium",
        shortDescription: "Salmon, Avocado and Cream Cheese, breaded with Panko on the outside.",
        longDescription: "Our Kibou Salmon Roll is a delectable sushi roll that is breaded with crispy panko, filled with succulent salmon, creamy avocado and cream cheese. This roll is a perfect combination of textures and flavors that will leave you wanting more.",
        ingredients: [{id: 1, name: "Salmon"}, {id: 2, name: "Avocado"}, {id: 3, name: "Cream Cheese"}, {id: 4, name: "Panko"}],
        price: "10.00",
        pieces: "8",
        stock: 11,
        isPremium: true,
        isVegetarian: false
    },
    {
        id: "7",
        img: "dragon.png",
        name: "Dragon",
        category: "premium",
        shortDescription: "Eel, Cucumber, Crab Sticks, and Avocado with Eel Sauce and Sesame Seeds on top.",
        longDescription: "Our Dragon Roll is a signature sushi dish that combines tender eel, crisp cucumber, juicy crab sticks, creamy avocado, and our special eel sauce. Topped with nutty sesame seeds, this roll offers a perfect balance of sweet, salty, and savory flavors.",
        ingredients: [{id: 1, name: "Eel"}, {id: 2, name: "Cucumber"}, {id: 3, name: "Crab Sticks"}, {id: 4, name: "Avocado"}, {id: 5, name: "Eel Sauce"}, {id: 6, name: "Sesame Seeds"}],
        price: "10.00",
        pieces: "8",
        stock: 0,
        isPremium: true,
        isVegetarian: false
    },
    {
        id: "8",
        img: "green-feast.png",
        name: "Green Feast",
        category: "vegetarian",
        shortDescription: "Cucumber and Avocado with Nori Sprinkles and Sesame Seeds on top.",
        longDescription: "Our Green Feast Roll is a refreshing sushi roll that features crisp cucumber and creamy avocado, sprinkled with nori and nutty sesame seeds. This roll is the perfect choice for those who crave a light yet satisfying sushi dish.",
        ingredients: [{id: 1, name: "Cucumber"}, {id: 2, name: "Avocado"}, {id: 3, name: "Nori Sprinkles"}, {id: 4, name: "Sesame Seeds"}],
        price: "10.00",
        pieces: "8",
        stock: 38,
        isPremium: true,
        isVegetarian: true
    },
];

export const socials = [
    {
        id: 1,
        name: 'Instagram',
        link: 'https://www.instagram.com/'
    },
    {
        id: 2,
        name: 'Facebook',
        link: 'https://www.facebook.com/'
    },
    {
        id: 3,
        name: 'Twitter',
        link: 'https://twitter.com/'
    }
];

export const categories = [
    {id: 1, name: 'regular'}, 
    {id: 2, name: 'premium'}, 
    {id: 3, name: 'vegetarian'}
];

    export const getItems = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(items)
        }, 2000)
        })
    }

    export const getItemById = (id) => {
        return new Promise (resolve => {
            setTimeout(() => {
                resolve(items.find((item) => item.id === id))
            }, 2000)
        })
    }

    export const getItemsByCategory = (categoryId) => {
        return new Promise (resolve => {
            setTimeout(() => {
                resolve(items.filter((item) => item.category === categoryId))
            }, 2000)
        })
    }