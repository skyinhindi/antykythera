var images[]={"1.jpg","2.jpg","3.jpg"};
var names[]={"John Wick","James Bond","ACP Praduman"};
var pointer1=0;
var pointer2=0;
function slide(){
if(pointer==2)
	pointer=0;
else 
	pointer++;
document.getElementById('speaker-image').src=images[pointer1];
document.getElementById('speaker-name').text=names[pointer2];
}

setTimeOut(slide(),2000)