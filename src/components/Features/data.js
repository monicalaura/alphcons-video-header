
//object containing the information of the features sections 

const features = [
    //first section
    {
        id: 'e-marketing',
        upperText: 'e-marketing solutions',
        title: 'Professional interactive development',
        description: 'Quisque condimentum, diam ut placerat egestas, lectus est semper quam, nec accumsan magna enim eget dui.',
        imgFirst:true, // image on the first position
        image: 'https://svgshare.com/i/Sny.svg',
        alt: 'internet marketing',
        lightBcg: true, //white background
        darkTxt: true,  //dark text
        btnLabel:'More info'
    },
    //second section
    {
        id: 'user',
        upperText: 'user experience',
        title: 'An innovative approach that enhaces digital user experience',
        description: 'Quisque condimentum, diam ut placerat egestas, lectus est semper quam, nec accumsan magna enim eget dui.',
        imgFirst:false,
        image: 'https://svgshare.com/i/Snx.svg',
        alt: 'user experience',
        lightBcg: false,
        lightTxt: true, //light text
        darkTxt: false,
        btnLabel:'More info'
                
    },

    {
        id: 'design',
        upperText: 'design and development',
        title: 'A seemless design that hooks-up the users in no time',
        description: 'Quisque condimentum, diam ut placerat egestas, lectus est semper quam, nec accumsan magna enim eget dui.',
        imgFirst:true, //image on the first position
        image: 'https://svgshare.com/i/SmZ.svg',
        alt: 'design and development',
        lightBcg: true, // white background
        darkTxt: true, // dark text
        btnLabel:'More info'
           
    }
];

export default features

