//debug
let takenunames = "Hans";

//Variable to Store Firstname
let x;
let char;
// Create needed Elements.
let row = document.createElement('div');
let col1 = document.createElement('div');
let coljt = document.createElement('div');
let col2 = document.createElement('div');
let jcontainer = document.createElement('div');
let btncontainer = document.createElement('div');
let allconatiner = document.createElement('div');
let jumbotron = document.createElement('div');
let display  = document.createElement('h1');
let line = document.createElement('hr');
let next = document.createElement('button');

let sncontainer = document.createElement('div');
let snjumbotron = document.createElement('div');
let sndisplay  = document.createElement('h1');
let snline = document.createElement('hr');
let snform = document.createElement('form');
let sninput = document.createElement('input');
let snnext = document.createElement('button');
let snbtncontainer = document.createElement('div');
let sntaken = document.createElement('label');

let lncontainer = document.createElement('div');
let lnjumbotron = document.createElement('div');
let lndisplay  = document.createElement('h1');
let lnline = document.createElement('hr');
let lnform = document.createElement('form');
let lninput = document.createElement('input');
let lnnext = document.createElement('button');
let lnbtncontainer = document.createElement('div');
let lntaken = document.createElement('label');

let acontainer = document.createElement('div');
let ajumbotron = document.createElement('div');
let adisplay  = document.createElement('h1');
let aline = document.createElement('hr');
let aform = document.createElement('form');
let ainput = document.createElement('input');
let anext = document.createElement('button');
let abtncontainer = document.createElement('div');

let ucontainer = document.createElement('div');
let ujumbotron = document.createElement('div');
let udisplay  = document.createElement('h1');
let uline = document.createElement('hr');
let uform = document.createElement('form');
let uinput = document.createElement('input');
let unext = document.createElement('button');
let ubtncontainer = document.createElement('div');
let utaken = document.createElement('label');

let mailcontainer = document.createElement('div');
let mailjumbotron = document.createElement('div');
let maildisplay  = document.createElement('h1');
let mailline = document.createElement('hr');
let mailform = document.createElement('form');
let mailinput = document.createElement('input');
let mailnext = document.createElement('button');
let mailbtncontainer = document.createElement('div');
let mailtaken = document.createElement('label');

let pwcontainer = document.createElement('div');
let pwjumbotron = document.createElement('div');
let pwdisplay  = document.createElement('h1');
let pwline = document.createElement('hr');
let pwform = document.createElement('form');
let pwinput = document.createElement('input');
let pwnext = document.createElement('button');
let pwbtncontainer = document.createElement('div');
let pwtaken = document.createElement('label');

let pcontainer = document.createElement('div');
let pjumbotron = document.createElement('div');
let pdisplay  = document.createElement('h1');
let pdisplay2 = document.createElement('h1')
let pline = document.createElement('hr');
let pyes = document.createElement('button');
let pno = document.createElement('button');
let pbtncontainer = document.createElement('div');
let ptaken = document.createElement('label');

let phcontainer = document.createElement('div');
let phjumbotron = document.createElement('div');
let phdisplay  = document.createElement('h1');
let phline = document.createElement('hr');
let phform = document.createElement('form');
let phinput = document.createElement('input');
let phnext = document.createElement('button');
let phbtncontainer = document.createElement('div');
let phtaken = document.createElement('label');

// Called, when User clicks on "Register"  
function registration(){

    // Set HTML Attributes for created Elements.
    row.setAttribute('class', 'row');
    row.setAttribute('style', 'padding-top: 8rem;');
    col1.setAttribute('class', 'col-1');
    coljt.setAttribute('class', 'col-10 justify-content');
    col2.setAttribute('class', 'col-1');
    jcontainer.setAttribute('class', 'animate__animated animate__fadeInDownBig');
    btncontainer.setAttribute('class', 'animate__animated animate__fadeInDownBig');
    jumbotron.setAttribute('class', 'djumbotron" style="opacity: 1;'); 
    display.setAttribute('class', 'display-5');
    display.setAttribute('style', "color: #302F3F; font-family: 'Josefin Sans', sans-serif;font-size: xxx-large; text-shadow: 4px 4px 15px #302F3F;");
    display.innerHTML = "Für deinen Account benötigen wir ein paar Daten von dir.";
    line.setAttribute('class', 'my-4');
    next.setAttribute('class', 'btn btn-outline-warning');
    next.setAttribute('style', "margin-top: 3rem; min-width: 100px; width: 20%; height: 3rem;")
    next.setAttribute('type', 'button');
    next.innerHTML = "Weiter &raquo;";

    // Append Child Elements to Root Elements to build Page.    
    jumbotron.appendChild(display);
    jumbotron.appendChild(line);
    jcontainer.appendChild(jumbotron);
    btncontainer.appendChild(next)
    allconatiner.appendChild(jcontainer);
    allconatiner.appendChild(btncontainer);
    coljt.appendChild(allconatiner);
    row.appendChild(col1);
    row.appendChild(coljt);
    row.appendChild(col2);
    registercontainer.appendChild(row);

    // Code for the Next Button.
    next.addEventListener("click", next1);
    function next1(){
        jcontainer.removeAttribute('class', 'animate__animated animate__fadeInDownBig');
        jcontainer.setAttribute('class', 'animate__animated animate__faster animate__fadeOutLeftBig');

        setTimeout(function(){
            surname();
        }, 200);
    }
    
    let surname = () => {

        // Remove Child Elements of Container to append new Child Elements. 
        allconatiner.removeChild(jcontainer);
        allconatiner.removeChild(btncontainer);
        btncontainer.removeAttribute('class', 'animate__animated animate__fadeInDownBig'); 
        
        // Set Attributes for HTML Elements.
        sncontainer.setAttribute('class', 'animate__animated animate__faster animate__fadeInRightBig');
        snjumbotron.setAttribute('class', 'djumbotron" style="opacity: 1;'); 
        sndisplay.setAttribute('class', 'display-5');
        sndisplay.setAttribute('style', "color: #302F3F; font-family: 'Josefin Sans', sans-serif;font-size: xxx-large; text-shadow: 4px 4px 15px #302F3F;");
        sndisplay.innerHTML = "Wie ist dein Vorname?";
        snline.setAttribute('class', 'my-4');     
        sninput.setAttribute('type','text');
        sninput.setAttribute('class', 'form-control');
        sninput.setAttribute('style', 'height: 3rem;')
        sninput.setAttribute('id', 'sninput')
        snnext.setAttribute('class', 'btn btn-outline-warning');
        snnext.setAttribute('style', "margin-top: 3rem; min-width: 100px; width: 20%; height: 3rem;")
        snnext.setAttribute('type', 'button');
        snnext.innerHTML = "Weiter &raquo;";

        // Append Child Elelments to Parent Elements.
        snform.appendChild(sntaken);
        snform.appendChild(sninput);
        snjumbotron.appendChild(sndisplay);
        snjumbotron.appendChild(snline);
        snjumbotron.appendChild(snform);
        sncontainer.appendChild(snjumbotron);
        snbtncontainer.appendChild(snnext);
        allconatiner.appendChild(sncontainer);
        allconatiner.appendChild(snbtncontainer);

         // Code for the Next Button.
        snnext.addEventListener("click", next2);
        function next2(){

            if(sninput.value == 0 || ""){
                sninput.removeAttribute('class', 'animate__animated animate__faster animate__headShake');
                sninput.setAttribute('class', 'form-control');
                sninput.style.borderColor = "red";
                sntaken.setAttribute('for', 'sninput');
                sntaken.setAttribute('style', "color: red; font-family: 'Josefin Sans', sans-serif;");
                sntaken.setAttribute('class', 'animate__animated animate__rubberBand')
                sntaken.innerHTML = "Dieses Feld darf nicht leer sein.";

                setTimeout(function(){
                    sninput.setAttribute('class', 'form-control animate__animated animate__faster animate__headShake');
                },10);
            } else {

                sncontainer.removeAttribute('class', 'animate__animated animate__faster animate__fadeInRightBig');
                sncontainer.setAttribute('class', 'animate__animated animate__faster animate__fadeOutLeftBig');

                setTimeout(function(){
                x = sninput.value;
                console.log(sninput.value);
                lastname();
                }, 200);
            }
        }
    }

    let lastname = () => {

        // Remove Child Elements of Container to append new Child Elements. 
        allconatiner.removeChild(sncontainer);
        allconatiner.removeChild(snbtncontainer);
        
        // Set Attributes for HTML Elements.
        lncontainer.setAttribute('class', 'animate__animated animate__faster animate__fadeInRightBig');
        lnjumbotron.setAttribute('class', 'djumbotron" style="opacity: 1;'); 
        lndisplay.setAttribute('class', 'display-5');
        lndisplay.setAttribute('style', "color: #302F3F; font-family: 'Josefin Sans', sans-serif;font-size: xxx-large; text-shadow: 4px 4px 15px #302F3F;");
        lndisplay.innerHTML = `${x}, wie ist dein Nachname?`;
        lnline.setAttribute('class', 'my-4');     
        lninput.setAttribute('type','text');
        lninput.setAttribute('class', 'form-control');
        lninput.setAttribute('style', 'height: 3rem;')
        lninput.setAttribute('id', 'lninput');
        lnnext.setAttribute('class', 'btn btn-outline-warning');
        lnnext.setAttribute('style', "margin-top: 3rem; min-width: 100px; width: 20%; height: 3rem;")
        lnnext.setAttribute('type', 'button');
        lnnext.innerHTML = "Weiter &raquo;";

        // Append Child Elelments to Parent Elements.
        lnform.appendChild(lntaken);
        lnform.appendChild(lninput);
        lnjumbotron.appendChild(lndisplay);
        lnjumbotron.appendChild(lnline);
        lnjumbotron.appendChild(lnform);
        lncontainer.appendChild(lnjumbotron);
        lnbtncontainer.appendChild(lnnext);
        allconatiner.appendChild(lncontainer);
        allconatiner.appendChild(lnbtncontainer);

        // Code for the Next Button.
        lnnext.addEventListener("click", next3);
        function next3(){
            if(lninput.value == 0 || ""){
                lninput.removeAttribute('class', 'animate__animated animate__faster animate__headShake');
                lninput.setAttribute('class', 'form-control');
                lninput.style.borderColor = "red";
                lntaken.setAttribute('for', 'lninput');
                lntaken.setAttribute('style', "color: red; font-family: 'Josefin Sans', sans-serif;");
                lntaken.setAttribute('class', 'animate__animated animate__rubberBand')
                lntaken.innerHTML = "Dieses Feld darf nicht leer sein.";

                setTimeout(function(){
                    lninput.setAttribute('class', 'form-control animate__animated animate__faster animate__headShake');
                },10);
            } else {

                lncontainer.removeAttribute('class', 'animate__animated animate__faster animate__fadeInRightBig');
                lncontainer.setAttribute('class', 'animate__animated animate__faster animate__fadeOutLeftBig');

                setTimeout(function(){
                console.log(lninput.value);
                age();
                }, 200);
            }
        }
    }

    let age = () => {

        // Remove Child Elements of Container to append new Child Elements. 
        allconatiner.removeChild(lncontainer);
        allconatiner.removeChild(lnbtncontainer);
        
        // Set Attributes for HTML Elements.
        acontainer.setAttribute('class', 'animate__animated animate__faster animate__fadeInRightBig');
        ajumbotron.setAttribute('class', 'djumbotron" style="opacity: 1;'); 
        adisplay.setAttribute('class', 'display-5');
        adisplay.setAttribute('style', "color: #302F3F; font-family: 'Josefin Sans', sans-serif;font-size: xxx-large; text-shadow: 4px 4px 15px #302F3F;");
        adisplay.innerHTML = `Toll! Wie alt bist du?`;
        aline.setAttribute('class', 'my-4');     
        ainput.setAttribute('type','text');
        ainput.setAttribute('class', 'form-control');
        ainput.setAttribute('style', 'height: 3rem;')
        anext.setAttribute('class', 'btn btn-outline-warning');
        anext.setAttribute('style', "margin-top: 3rem; min-width: 100px; width: 20%; height: 3rem;")
        anext.setAttribute('type', 'button');
        anext.innerHTML = "Weiter &raquo;";

        // Append Child Elelments to Parent Elements.
        aform.appendChild(ainput);
        ajumbotron.appendChild(adisplay);
        ajumbotron.appendChild(aline);
        ajumbotron.appendChild(aform);
        acontainer.appendChild(ajumbotron);
        abtncontainer.appendChild(anext);
        allconatiner.appendChild(acontainer);
        allconatiner.appendChild(abtncontainer);

        // Code for the Next Button.
        anext.addEventListener("click", next4);
        function next4(){
            lncontainer.removeAttribute('class', 'animate__animated animate__faster animate__fadeInRightBig');
            lncontainer.setAttribute('class', 'animate__animated animate__faster animate__fadeOutLeftBig');

            setTimeout(function(){
                console.log(ainput.value);
               uname();
            }, 200);
        }
    }

    let uname = () => {

        // Remove Child Elements of Container to append new Child Elements. 
        allconatiner.removeChild(acontainer);
        allconatiner.removeChild(abtncontainer);
        
        // Set Attributes for HTML Elements.
        ucontainer.setAttribute('class', 'animate__animated animate__faster animate__fadeInRightBig');
        ujumbotron.setAttribute('class', 'djumbotron" style="opacity: 1;'); 
        udisplay.setAttribute('class', 'display-5');
        udisplay.setAttribute('style', "color: #302F3F; font-family: 'Josefin Sans', sans-serif;font-size: xxx-large; text-shadow: 4px 4px 15px #302F3F;");
        udisplay.innerHTML = `Wie möchtest du bei uns heißen, ${x}?`;
        uline.setAttribute('class', 'my-4');     
        uinput.setAttribute('type','text');
        uinput.setAttribute('class', 'form-control');
        uinput.setAttribute('style', 'height: 3rem;')
        uinput.setAttribute('id', 'uinput');
        unext.setAttribute('class', 'btn btn-outline-warning');
        unext.setAttribute('style', "margin-top: 3rem; min-width: 100px; width: 20%; height: 3rem;")
        unext.setAttribute('type', 'button');
        unext.innerHTML = "Weiter &raquo;";

        // Append Child Elelments to Parent Elements.
        uform.appendChild(utaken);
        uform.appendChild(uinput);
        ujumbotron.appendChild(udisplay);
        ujumbotron.appendChild(uline);
        ujumbotron.appendChild(uform);
        ucontainer.appendChild(ujumbotron);
        ubtncontainer.appendChild(unext);
        allconatiner.appendChild(ucontainer);
        allconatiner.appendChild(ubtncontainer);

        // Code for the Next Button.
        unext.addEventListener("click", next5);
        function next5(){
            //Check if Username Matches one in Database, if it does, mark the searchbar red and shake.
            if(uinput.value == "Hans"){

                uinput.removeAttribute('class', 'animate__animated animate__faster animate__headShake');
                uinput.setAttribute('class', 'form-control');
                uinput.style.borderColor = "red";
                utaken.setAttribute('for', 'uinput');
                utaken.setAttribute('style', "color: red; font-family: 'Josefin Sans', sans-serif;");
                utaken.setAttribute('class', 'animate__animated animate__rubberBand')
                utaken.innerHTML = "Dieser Nutzername ist leider schon vergeben.";

                setTimeout(function(){
                    uinput.setAttribute('class', 'form-control animate__animated animate__faster animate__headShake');
                },10);
            } else if(uinput.value == 0 || ""){
                uinput.removeAttribute('class', 'animate__animated animate__faster animate__headShake');
                uinput.setAttribute('class', 'form-control');
                uinput.style.borderColor = "red";
                utaken.setAttribute('for', 'uinput');
                utaken.setAttribute('style', "color: red; font-family: 'Josefin Sans', sans-serif;");
                utaken.setAttribute('class', 'animate__animated animate__rubberBand')
                utaken.innerHTML = "Dieses Feld darf nicht leer sein.";

                setTimeout(function(){
                    uinput.setAttribute('class', 'form-control animate__animated animate__faster animate__headShake');
                },10);
            } else {

                acontainer.removeAttribute('class', 'animate__animated animate__faster animate__fadeInRightBig');
                acontainer.setAttribute('class', 'animate__animated animate__faster animate__fadeOutLeftBig');

                setTimeout(function(){
                console.log(uinput.value);
                email();
                }, 200);
            }
        }
    }

    let email = () => {

        // Remove Child Elements of Container to append new Child Elements. 
        allconatiner.removeChild(ucontainer);
        allconatiner.removeChild(ubtncontainer);
        
        // Set Attributes for HTML Elements.
        mailcontainer.setAttribute('class', 'animate__animated animate__faster animate__fadeInRightBig');
        mailjumbotron.setAttribute('class', 'djumbotron" style="opacity: 1;'); 
        maildisplay.setAttribute('class', 'display-5');
        maildisplay.setAttribute('style', "color: #302F3F; font-family: 'Josefin Sans', sans-serif;font-size: xxx-large; text-shadow: 4px 4px 15px #302F3F;");
        maildisplay.innerHTML = `Wie lautet deine E-Mail adresse?`;
        mailline.setAttribute('class', 'my-4');     
        mailinput.setAttribute('type','text');
        mailinput.setAttribute('class', 'form-control');
        mailinput.setAttribute('style', 'height: 3rem;')
        mailinput.setAttribute('id', 'uinput');
        mailnext.setAttribute('class', 'btn btn-outline-warning');
        mailnext.setAttribute('style', "margin-top: 3rem; min-width: 100px; width: 20%; height: 3rem;")
        mailnext.setAttribute('type', 'button');
        mailnext.innerHTML = "Weiter &raquo;";

        // Append Child Elelments to Parent Elements.
        mailform.appendChild(mailtaken);
        mailform.appendChild(mailinput);
        mailjumbotron.appendChild(maildisplay);
        mailjumbotron.appendChild(mailline);
        mailjumbotron.appendChild(mailform);
        mailcontainer.appendChild(mailjumbotron);
        mailbtncontainer.appendChild(mailnext);
        allconatiner.appendChild(mailcontainer);
        allconatiner.appendChild(mailbtncontainer);

        // Code for the Next Button.
        mailnext.addEventListener("click", next6);
        function next6(){
            //Check if Username Matches one in Database, if it does, mark the searchbar red and shake.
            if(mailinput.value == "constantin.amundsen@gmail.com"){

                mailinput.removeAttribute('class', 'animate__animated animate__faster animate__headShake');
                mailinput.setAttribute('class', 'form-control');
                mailinput.style.borderColor = "red";
                mailtaken.setAttribute('for', 'uinput');
                mailtaken.setAttribute('style', "color: red; font-family: 'Josefin Sans', sans-serif;");
                mailtaken.setAttribute('class', 'animate__animated animate__rubberBand')
                mailtaken.innerHTML = "Diese E-Mail ist schon bei uns registriert.";

                setTimeout(function(){
                    mailinput.setAttribute('class', 'form-control animate__animated animate__faster animate__headShake');
                },10);
            } else if(mailinput.value == 0 || ""){
                mailinput.removeAttribute('class', 'animate__animated animate__faster animate__headShake');
                mailinput.setAttribute('class', 'form-control');
                mailinput.style.borderColor = "red";
                mailtaken.setAttribute('for', 'mailinput');
                mailtaken.setAttribute('style', "color: red; font-family: 'Josefin Sans', sans-serif;");
                mailtaken.setAttribute('class', 'animate__animated animate__rubberBand')
                mailtaken.innerHTML = "Dieses Feld darf nicht leer sein.";

                setTimeout(function(){
                    mailinput.setAttribute('class', 'form-control animate__animated animate__faster animate__headShake');
                },10);
            } else {

                ucontainer.removeAttribute('class', 'animate__animated animate__faster animate__fadeInRightBig');
                ucontainer.setAttribute('class', 'animate__animated animate__faster animate__fadeOutLeftBig');

                setTimeout(function(){
                console.log(mailinput.value);
                password();
                }, 200);
            }
        }
    }

    let password = () => {

        // Remove Child Elements of Container to append new Child Elements. 
        allconatiner.removeChild(mailcontainer);
        allconatiner.removeChild(mailbtncontainer);
        
        // Set Attributes for HTML Elements.
        pwcontainer.setAttribute('class', 'animate__animated animate__faster animate__fadeInRightBig');
        pwjumbotron.setAttribute('class', 'djumbotron" style="opacity: 1;'); 
        pwdisplay.setAttribute('class', 'display-5');
        pwdisplay.setAttribute('style', "color: #302F3F; font-family: 'Josefin Sans', sans-serif;font-size: xxx-large; text-shadow: 4px 4px 15px #302F3F;");
        pwdisplay.innerHTML = `Erstelle ein sicheres Passwort.`;
        pwline.setAttribute('class', 'my-4');     
        pwinput.setAttribute('type','text');
        pwinput.setAttribute('class', 'form-control');
        pwinput.setAttribute('style', 'height: 3rem;')
        pwinput.setAttribute('id', 'pwinput');
        pwnext.setAttribute('class', 'btn btn-outline-warning');
        pwnext.setAttribute('style', "margin-top: 3rem; min-width: 100px; width: 20%; height: 3rem;")
        pwnext.setAttribute('type', 'button');
        pwnext.innerHTML = "Weiter &raquo;";

        // Append Child Elelments to Parent Elements.
        pwform.appendChild(pwtaken);
        pwform.appendChild(pwinput);
        pwjumbotron.appendChild(pwdisplay);
        pwjumbotron.appendChild(pwline);
        pwjumbotron.appendChild(pwform);
        pwcontainer.appendChild(pwjumbotron);
        pwbtncontainer.appendChild(pwnext);
        allconatiner.appendChild(pwcontainer);
        allconatiner.appendChild(pwbtncontainer);

        // Code for the Next Button.
        pwnext.addEventListener("click", next7);
        function next7(){

            //Check if Username Matches one in Database, if it does, mark the searchbar red and shake.
            if(pwinput.value == 0 || ""){

                pwinput.removeAttribute('class', 'animate__animated animate__faster animate__headShake');
                pwinput.setAttribute('class', 'form-control');
                pwinput.style.borderColor = "red";
                pwtaken.setAttribute('for', 'uinput');
                pwtaken.setAttribute('style', "color: red; font-family: 'Josefin Sans', sans-serif;");
                pwtaken.setAttribute('class', 'animate__animated animate__rubberBand')
                pwtaken.innerHTML = "Dieses Feld darf nicht leer sein.";

                setTimeout(function(){
                    pwinput.setAttribute('class', 'form-control animate__animated animate__faster animate__headShake');
                },10);
            } else if(pwinput.value.length <= 8){
                pwinput.removeAttribute('class', 'animate__animated animate__faster animate__headShake');
                pwinput.setAttribute('class', 'form-control');
                pwinput.style.borderColor = "red";
                pwtaken.setAttribute('for', 'uinput');
                pwtaken.setAttribute('style', "color: red; font-family: 'Josefin Sans', sans-serif;");
                pwtaken.setAttribute('class', 'animate__animated animate__rubberBand')
                pwtaken.innerHTML = "Dein Passwort muss mindestens 6 Zeichen Lang sein, Groß- und Kleinschreibung und mindestens ein Sonderzeichen beinhalten.";

                setTimeout(function(){
                    pwinput.setAttribute('class', 'form-control animate__animated animate__faster animate__headShake');
                },10);
            } else {

                mailcontainer.removeAttribute('class', 'animate__animated animate__faster animate__fadeInRightBig');
                mailcontainer.setAttribute('class', 'animate__animated animate__faster animate__fadeOutLeftBig');

                setTimeout(function(){
                console.log(pwinput.value);
                choosephone();
                }, 200);
            }
        }
    }

    let choosephone = () => {

        // Remove Child Elements of Container to append new Child Elements. 
        allconatiner.removeChild(pwcontainer);
        allconatiner.removeChild(pwbtncontainer);
        
        // Set Attributes for HTML Elements.
        pcontainer.setAttribute('class', 'animate__animated animate__faster animate__fadeInRightBig');
        pjumbotron.setAttribute('class', 'djumbotron" style="opacity: 1;'); 
        pdisplay.setAttribute('class', 'display-5');
        pdisplay.setAttribute('style', "color: #302F3F; font-family: 'Josefin Sans', sans-serif;font-size: xxx-large; text-shadow: 4px 4px 15px #302F3F;");
        pdisplay.innerHTML = `Möchtest du deine Telefonnummer angeben?`;
        pline.setAttribute('class', 'my-4');     
        pyes.setAttribute('class', 'btn btn-outline-warning');
        pyes.setAttribute('style', "margin-top: 3rem; min-width: 100px; width: 20%; height: 3rem;")
        pyes.setAttribute('type', 'button');
        pyes.innerHTML = "Klar! &#10004;";
        pno.setAttribute('class', 'btn btn-outline-warning');
        pno.setAttribute('style', "margin-left: 5rem; margin-top: 3rem; min-width: 100px; width: 20%; height: 3rem; opacity: 30%;")
        pno.setAttribute('type', 'button');
        pno.innerHTML = "Nein &#10005;";

        // Append Child Elelments to Parent Elements.
        pjumbotron.appendChild(pdisplay);
        pjumbotron.appendChild(pline);
        pcontainer.appendChild(pjumbotron);
        pbtncontainer.appendChild(pyes);
        pbtncontainer.appendChild(pno);
        allconatiner.appendChild(pcontainer);
        allconatiner.appendChild(pbtncontainer);

        // Eventlisteners for Buttons
        pyes.addEventListener("click", yes);
        pno.addEventListener("click", no);

        // Code for the No Button.
        function no(){
            console.log("No, Registration Complete.")
        }

        // Code for the Yes Button.
        function yes(){
            pwcontainer.removeAttribute('class', 'animate__animated animate__faster animate__fadeInRightBig');
            pwcontainer.setAttribute('class', 'animate__animated animate__faster animate__fadeOutLeftBig');

            setTimeout(function(){
               phone();
            }, 200);
        }
    }

    let phone = () => {

        // Remove Child Elements of Container to append new Child Elements. 
        allconatiner.removeChild(pcontainer);
        allconatiner.removeChild(pbtncontainer);
        
        // Set Attributes for HTML Elements.
        phcontainer.setAttribute('class', 'animate__animated animate__faster animate__fadeInRightBig');
        phjumbotron.setAttribute('class', 'djumbotron" style="opacity: 1;'); 
        phdisplay.setAttribute('class', 'display-5');
        phdisplay.setAttribute('style', "color: #302F3F; font-family: 'Josefin Sans', sans-serif;font-size: xxx-large; text-shadow: 4px 4px 15px #302F3F;");
        phdisplay.innerHTML = `Wie lautet deine Telefonnummer, ${x}?`;
        phline.setAttribute('class', 'my-4');     
        phinput.setAttribute('type','text');
        phinput.setAttribute('class', 'form-control');
        phinput.setAttribute('style', 'height: 3rem;')
        phinput.setAttribute('id', 'lninput');
        phnext.setAttribute('class', 'btn btn-outline-success');
        phnext.setAttribute('style', "margin-top: 3rem; min-width: 100px; width: 20%; height: 3rem;")
        phnext.setAttribute('type', 'button');
        phnext.innerHTML = "Abschliessen &#10004;";

        // Append Child Elelments to Parent Elements.
        phform.appendChild(phtaken);
        phform.appendChild(phinput);
        phjumbotron.appendChild(phdisplay);
        phjumbotron.appendChild(phline);
        phjumbotron.appendChild(phform);
        phcontainer.appendChild(phjumbotron);
        phbtncontainer.appendChild(phnext);
        allconatiner.appendChild(phcontainer);
        allconatiner.appendChild(phbtncontainer);

        // Code for the Next Button.
        phnext.addEventListener("click", finish);
        function finish(){
            if(phinput.value == 0 || ""){
                phinput.removeAttribute('class', 'animate__animated animate__faster animate__headShake');
                phinput.setAttribute('class', 'form-control');
                phinput.style.borderColor = "red";
                phtaken.setAttribute('for', 'lninput');
                phtaken.setAttribute('style', "color: red; font-family: 'Josefin Sans', sans-serif;");
                phtaken.setAttribute('class', 'animate__animated animate__rubberBand')
                phtaken.innerHTML = "Dieses Feld darf nicht leer sein.";

                setTimeout(function(){
                    phinput.setAttribute('class', 'form-control animate__animated animate__faster animate__headShake');
                },10);
            } else {

                pcontainer.removeAttribute('class', 'animate__animated animate__faster animate__fadeInRightBig');
                pcontainer.setAttribute('class', 'animate__animated animate__faster animate__fadeOutLeftBig');

                setTimeout(function(){
                console.log(phinput.value);
                console.log("Registration Complete")
                }, 200);
            }
        }
    }
}




/* button.addEventListener("click", next);

 function next() {
    if(input.value == 0 || ""){
        input.removeAttribute('class', 'animate__animated animate__faster animate__headShake');
        
        setTimeout(function(){
            input.style.borderColor = "red";
        }, 100);
        
        setTimeout(function(){
            input.setAttribute('class', 'animate__animated animate__faster animate__headShake');
            input.style.borderColor = "";
        },10);
    } else {
        label.innerHTML = "Age";
    }
} */


/* document.querySelector('button').addEventListener('click', () => {
    dist.classList.remove('animation');
  
    setTimeout(function(){
      dist.classList.add('animation');
    },10);
  }); */