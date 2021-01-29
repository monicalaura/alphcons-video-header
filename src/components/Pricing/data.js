//Pricing data info

const cards = [

    //pricing card 1
    {
        id:1,
        icon:'essential',
        plan:'Essential',
        cost:'20',
        period:'per month',
        
        //subarray of features
        features: [
            {
                id:2,
                name:'100 Lectus Est',
            },
            {
                id:3,
                name:'Semper quam',
            },
            {
                id:4,
                name:'Magna enim eget',
            }
            
        ]
    },

    //pricing card 2
    {
        id:5,
        icon:'premium',
        plan:'Premium',
        cost:'250',
        period:'per month',
        
        //subarray of features
        features: [
            {
                id:6,
                name:'500 Lectus Est',
            },
            {
                id:7,
                name:'Qui condimentum',
            },
            {
                id:8,
                name:'Magna enim eget',
            }
        ]
    },

    //pricing card 3
    {
        id:9,
        icon:'team',
        plan:'Team',
        cost:'800',
        period:'per month',
        
        //subarray of features
        features: [
            {
                id:11,
                name:'Unlimited Placerat',
            },
            {
                id:12,
                name:'Unlimited Lectus Est',
            },
            {
                id:13,
                name:'24/7 Support',
            },
            
        ]
    }

];

export default cards