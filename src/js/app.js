function calcM (){
    const totalM = document.getElementById("totalMarks").value;
    let userM = document.querySelector("#userM").value;
    const getM = (userM / totalM ) * 100;
    let congUnfor = document.querySelector("#userget");
    let userget = document.querySelector("#displayGrad");
    let displayM = document.getElementById("userMarksDisplay");
    if(getM <= 100 && getM >= 0){
        displayM.innerHTML = `Your Percentage Is : ${getM.toFixed(2)}%`;
    }else{
        displayM.innerHTML =""
    }

    if (getM > 0 && getM < 50 ) {
        congUnfor.innerHTML = "Unfortunately";
        userget.innerHTML = "You Are fail";
    }else if (getM >= 50 && getM < 60) {
        congUnfor.innerHTML = "Congratulations";
        userget.innerHTML = "You got : c";
    }else if (getM >= 60 && getM < 70) {
        congUnfor.innerHTML = "Congratulations";
        userget.innerHTML = "You got : B";
    }else if (getM >= 70 && getM < 80) {
        congUnfor.innerHTML = "Congratulations";
        userget.innerHTML = "You got : A";
    }else if (getM >= 80 && getM < 90) {
        congUnfor.innerHTML = "Congratulations";
        userget.innerHTML = "You got : A<sup>+<sup/>";
    }else if (getM >= 90 && getM <= 100) {
        congUnfor.innerHTML = "Congratulations";
        userget.innerHTML = "You Are Top Of The List";
    }else{
        congUnfor.innerHTML = "It's Not Valid";
        userget.innerHTML = "Enter Valid Value";
    }
}