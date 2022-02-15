$(function() {
	$( ".box" ).draggable();
});

function submitting(){
    var pinput = document.getElementById("passinput");
    var pvalue = pinput.value;

    if (pvalue == ${{ secrets.PSECRET }}){
        localStorage.setItem("allowed","true")
        location.href = "nav.html"
    } else{
        alert("Invalid Password");
    }
}
