const textDisplay="hello there fellas! hope you enjoyed your weekend........";
const container=document.getElementsByClassName('container')[0];

let index=0;
function writeText(){
  container.innerText=textDisplay.slice(0,index);
  index++;
  if(index >textDisplay.length){
    index = 0;
  }
}
setInterval(writeText,100);