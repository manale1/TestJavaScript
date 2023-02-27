
var seConnecter = document.querySelector("#button").addEventListener("click",seConnecter);


function seConnecter()
{
    var login = document.getElementById("login").value;
    var mdp = document.getElementById("mdp").value;
    if(login == "manale" && mdp == 123)
    {
       return  alert("vous etes connecte");
    }
    else
    {
        return alert("oops");
    }
}

div.style.border = '1px red';
