function submitting(){
    var pinput = document.getElementById("passinput");
    var pvalue = pinput.value;
    var pinputEncode = btoa(pvalue);


    if (pinputEncode == "ZW1iZXJpc2tpbmRhY29vbDMxNA=="){
        localStorage.setItem("allowed","true")
        location.href = "nav.html"
    } else{
        alert("Invalid Password");
    }
}

