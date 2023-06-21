const searchbut=document.getElementById('buttonaddon2');
const city_name=document.getElementById('city_name');
const temp=document.getElementById('temp');
const temp_status=document.getElementById('temp_status');
const todaydate=document.getElementById('todaydate');
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let date=new Date();
const curday=date.getDate();
const curmonth=date.getMonth()+1;
const curyr=date.getFullYear();
let day = days[date.getDay()];
// console.log(curdate);
todaydate.innerText=day+"   "+","+curday+"-"+curmonth+"-"+curyr;
const getinfo=async(event)=>{
    event.preventDefault();
    console.log("hii");
    const textbox=document.getElementById('textbox').value;
    
    // const info=value.textbox;
    console.log(textbox);
    
    if(textbox== ""){
        city_name.innerText="Please enter the city name First";
    }else{
        try{
            let url=`https://api.openweathermap.org/data/2.5/weather?q=${textbox}&units=metric&appid=a12dbc5a82817659acc62210fa0ee5a0`;
        // console.log(url);
        const response=await fetch(url);
        const obj=await response.json();
        const arrobj=[obj];
        console.log(obj);
        city_name.innerText=`${arrobj[0].name},${arrobj[0].sys.country}`;
        temp.innerText=arrobj[0].main.temp;
        // temp_status.innerText=arrobj[0].weather[0].main;
        const tempmood=arrobj[0].weather[0].main;
        if(tempmood=='Clear'){
            temp_status.innerHTML="<i class='fa-solid fa-sun fa-beat-fade' style='color: #fde917;'></i>"
        }else if(tempmood=='Clouds'){
            temp_status.innerHTML="<i class='fa-solid fa-cloud fa-beat-fade' style='color: #97989b;'></i>"
        }else if(tempmood=='Rain'){
            temp_status.innerHTML="<i class='fa-solid fa-cloud-rain fa-beat-fade' style='color: #6589d2;'></i>"
        }else{
            temp_status.innerHTML="<i class='fa-solid fa-cloud fa-beat-fade' style='color: #97989b;'></i>"
        }

        }catch{
            city_name.innerText="City name entererd is Incorrect";
            temp.innerHTML="";
            temp_status.innerHTML="";
        }
        
    }
}
searchbut.addEventListener('click',getinfo);