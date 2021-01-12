const d=document.getElementById("days");
const h=document.getElementById("hours");
const m=document.getElementById("mins");
const s=document.getElementById('seconds');

const newYear="1 Jan 2022";

function countdown(){
	const newYearDate=new Date(newYear);
	const currentDate=new Date();
 	const diff=(newYearDate-currentDate)/1000;
	const days=Math.floor(diff/3600/24);

	const hours=Math.floor(diff/3600)%24;
	const minutes=(Math.floor(diff/60)%24)%60;
	const seconds=(Math.floor(diff)%60);
	console.log(days, hours, minutes, seconds);


	d.innerHTML=formatTime(days);
	h.innerHTML=formatTime(hours);
	m.innerHTML= formatTime(minutes);
	s.innerHTML=formatTime(seconds);

}
function formatTime(t){
	return t<10?`0${t}`:t;
}
countdown();
setInterval(countdown,1000);
