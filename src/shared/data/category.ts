export const CategoryTree = {
    category: [
        {
            name: 'Organic Food',
            slug: 'organic-food',
            background: '#9734A1',
            image_urls: ['assets/images/category/organic-food.jpg'],
            sub_category: [
                {
                    name: 'Fruits',
                    slug: 'fruits',
                    image_urls: ['assets/images/category/fresh.jpg'],
                    sub_sub_category: [
                        // {
                        //     name: 'Banana',
                        //     slug: 'banana'
                        // },
                        // {
                        //     name: 'Goosebery',
                        //     slug: 'goosebery'
                        // },
                        // {
                        //     name: 'Guava',
                        //     slug: 'guava'
                        // },
                    ]
                },
                {
                    name: 'Vegetables',
                    slug: 'vegetables',
                    image_urls: ['assets/images/category/vegetables.jpg'],
                    sub_sub_category: [
                        // {
                        //     name: 'Pea',
                        //     slug: 'pea'
                        // },
                        // {
                        //     name: 'Kidney Been',
                        //     slug: 'kidney_been'
                        // },
                        // {
                        //     name: 'Yam',
                        //     slug: 'yam'
                        // },
                    ]
                },
                {
                    name: 'Meat & Fish',
                    slug: 'meat-&-fish',
                    image_urls: ['assets/images/category/meat-&-fish.jpg'],
                    sub_sub_category: [
                        // {
                        //     name: 'Mutton',
                        //     slug: 'mutton'
                        // },
                        // {
                        //     name: 'Deshi Beef',
                        //     slug: 'deshi-beef'
                        // },
                        // {
                        //     name: 'Chicken',
                        //     slug: 'chicken'
                        // },
                        // {
                        //     name: 'Deshi Koi',
                        //     slug: 'deshi-koi'
                        // },
                    ]
                },
                {
                    name: 'Oil, Honey & Milk',
                    slug: 'oil,-honey-&-milk',
                    image_urls: ['assets/images/category/oil-honey-&-milk.jpg'],
                    sub_sub_category: [
                        // {
                        //     name: 'Honey',
                        //     slug: 'honey'
                        // },
                        // {
                        //     name: 'Mustard Oil',
                        //     slug: 'mustard-oil'
                        // },
                        // {
                        //     name: 'Coconut Oil',
                        //     slug: 'coconut-oil'
                        // },
                        // {
                        //     name: 'Deshi Ghee',
                        //     slug: 'deshi-ghee'
                        // },
                    ]
                },
                {
                    name: 'Masala & Spicies Powder',
                    slug: 'masala-&-spicies-powder',
                    image_urls: ['assets/images/category/masala-&-spicies-powder.jpg'],
                    sub_sub_category: [
                        // {
                        //     name: 'Chilli',
                        //     slug: 'chilli'
                        // },
                        // {
                        //     name: 'Garam Masala',
                        //     slug: 'garam-masala'
                        // },
                    ]
                },

            ]
        },
        {
            name: 'Fresh & Vegetables',
            slug: 'fresh-&-vegetables',
            background: '#A19734',
            image_urls: ['assets/images/category/fresh-&-vegetables.jpg'],
            sub_category: [
                {
                    name: 'Fresh Fruit',
                    slug: 'fresh-fruit',
                    image_urls: ['assets/images/category/fresh-fruit.jpg'],
                    sub_sub_category: [
                        {
                            name: 'Oranges & Citrus Fruits',
                            slug: 'oranges-&-citrus-fruits'
                        },
                        {
                            name: 'Apples & Pears',
                            slug: 'apples-&-pears'
                        },
                        {
                            name: 'Grapes & Berries',
                            slug: 'grapes-&-berries'
                        },
                    ]
                },
                {
                    name: 'Fresh Vegetables',
                    slug: 'fresh-vegetables',
                    sub_sub_category: [
                        {
                            name: 'Leafy Vegetable',
                            slug: 'leafy-vegetable'
                        },
                        {
                            name: 'Potatoes, Roots & Onion',
                            slug: 'potatoes-roots-&-onion'
                        },
                        {
                            name: 'Cauliflower',
                            slug: 'cauliflower'
                        },
                        {
                            name: 'Brinjals & Gourds',
                            slug: 'brinjals-&-gourds'
                        },
                        {
                            name: 'Tomatoes & Beans',
                            slug: 'tomatoes-&-beans'
                        },
                        {
                            name: 'Herbs & Spicies',
                            slug: 'herbs-&-spicies'
                        },
                        {
                            name: 'Seasonal & Other',
                            slug: 'seasonal-&-other'
                        },
                    ]
                },
                {
                    name: 'Fresh Meat',
                    slug: 'fresh-meat',
                    sub_sub_category: []
                },
            ]
        },
        {
            name: 'Frozen',
            slug: 'frozen',
            background: '#3497A1',
            sub_category: [
                {
                    name: 'Bigger Packs', slug: 'bigger-packs', sub_sub_category: []
                },
                {
                    name: 'Meat & Chicken', slug: 'meat-&-chicken',
                    sub_sub_category: [
                        { name: 'Chicken', slug: 'chicken' },
                        { name: 'Bread & Butter Chicken', slug: 'bread-&-butter-chiken' },
                        { name: 'Burger', slug: 'burger' },
                        { name: 'Sausages', slug: 'sausages' },
                        { name: 'Beef', slug: 'beef' },
                        { name: 'Lamb', slug: 'lamb' },
                        { name: 'Lean Meat', slug: 'lean-meat' },
                        { name: 'Turkey', slug: 'turkey' },
                    ]
                },
                {
                    name: 'Ice Cream & Lollies', slug: 'ice-cream-&-lollies',
                    sub_sub_category: [
                        { name: 'Ice Cream Cone', slug: 'ice-cream-cone' },
                        { name: 'Ice Lollies', slug: 'ice-lollies' },
                        { name: 'Ice Cream Tubs', slug: 'ice-cream-tubs' },
                    ]
                },
                {
                    name: 'Ready Meals', slug: 'ready-meals',
                    sub_sub_category: [
                        { name: 'Indian', slug: 'indian' },
                        { name: 'Chinese', slug: 'chinese' },
                        { name: 'Italian', slug: 'italian' },
                    ]
                },
                {
                    name: 'Vegetables & Rice', slug: 'vegetables-&-rice',
                    sub_sub_category: [
                        { name: 'Vegetables', slug: 'vegetables' },
                        { name: 'Rice & Grains', slug: 'rice-&-grains' },
                        { name: 'Vegetable Side Dishes', slug: 'vegetable-side-dishes' },
                        { name: 'Herbs', slug: 'herbs' },
                    ]
                }

            ],
        },
        {
            name: 'Fresh',
            slug: 'fresh',
            background: '#068B45',
            sub_category: [
                {
                    name: 'Fruit, Veg & Salads', slug: 'fruit-veg-&-salads',
                    sub_sub_category: [
                        { name: 'Fruits', slug: 'fruits' },
                        { name: 'Salads', slug: 'salads' },
                        { name: 'Vegetables', slug: 'vegetables' },
                        { name: 'Potatoes', slug: 'potatoes' },
                    ]
                },
                {
                    name: 'Milk, Butter & Eggs', slug: 'milk-butter-&-eggs',
                    sub_sub_category: [
                        { name: 'Milk', slug: 'milk' },
                        { name: 'Butter', slug: 'butter' },
                        { name: 'Eggs', slug: 'eggs' },
                        { name: 'Cream', slug: 'cream' },
                    ]
                },
                {
                    name: 'Cheese', slug: 'cheese',
                    sub_sub_category: [
                        { name: 'Cheddar Cheese', slug: 'cheddar-cheese' },
                        { name: 'Grated & Sliced Cheese', slug: 'grated-&-sliced-cheese' },
                        { name: 'Cheese Snacks & Spreads', slug: 'cheese-snacks-&-spreads' },
                        { name: 'Speciality Cheese', slug: 'speciality-cheese' },
                        { name: 'British Regional Cheese', slug: 'british-regional-cheese' },
                    ]
                },
                {
                    name: 'Desserts', slug: 'desserts',
                    sub_sub_category: []
                },
            ]
        },
        {
            name: 'Drinks',
            slug: 'drinks',
            background: '#FFAFAF',
            sub_category: [
                {
                    name: 'Fizzy Drinks', slug: 'fizzy-drinks',
                    sub_sub_category: [
                        { name: 'Canned Drinks', slug: 'canned-drinks' },
                        { name: 'Bottled Drinks', slug: 'bottled-drinks' },
                        { name: 'Cola', slug: 'cola' },
                        { name: 'Diet Drinks', slug: 'diet-drinks' },
                    ]
                },
                {
                    name: 'Beer, Cider & Ales', slug: 'beer-cider-&-ales',
                    sub_sub_category: [
                        { name: 'Beer', slug: 'beer' },
                        { name: 'Cider', slug: 'cider' },
                        { name: 'Ales', slug: 'ales' },
                    ]
                },
                {
                    name: 'Coffee', slug: 'coffee',
                    sub_sub_category: [
                        { name: 'Coffee Machine Pods', slug: 'coffee-machine-pods' },
                        { name: 'Instant & Ground Coffee', slug: 'instant-&-ground-coffee' }
                    ]
                },
                {
                    name: 'Tea', slug: 'tea',
                    sub_sub_category: [
                        { name: 'Breakfast Tea', slug: 'breakfast-tea' },
                        { name: 'Fruit & Herbal Tea', slug: 'fruit-&-herbal-tea' }
                    ]
                },
            ]
        },
        {
            name: 'Household',
            slug: 'household',
            background: '#016FB7',
            sub_category: []
        },
        {
            name: 'Drinks',
            slug: 'drinks',
            background: '#505050',
            sub_category: []
        },
        {
            name: 'Fresh Fruit & Veg Market',
            slug: 'fresh-fruit-&-veg-market',
            background: '#cc092f',
            sub_category: []
        },
        {
            name: 'Offers',
            slug: 'offers',
            background: '#3F8C63',
            sub_category: []
        },
        {
            name: 'Bakery',
            slug: 'bakery',
            background: '#F48D44',
            sub_category: []
        },
        {
            name: 'Luxury',
            slug: 'luxury',
            background: '#555555',
            sub_category: []
        },
        {
            name: 'Big Night In',
            slug: 'big-night-in',
            background: '#1f2a5f',
            sub_category: []
        },
        {
            name: 'Ready Meals',
            slug: 'ready-meals',
            background: '#5334a0',
            sub_category: []
        },
        {
            name: 'Fishmongers',
            slug: 'fishmongers',
            background: '#1c8ca6',
            sub_category: []
        },
        {
            name: 'Oil',
            slug: 'oil',
            background: '#1c8ca6',
            image_urls: ['assets/images/category/oil.jpg'],
            sub_category: [],
        },
    ]
}

