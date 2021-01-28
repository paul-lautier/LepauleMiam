import bcrypt from 'bcryptjs'

const data = {

    users: [
        {
        name:"paul",
        email:"paul.lautier@ynov.com",
        password:bcrypt.hashSync("test",8),
        isAdmin: true,
    },
    {
        name:"PA",
        email:"pa@ynov.com",
        password:bcrypt.hashSync("test",8),
        isAdmin: false,
    }


    ],


    products : [
        {

            restaurantId:'6',
            name:'Menu 1',
            image:'/images/p1.jpg',
            enStock:"78",
            prix:12,
            restaurant:'Mc Donalds',
            rating:4,
            numReviews:100,
            description:'triple cheese burger avec frites'

        },
        {

            restaurantId:'2',
            name:'Menu 2',
            image:'/images/p2.jpg',
            enStock:"0",
            prix:10,
            restaurant:"O'tacos",
            rating:4.5,
            numReviews:96,
            description:'tacos 3 viandes'

        },
        {

            restaurantId:'2',
            name:'Menu 3',
            image:'/images/p3.jpg',
            enStock:"5",
            prix:10,
            restaurant:"O'tacos",
            rating:4,
            numReviews:66,
            description:'tacos 3 viandes'

        },
        {

            restaurantId:'2',
            name:'Menu 4',
            image:'/images/p4.jpg',
            enStock:"5",
            prix:10,
            restaurant:"O'tacos",
            rating:4,
            numReviews:66,
            description:'tacos 3 viandes'

        },
        
    ],

    // restaurant:[
    //     {
    //         _id:'1',
    //         name:'Mc Donalds',
    //         logo:'/logo/l1.jpg',
    //         rating_r:4,
    //         numReviews_r:1000,
    //         adress:'4 rue de la paix'
    //     },
    //     {
    //         _id:'2',
    //         name:"O'Tacos",
    //         logo:'/logo/l2.jpg',
    //         rating_r:3,
    //         numReviews_r:674,
    //         adress:'6 avenue dupont'
    //     },
    // ],
};
export default data;