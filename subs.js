const Subscribers = document.querySelector('#tb2');

var tbody1 = document.getElementById('tb2');

                            function AddItemTotable1(doc){
                                let trow = document.createElement("tr");
                                let td1 = document.createElement('td');
                                let td2 = document.createElement('td');

                                td1.innerHTML=doc.data().Date_time;
                                td2.innerHTML= doc.data().Email;

                                trow.appendChild(td1);
                                trow.appendChild(td2);

                                tbody1.appendChild(trow);

                            }
                           //function for adding all items to the table

                           function AddAllItemsTotable1(Subscribers){
                               tbody1.innerHTML="";
                               Subscribers.forEach(element => {
                                AddItemTotable1(element.Date_time, element.Email);
                               });
                           }
// getting data
db.collection('Subscribers').get().then(snapshot => {
  snapshot.docs.forEach(doc => {
    AddItemTotable1(doc);
  });
});