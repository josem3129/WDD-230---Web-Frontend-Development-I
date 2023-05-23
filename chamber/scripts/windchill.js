t = 35
s = 10
f=35.74 + 0.6215 * t - 35.75 * (s ** .16) + .4275 * t * (s ** .16)

if (t <= 50 && s >= 3){
    
    const modValue = 
    document.querySelector("#windChill").innerHTML= `Wind chill: ${Math.round(f * 10) / 10}`;
    document.querySelector("#temp").innerHTML= `${t} \u00B0C`;
    document.querySelector("#wind").innerHTML= `Wind speed: ${s} km/h`;
    
}
else if (t >= 50){
    document.querySelector("#windChill").innerHTML= `Wind chill: N/A`;
    document.querySelector("#temp").innerHTML= `${t} \u00B0C`;
    document.querySelector("#wind").innerHTML= `Wind speed: ${s} km/h`;

}
else if (s <= 3){
    document.querySelector("#windChill").innerHTML= `Wind chill: ${Math.round(f * 10) / 10}`;
    document.querySelector("#temp").innerHTML= `${t} \u00B0C`;
    document.querySelector("#wind").innerHTML= `Wind speed: N/A`;

}