// start general variables
input_1 = document.getElementById('1');
input_2 = document.getElementById('2');
color_Text = document.getElementById('text');
direction = document.getElementById('direction');
// end general variables
// start reset variables
localStorage.setItem("reset" , "#891308")
localStorage.setItem("reset_2" ,"#054189")
reset_color_1 = localStorage.getItem("reset")
reset_color_2 = localStorage.getItem("reset_2")
// end reset variables


setInterval(()=>{
            document.body.style.backgroundImage = `linear-gradient(${direction.value} ,${input_1.value},${input_2.value})`;
            color_Text.innerHTML =`linear-gradient ${direction.value} ,${input_1.value},${input_2.value}`
        },1)
function favourite_color(){
    localStorage.setItem("value" , `${input_1.value}`)
    localStorage.setItem("value_2" , `${input_2.value}`)
    document.body.style.backgroundImage = `linear-gradient(${direction.value} ,${input_1.value},${input_2.value})`;
}
function display_favourite(){
    favourite_color_1 = localStorage.getItem("value")
    favourite_color_2 = localStorage.getItem("value_2")
    input_1.value=`${favourite_color_1}`;
    input_2.value=`${favourite_color_2}`;
    document.body.style.backgroundImage = `linear-gradient(${direction.value} ,${favourite_color_1},${favourite_color_2})`;
}
function reset(){
    input_1.value=`${reset_color_1}`;
    input_2.value= `${reset_color_2}`;
}