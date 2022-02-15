function submitting(){
    var pinput = document.getElementById("passinput");
    var pvalue = pinput.value;

    if (pvalue == process.env.PSECRET){
        localStorage.setItem("allowed","true")
        location.href = "nav.html"
    } else{
        alert("Invalid Password");
    }
}
