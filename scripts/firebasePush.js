'use strict'; 

var database = firebase.database();

function writeNewPost(uid, picture, title, body) {
  // A post entry.
  var postNews = {
    uid: uid,
    content: body,
    title: title,
    news_picture: picture
  };

   
  // Get a key for a new Post.
  var newPostKey = firebase.database().ref().child('news').push().key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  var updates = {};
  updates['/team-blackcurrant-news-site/' + newPostKey] = postNews;
  updates['/team-blackcurrant-news-site/' + uid + '/' + newPostKey] = postNews;

  return firebase.database().ref().update(updates);
}


