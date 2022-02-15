function submitting(){
    var pinput = document.getElementById("passinput");
    var pvalue = pinput.value;

    if (pvalue == "qunoa"){
        localStorage.setItem("allowed","true")
        location.href = "nav.html"
    } else{
        alert("Invalid Password");
    }
}
