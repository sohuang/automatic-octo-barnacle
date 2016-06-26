// function checkChecked() {
//     if (document.getElementById("great").checked) {
//         alert("checked");
//     } else {
//         alert("not checked");
//     }
// }
// 
function helpMe() {
    // var checkboxes = document.querySelectorAll("div.checkbox");
    // var arrayLength = checkboxes.length;
    // var checkboxesChecked;
    // for (var i = 0; i < arrayLength; i++) {
    //     if (checkboxes[i].checked == true) {
    //         checkboxesChecked.push(checkboxes[i].id);
    //     }
    // }
    // 
    if (document.getElementById("great").checked) {
        document.getElementById("somethingGreat").style.display = "block";
    } 
    
    if (document.getElementById("sad").checked) {
        document.getElementById("somethingSad").style.display = "block";
    }
    
    if (document.getElementById("busy").checked) {
        document.getElementById("somethingBusy").style.display = "block";
    }
    
    if (document.getElementById("bored").checked) {
        document.getElementById("somethingBored").style.display = "block";
    }
    
    document.getElementById("siteTitle").style.display = "none";
    document.getElementById("radioFeelings").style.display = "none";
    document.getElementById("helpMeButton").style.display = "none";
    
    document.getElementById("weatherWidget").style.display = "block";
}