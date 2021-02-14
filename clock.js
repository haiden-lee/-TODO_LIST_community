const clockContainer=document.querySelector(".js-clock"), clockTitle=clockContainer.querySelector("h1");
const dayContainer=document.querySelector(".js-date"), dateTitle=dayContainer.querySelector("span");

function getTime() {
    const date=new Date();
    const minutes=date.getMinutes();
    const hours=date.getHours();
    const seconds=date.getSeconds();
    clockTitle.innerText=`${hours < 10 ? `0${hours}`: hours}:${minutes < 10 ? `0${minutes}`: minutes}:${seconds < 10 ? `0${seconds}`: seconds}`;
}

function getDate(){
    const week=new Array('일','월','화','수','목','금','토');
    const now=new Date();
    const month=now.getMonth()+1;
    const date=now.getDate();
    const dayofweek=week[now.getDay()];
    const year=now.getFullYear();
    dateTitle.innerText=`${year}.${month < 10? `0${month}` : month}.${date}.${dayofweek}`;
}

function init() {
    getTime();
    getDate();
    setInterval(getTime, 1000);
}

init();