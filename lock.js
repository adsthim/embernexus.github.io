//DOCTYPE JS

//Security Login
//<!--// if (password_input) = embernexusencode158362:
//<!--//    set login_status = [id=_true]
//<!--//    $load MainPage.html





//dependencies
function submitting(){
    var pinput = document.getElementById("passinput");
    var pvalue = pinput.value;
    var pinputEncode = btoa(pvalue);
    var encodeEncode = btoa(pinputEncode);

    if (encodeEncode == "WlcxaVpYSnBjMnRwYm1SaFkyOXZiRE14TkE9PQ=="){
        localStorage.setItem("allowed","true")
        location.href = "iηdex.html"
    } else{
        alert("Invalid Password");
    }
}


function gameloaded(){
    var allowed = localStorage.getItem("allowed")
    if (allowed == "true"){
        document.getElementById("gameframe").src = "nav.html"
    }else{
        document.getElementById("gameframe").src = "https://www.youtube.com/embed/QDia3e12czc"
        alert("please enter the password first")
    }
    localStorage.removeItem("allowed")
}
