//listen for status changes
auth.onAuthStateChanged(user =>{
    if(user){
        console.log("User logged in: ", user);
    }else{
        console.log("user logged out ", user);
    }
});

//user login

const loginForm =document.querySelector('#login-form');
btnLogin.addEventListener('click', (e)=> {
    e.preventDefault();

    //get user info 
    const email = loginForm['email'].value;
    const password = loginForm['password'].value;
   
    //log the user in 
    auth.signInWithEmailAndPassword(email, password).then((cred)=>{
        //rest form
        loginForm.reset();
        window.location.href="./dashboard.html";
    }).catch(function(){
        loginForm.reset();
        alert("Invalid login details")
    });
    
});

//user logout