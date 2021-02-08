

function forclear() {
    
    document.getElementById("output").innerHTML = "0";
    document.getElementById("ac").innerText = "AC";

}

function removeZero() {
    
    let value = document.getElementById("output").innerHTML;
    if (value == "0") {
        value = " "
        document.getElementById("output").innerHTML = value;
    }
}

function negative()
{  
    let value = document.getElementById("output").innerHTML;
  
    document.getElementById("output").innerHTML = -Math.abs(value);
    if (value == -Math.abs(value))
    {
        document.getElementById("output").innerHTML = Math.abs(value);
    }
}

function perc() {
    
    let value = document.getElementById("output").innerHTML;
    value = value / 100;
    
    document.getElementById("output").innerHTML = value;

}

function fordisplay(myvalue) {
    removeZero()
    if (myvalue === '.' && document.getElementById("output").innerHTML.includes('.')) return
    document.getElementById("output").innerHTML += myvalue;
    document.getElementById("ac").innerText = "C";
}

function solved()
 {  
    
    let equation = document.getElementById("output").innerHTML
    let solved = eval(equation);
    document.getElementById("output").innerHTML = solved;


}




const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const valueEl = document.querySelector('.value');

const updateTime = () => {
    const currentTime = new Date();
  
    let currentHour = currentTime.getHours();
    const currentMinute = currentTime.getMinutes();
  
    if (currentHour > 24) {
      currentHour -= 24;
    }
    hourEl.textContent = currentHour.toString();
    minuteEl.textContent = currentMinute.toString().padStart(2, '0');
  }
  setInterval(updateTime, 1000);
  updateTime();