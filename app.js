let Messages = document.querySelector('#tb1');

var tbody = document.getElementById('tb1');

                            function AddItemTotable(doc){
                                let trow = document.createElement("tr");
                                let td1 = document.createElement('td');
                                let td2 = document.createElement('td');
                                let td3 = document.createElement('td');

                                td1.innerHTML=doc.data().Date_time;
                                td2.innerHTML= doc.data().Email;
                                td3.innerHTML= doc.data().Message;

                                trow.appendChild(td1);
                                trow.appendChild(td2);
                                trow.appendChild(td3);

                                tbody.appendChild(trow);

                            }
                           //function for adding all items to the table

                           function AddAllItemsTotable(Messages){
                               tbody.innerHTML="";
                               Messages.forEach(element => {
                                AddItemTotable(element.Date_time, element.Email, element.Message);
                               });
                           }
// getting data
db.collection('Messages').get().then(snapshot => {
  snapshot.docs.forEach(doc => {
    AddItemTotable(doc);
  });
});


