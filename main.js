function helpMe() {
    var checkboxes = document.querySelectorAll("input[type=checkbox]");
    var checkboxesLength = checkboxes.length;
    var checkboxesChecked;
    for (var i = 0; i < checkboxesLength; i++) {
        if (checkboxes[i].checked == true) {
            checkboxesChecked.push(checkboxes[i].id);
        }
    }
    
    document.getElementById("feelGreatTitle").style.display = "block";
    document.getElementById("feelGreatContent").style.display = "block";
    document.getElementById("weatherWidget").style.display = "block";
    
    document.getElementById("siteTitle").style.display = "none";
    document.getElementById("checkboxesFeelings").style.display = "none";
    document.getElementById("helpMeButton").style.display = "none";
}