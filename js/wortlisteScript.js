/* 
 In this script file all methods which controls the processing within the wortliste task are hosted.
 */

//global variables
var wordPresentationCnt = 0;
var wordsToPresentIteration1 = new Array("Mütze", "Delfin", "Lauch", "Tisch", "Vogel", "Strumpf", "Nashorn", "Couch", "Kommode", "Unterhemd", "Regal", "Bluse", "Hocker",
        "Paprika", "Qualle", "Wirsing", "Zwiebel", "Jacke", "Fenchel", "Igel", "Eckbank", "Gurke", "Otter", "Anzug");

var genusPresentationCnt = 0;
var canForward = false;
var letterPresentationCnt = 0;
var selectedLettersCnt = 0;





//this function shows an empty page to bridge time until starting the task
function showWordSlide1() {

    try
    {
        $.mobile.changePage('#wortlisteWordSlide1', {transition: "flip"});
    }

    catch (error) {
        console.log("An error has been occured! " + error);
    }
}


//this function shows the words in the second iteration
function showWordSlide2() {

    try
    {
        $.mobile.changePage('#wortlisteWordSlide2', {transition: "flip"});
    }

    catch (error) {
        console.log("An error has been occured! " + error);
    }
}


//this function shows the words in the third iteration
function showWordSlide3() {

    try
    {
        $.mobile.changePage('#wortlisteWordSlide3', {transition: "flip"});
    }

    catch (error) {
        console.log("An error has been occured! " + error);
    }
}

//this function shows an empty page to bridge time until starting the task
function showWordSelection() {

    try
    {
        $('#wordToPresent').html(wordsToPresentIteration1[wordPresentationCnt]);
        wordPresentationCnt++;
        $.mobile.changePage('#wordSelection', {transition: "flip"});
    }

    catch (error) {
        console.log("An error has been occured! " + error);
    }
}


// this function confirms the current word and switches to the next word 
function yesAndGoToNextWord() {
    try
    {
        if (wordPresentationCnt === wordsToPresentIteration1.length) {
            $.mobile.changePage('#wortlisteInstruct2', {transition: "flip"});
            wordPresentationCnt = 0;
        }


        else {
            $('#wordToPresent').html(wordsToPresentIteration1[wordPresentationCnt]);
            wordPresentationCnt++;
        }
    }

    catch (error) {
        console.log("An error has been occured! " + error);
    }

}


// this function aborts the current word and switches to the next word 
function noAndGoToNextWord() {
    try
    {
        if (wordPresentationCnt === wordsToPresentIteration1.length) {
            $.mobile.changePage('#wortlisteWordSlide2', {transition: "flip"});
            wordPresentationCnt = 0;
        }


        else {

            $('#wordToPresent').html(wordsToPresentIteration1[wordPresentationCnt]);
            wordPresentationCnt++;
        }
    }

    catch (error) {
        console.log("An error has been occured! " + error);
    }

}


// shows page to choose genus word
function showGenusSelection() {

    try
    {
        // set the first letter
        $('#firstLetter').html("T");
        // set genus words 
        $('#genus1').html("Gemüse");
        $('#genus2').html("Möbelstücke");
        $('#genus3').html("Kleidungsstück");
        // increment counter
        genusPresentationCnt++;
        // show genus presentation page
        $.mobile.changePage('#genusSelection', {transition: "flip"});

    }

    catch (error) {
        console.log("An error has been occured! " + error);
    }

}


// shows page to choose first letters of a genus word or categorie
function showLetterSelection() {

    try
    {

        // set categ. word 
        $('#wordsCategorie').html("Tiere");
        $('#wordsCategorieRep').html("Tiere");

        // fill in first letter choice
        var firstLetters = new Array("A", "D", "H", "I", "L", "N", "O", "Q", "V");
        var allLetters = document.querySelectorAll("[data-group='letter']");
        for (var i = 0; i < allLetters.length; i++) {
            var tempLetter = allLetters[i];
            var tempLetterId = tempLetter.id;
            var currentLetter = firstLetters[i];
            $('#' + tempLetterId).html(currentLetter);
        }
        // increment cnt
        letterPresentationCnt++;
        // show presentation page
        $.mobile.changePage('#firstLetterSelection', {transition: "flip"});
    }

    catch (error) {
        console.log("An error has been occured! " + error);
    }
}


// switches to next genus presentation
function goToNextGenusPresentation() {

    try
    {
        // check if program can forward to next presentation
        if (!canForward) {
// show hint text for few seconds
            $("#messageHint2").html("Bitte wählen Sie eine Kategorie aus!");
            setTimeout(function() {$("#messageHint2").html(""); }, 2000);
//            alert("Bitte wählen Sie einen Oberbegriff aus!");
            return;
        }

        else
        {

            switch (genusPresentationCnt) {

                case 1:
// set the first letter
                    $('#firstLetter').html("N");
                    // set genus words 
                    $('#genus1').html("Tier");
                    $('#genus2').html("Gemüse");
                    $('#genus3').html("Kleidungsstück");
                    // increment counter
                    genusPresentationCnt++;
                    break;

                case 2:
// set the first letter
                    $('#firstLetter').html("Z");
                    // set genus words 
                    $('#genus1').html("Tier");
                    $('#genus2').html("Möbelstück");
                    $('#genus3').html("Gemüse");
                    // increment counter
                    genusPresentationCnt++;
                    break;

                case 3:
// set the first letter
                    $('#firstLetter').html("R");
                    // set genus words 
                    $('#genus1').html("Kleidungsstück");
                    $('#genus2').html("Möbelstück");
                    $('#genus3').html("Tier");
                    // increment counter
                    genusPresentationCnt++;
                    break;

                case 4:
// set the first letter
                    $('#firstLetter').html("B");
                    // set genus words 
                    $('#genus1').html("Tier");
                    $('#genus2').html("Möbelstück");
                    $('#genus3').html("Kleidungsstück");
                    // increment counter
                    genusPresentationCnt++;
                    break;

                case 5:
// set the first letter
                    $('#firstLetter').html("P");
                    // set genus words 
                    $('#genus1').html("Gemüse");
                    $('#genus2').html("Tier");
                    $('#genus3').html("Kleidungsstück");
                    // increment counter
                    genusPresentationCnt++;
                    break;

                case 6:
// set the first letter
                    $('#firstLetter').html("J");
                    // set genus words 
                    $('#genus1').html("Kleidungsstück");
                    $('#genus2').html("Gemüse");
                    $('#genus3').html("Tier");
                    // increment counter
                    genusPresentationCnt++;
                    break;

                case 7:
// set the first letter
                    $('#firstLetter').html("K");
                    // set genus words 
                    $('#genus1').html("Möbelstück");
                    $('#genus2').html("Tier");
                    $('#genus3').html("Gemüse");
                    // increment counter
                    genusPresentationCnt++;
                    break;

                case 8:
// set the first letter
                    $('#firstLetter').html("I");
                    // set genus words 
                    $('#genus1').html("Möbelstück");
                    $('#genus2').html("Gemüse");
                    $('#genus3').html("Tier");
                    // increment counter
                    genusPresentationCnt++;
                    break;

                case 9:
// set the first letter
                    $('#firstLetter').html("G");
                    // set genus words 
                    $('#genus1').html("Kleidungsstück");
                    $('#genus2').html("Gemüse");
                    $('#genus3').html("Möbelstück");
                    // increment counter
                    genusPresentationCnt++;
                    break;

                case 10:
// set the first letter
                    $('#firstLetter').html("D");
                    // set genus words 
                    $('#genus1').html("Möbelstück");
                    $('#genus2').html("Tier");
                    $('#genus3').html("Kleidungsstück");
                    // increment counter
                    genusPresentationCnt++;
                    break;

                case 11:
// set the first letter
                    $('#firstLetter').html("S");
                    // set genus words 
                    $('#genus1').html("Gemüse");
                    $('#genus2').html("Möbelstück");
                    $('#genus3').html("Kleidungsstück");
                    // increment counter
                    genusPresentationCnt++;
                    break;

                case 12:

                    // show next instruction of the third iteration
                    $.mobile.changePage('#wortlisteInstruct4', {transition: "flip"});
                    break;

            }

            // switch back variable 
            if (canForward)
                canForward = false;

            // reset bg of genus buttons
            var allGenusBtns = document.querySelectorAll("[data-group='genusBtn']");
            for (var i = 0; i < allGenusBtns.length; i++) {
                var tempElem = allGenusBtns[i];
                var tempId = tempElem.id;

                $('#' + tempId).css("background", "-webkit-gradient(linear, 0% 0%, 0% 100%, from(#8ADF8A), to(#4CB24C))");

            }

        }
    }

    catch (error) {
        console.log("An error has been occured! " + error);
    }

}


// called when a genus button is clicked
function selectGenusWord(clickedBtn) {
    try
    {

        var currentId = clickedBtn.id;
        // highlight clicked button #FFD403
        $('#' + currentId).css("background", "#FFD403");
        // reset other buttons' background
        var allGenusBtns = document.querySelectorAll("[data-group='genusBtn']");
        for (var i = 0; i < allGenusBtns.length; i++) {
            var tempElem = allGenusBtns[i];
            var tempId = tempElem.id;

            if (tempElem !== clickedBtn) {
                $('#' + tempId).css("background", "-webkit-gradient(linear, 0% 0%, 0% 100%, from(#8ADF8A), to(#4CB24C))");
            }
        }

        // enable forwarding
        if (!canForward)
            canForward = true;
    }

    catch (error) {
        console.log("An error has been occured! " + error);
    }
}


// called when a letter fragment is clicked
function selectLetter(clickedLetter) {
    try
    {

        var currentId = clickedLetter.id;
        var currentBg = $('#' + currentId).css("background");

        // check if letter fragment was already selected
        if (currentBg === "rgb(255, 212, 3) none repeat scroll 0% 0% / auto padding-box border-box") {
            // deselect this fragment
            $('#' + currentId).css("background", "-webkit-gradient(linear, 0% 0%, 0% 100%, from(#8ADF8A), to(#4CB24C))");
            // decrement cnt
            selectedLettersCnt--;
        }


        // letter fragment isn't selected
        else {
            // less than 3 fragm. are selected?
            if (selectedLettersCnt >= 3)
                return;

            else
            {
                // select this fragment
                $('#' + currentId).css("background", "#FFD403");
                // incerement cnt
                selectedLettersCnt++;
            }

        }


    }

    catch (error) {
        console.log("An error has been occured! " + error);
    }
}



// to switch to next letter choice
function showNextLetterPresentation() {

    try
    {
        if (selectedLettersCnt < 3) {
            var restToSelect = (3 - selectedLettersCnt);
             // show hint text for few seconds
            $("#messageHint").html("Bitte wählen Sie noch " + restToSelect + " Anfangsbuchstaben aus!");
            setTimeout(function() {$("#messageHint").html(""); }, 2000);
            return;
        }

        else
        {

            switch (letterPresentationCnt) {

                case 1:
                    // set categ. word 
                    $('#wordsCategorie').html("Kleidungsstücke");
                    $('#wordsCategorieRep').html("Kleidungsstücke");

                    // fill in first letter choice
                    var firstLetters = new Array("A", "B", "E", "F", "J", "M", "Q", "S", "U");
                    var allLetters = document.querySelectorAll("[data-group='letter']");
                    for (var i = 0; i < allLetters.length; i++) {
                        var tempLetter = allLetters[i];
                        var tempLetterId = tempLetter.id;
                        var currentLetter = firstLetters[i];
                        $('#' + tempLetterId).html(currentLetter);
                    }
                    // reset cnt
                    selectedLettersCnt = 0;
                    // increment cnt
                    letterPresentationCnt++;
                    break;

                case 2:
                    // set categ. word 
                    $('#wordsCategorie').html("Gemüse");
                    $('#wordsCategorieRep').html("Gemüse");

                    // fill in first letter choice
                    var firstLetters = new Array("C", "F", "G", "L", "P", "U", "V", "W", "Z");
                    var allLetters = document.querySelectorAll("[data-group='letter']");
                    for (var i = 0; i < allLetters.length; i++) {
                        var tempLetter = allLetters[i];
                        var tempLetterId = tempLetter.id;
                        var currentLetter = firstLetters[i];
                        $('#' + tempLetterId).html(currentLetter);
                    }
                    // reset cnt
                    selectedLettersCnt = 0;
                    // increment cnt
                    letterPresentationCnt++;


                    break;

                case 3:
                    // set categ. word 
                    $('#wordsCategorie').html("Möbelstücke");
                    $('#wordsCategorieRep').html("Möbelstücke");

                    // fill in first letter choice
                    var firstLetters = new Array("C", "E", "H", "K", "M", "O", "R", "T", "W");
                    var allLetters = document.querySelectorAll("[data-group='letter']");
                    for (var i = 0; i < allLetters.length; i++) {
                        var tempLetter = allLetters[i];
                        var tempLetterId = tempLetter.id;
                        var currentLetter = firstLetters[i];
                        $('#' + tempLetterId).html(currentLetter);
                    }
                    // reset cnt
                    selectedLettersCnt = 0;
                    letterPresentationCnt++;

                    break;

                case 4:

                    // reset cnt
                    selectedLettersCnt = 0;
                    letterPresentationCnt = 0;

                    // show task end page
                    $.mobile.changePage('#endPage', {transition: "flip"});
                    break;

            }

            // reset background color of selected fields
            var allLetters = document.querySelectorAll("[data-group='letter']");
            for (var i = 0; i < allLetters.length; i++) {
                var tempLetter = allLetters[i];
                var tempLetterId = tempLetter.id;
                var currentBg = $('#' + tempLetterId).css("background");

                // check if letter fragment was already selected
                if (currentBg === "rgb(255, 212, 3) none repeat scroll 0% 0% / auto padding-box border-box") {
                    // deselect this fragment
                    $('#' + tempLetterId).css("background", "-webkit-gradient(linear, 0% 0%, 0% 100%, from(#8ADF8A), to(#4CB24C))");

                }
            }
        }
    }

    catch (error) {
        console.log("An error has been occured! " + error);
    }
}


function goToBilderGeschichtenTask(){
     try
    {
        window.location = "bildergeschichte.html";
    }

    catch (error) {
        console.log("An error has been occured! " + error);
    }
    
    
}