const Posts = document.querySelector('#tb3');

var tbody2 = document.getElementById('tb3');

                            function AddItemTotable2(doc){
                                let trow = document.createElement("tr");
                                let td1 = document.createElement('td');
                                let td2 = document.createElement('td');
                                let td3 = document.createElement('td');
        

                                td1.innerHTML=doc.data().Date_time;
                                td2.innerHTML= doc.data().Title;
                                td3.innerHTML= "GYSSAGARA";
                                

                                trow.appendChild(td1);
                                trow.appendChild(td2);
                                trow.appendChild(td3);
                              

                                tbody2.appendChild(trow);

                            }
                           //function for adding all items to the table

                           function AddAllItemsTotable2(Posts){
                               tbody2.innerHTML="";
                               Posts.forEach(element => {
                                AddItemTotable1(element.Date_time, element.Title,);
                               });
                           }
// getting data
db.collection('Posts').get().then(snapshot => {
  snapshot.docs.forEach(doc => {
    AddItemTotable2(doc);
  });
});