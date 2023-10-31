function handleEvent(){
    if(document.getElementById('onOffButton').innerHTML == 'off'){
        document.getElementById('imgOfBulb').src = 'on.png';
        document.getElementById('onOffButton').innerHTML = 'on'
        document.getElementById('onOffButton').style.backgroundColor = "green";
    }
    else if(document.getElementById('onOffButton').innerHTML == 'on'){
        document.getElementById('imgOfBulb').src = 'off.png';
        document.getElementById('onOffButton').innerHTML = 'off'
      document.getElementById('onOffButton').style.backgroundColor = "black";
    }
}