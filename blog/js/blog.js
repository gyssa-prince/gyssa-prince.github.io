var Posts = document.getElementById('#blog-container')
var Allblogs= document.getElementById('blog-container')


function displayblogs(doc){
let blogbox =document.createElement('div');
let blogimg =document.createElement('div');
let blogtxt =document.createElement('div');

blogbox.setAttribute('class','blog-box1')
blogimg.setAttribute('class','blog-img')
blogtxt.setAttribute('class','blog-text')


let img= document.createElement('img');
     img.setAttribute('class','blog-img')
    let date= document.createElement('span');
    let blgtitle = document.createElement('a');
    blgtitle.setAttribute('class','blog-title');
    let p = document.createElement('p');
    let a =document.createElement('a')
   


    img.src ="img/tour.webp";
    date.textContent = doc.data().Date_time+' /GYSSAGARA';
    blgtitle.textContent = doc.data().Title; 
    p.textContent = doc.data().Intro;
    a.textContent = "Read more"

    blogimg.appendChild(img);
    blogtxt.appendChild(date);
    blogtxt.appendChild(blgtitle);
    blogtxt.appendChild(p);
    blogtxt.appendChild(a)
    blogbox.appendChild(blogimg);
    blogbox.appendChild(blogtxt);
    Allblogs.appendChild(blogbox);
}

  // getting data
db.collection('Posts').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
      displayblogs(doc);
    });
  });
 