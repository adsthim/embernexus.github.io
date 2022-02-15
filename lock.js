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
    var hideSpan = document.getElementByClassName('hide')[0];
    if (allowed == "true"){
        document.getElementById("gameframe").src = "nav.html"
    }else{
        hideSpan.style.display = 'inline-block';
        document.getElementById("gameframe").src = "https://www.youtube.com/embed/xvFZjo5PgG0"
        alert("please enter the password first")
    }
    localStorage.removeItem("allowed")
}
