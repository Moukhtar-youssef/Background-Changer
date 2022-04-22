input_1 = document.getElementById('1');
input_2 = document.getElementById('2');
color_Text = document.getElementById('text');
direction = document.getElementById('direction');

setInterval(()=>{
            document.body.style.backgroundImage = `linear-gradient(${direction.value} ,${input_1.value},${input_2.value})`;
            color_Text.innerHTML =`${input_1.value},${input_2.value}`
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
    console.log(`${favourite_color_1} , ${favourite_color_2}`)
    document.body.style.backgroundImage = `linear-gradient(${direction.value} ,${favourite_color_1},${favourite_color_2})`;
}
function reset(){
    input_1.value="#891308";
    input_2.value= "#054189";
}