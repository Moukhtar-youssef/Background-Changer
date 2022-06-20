// start general variables
input_1 = document.getElementById('1');
input_2 = document.getElementById('2');
direction = document.getElementById('direction');
// end general variables
// start reset variables
localStorage.setItem("reset" , "#891308");
localStorage.setItem("reset_2" ,"#054189");
reset_color_1 = localStorage.getItem("reset");
reset_color_2 = localStorage.getItem("reset_2");
// end reset variables

//checking every one millisecond
setInterval(()=>{
            document.body.style.backgroundImage = `linear-gradient(${direction.value} ,${input_1.value},${input_2.value})`;
            color_Text.innerHTML =`linear-gradient ${direction.value} ,${input_1.value},${input_2.value}`
        },1);
// set favorite color
function favourite_color(){
    localStorage.setItem("value" , `${input_1.value}`);
    localStorage.setItem("value_2" , `${input_2.value}`);
    localStorage.setItem("direction",`${direction.value}`);
    document.body.style.backgroundImage = `linear-gradient(${direction.value} ,${input_1.value},${input_2.value})`;
}
// get favorite color
function display_favourite(){
    input_1.value= localStorage.getItem("value");
    input_2.value= localStorage.getItem("value_2");
    direction.value = localStorage.getItem("direction");
    document.body.style.backgroundImage = `linear-gradient(${direction.value} ,${input_1.value},${input_2.value})`;
}
// reset the colors to basic color
function reset(){
    input_1.value=`${reset_color_1}`;
    input_2.value= `${reset_color_2}`;
    direction.value = "to right";
}
