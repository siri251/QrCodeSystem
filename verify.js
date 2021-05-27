function myfunc(){
    if(localStorage.getItem("name")==null){
        alert("oops! you should first sign in :)")
        window.location.pathname = "index.html";
    }
}

myfunc();