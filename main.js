canvas=document.getElementById("my_Canvas");
ctx=canvas.getContext("2d");
color="red";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e) {
color=document.getElementById("color").value;
console.log(color);
mouse_x=e.clientX-canvas.offsetLeft;
mouse_y=e.clientY-canvas.offsetTop;
console.log("X="+mouse_x+",Y="+mouse_y);
circle(mouse_x,mouse_y);
}
function circle(mouse_x,mouse_y){
    ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(mouse_x,mouse_y,40,0,2*Math.PI);
ctx.stroke();
}
function clearArea(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    console.log("my_mousedown");
current_position_x=e.clientX-canvas.offsetLeft;
current_position_y=e.clientY-canvas.offsetTop;
if(mouseEvent=="mouseDown"){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width_of_line;
    console.log("last position of x and y coordinates=");
    console.log("x="+last_position_x+"y="+last_position_y);
    ctx.moveTo(last_position_x,last_position_y);
    console.log("current position of x and y coordinates=");
    console.log("x="+current_position_x+"y="+current_position_y);
    ctx.lineTo(current_position_x,current_position_y);
    ctx.stroke();
}
last_position_x=current_position_x;
last_position_y=current_position_y;
}
