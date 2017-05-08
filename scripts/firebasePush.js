'use strict'; 

var firebase = require("firebase"); //error: require is not a function; 
                                    //console.log(firebase) logs 'undefined' -> not working;

var database = firebase.database(); //instance


//should use one of the two below

// write in database 
// function writeNews(heading, text, imageUrl) {
//   firebase.database().ref('news/').set({
//     title: heading,
//     content: text,
//     news_picture : imageUrl
//   });
// }

//add to database list
var ref = firebase.app().database().ref();
var news = ref.child('news');
var newPublication = news.push({
    title: 'heading',
    content: 'text',
    news_picture: 'imageUrl'
});

