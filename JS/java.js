
const spinButton = document.querySelector('.spin-button');

function everything () {
    var num1 = Math.floor(Math.random()*10);
    var num2 = Math.floor(Math.random()*10);
    var num3 = Math.floor(Math.random()*10);
    console.log("num1 is "+num1);
    console.log("num2 is "+num2);
    console.log("num3 is "+num3);

    // Runs the math for the volume
    function volume() {
        let highest = num1;
        let lowest = num1;
        if (num2 > highest) {
            highest = num2;
          }
          
          if (num3 > highest) {
            highest = num3;
          }
          
          if (num2 < lowest) {
            lowest = num2;
          }
          
          if (num3 < lowest) {
            lowest = num3;
          }
        // console.log("The highest number is: " + highest);
        // console.log("The lowest number is: " + lowest);
        let range = highest - lowest;
        finalVolume = 100 - (range*10);
        console.log(highest+","+lowest+","+"range is "+range);
        console.log("volume is "+finalVolume);
        const result = document.querySelector(".result");
        if (num1 === num2 && num1 === num3) {
            result.textContent = "JACKPOT!!!! Type in your desired volume.";
            const answer = document.querySelector(".answer");
            const volInput = document.createElement("input");
            volInput.type = "text";
            volInput.class = "volume-input";
            volInput.value = 0;
            answer.appendChild(volInput);
            const submit = document.createElement("input");
            submit.type = "button";
            submit.class = "submit-button";
            submit.value = "SUBMIT";
            answer.appendChild(submit);
            const newP = document.createElement("p");
            newP.class = "submission";
            answer.appendChild(newP);
            para = document.querySelector(".submission");
            submit.addEventListener('click', volInput.value.update);
            console.log(volInput.value);
        }
        else {result.textContent = "So close! Your volume is now "+finalVolume+".";}
    }
    volume();

    // The animation
    var numberSpin = function(selector, num) {
        var element = document.querySelector(selector);
        let dur = Math.floor(Math.random() * 3) + 1;
        // element.style.transform = "translateY(-1000px";
        // element.style.transitionDuration = dur+"s";
        // numMath = 10 - num;
        // if (num === 0) {
        //     numMath = 10;
        // } 
        // element.style.transform = "translateY("+numMath+"00px)";
        console.log("dur is "+dur);
        element.style.transform = "translateY(-"+num+"00px)";
        element.style.transitionDuration = dur+"s";
    }
    numberSpin ("#scroll-1", num1);
    numberSpin ("#scroll-2", num2);
    numberSpin ("#scroll-3", num3);

}
    function scrollUp() {
        const slot1 = document.querySelector('#scroll-1');
        slot1.style.transform = "translateY(-"+num1+"00px)";
        slot1.style.transitionDuration = "3s";
        const slot2 = document.querySelector('#scroll-2');
        slot2.style.transform = "translateY(-"+num2+"00px)";
        slot2.style.transitionDuration = "3s";
        const slot3 = document.querySelector('#scroll-3');
        slot3.style.transform = "translateY(-"+num3+"00px)";
        slot3.style.transitionDuration = "3s";
      }
    
spinButton.addEventListener('click', everything);