function showTime(){
  var timeDiff = timeEnd - Date.now();
  var display;

  if (timeDiff > 0) {
    var days = Math.floor(timeDiff / oneDay);
    var h = Math.floor((timeDiff % oneDay) / oneHour);
    var m = Math.floor((timeDiff % oneHour) / oneMinute);
    var s = Math.floor((timeDiff % oneMinute) / oneSecond);

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    display = days + " days " + h + ":" + m + ":" + s;
  }
  else {
    display = "";
  }

  document.getElementById("CountdownDisplay").innerText = display;
  document.getElementById("CountdownDisplay").textContent = display;

  setTimeout(showTime, 1000);
}

function change_image(name_img){
  document.getElementById("mainBody").style.backgroundImage="url(flowers/" + name_img + ")";
}

function initBG(){
  change_image(flowers[Math.floor(Math.random() * flowers.length)]);
}

initBG()
showTime();
