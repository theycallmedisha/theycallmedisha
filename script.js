let tg = window.Telegram.WebApp;



tg.expand()

tg.MainButton.textColor = "#fffff";
tg.MainButton.color = "#fffff";

let item = " ";

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn1");

btn1.addEventListener("click", function(){
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText('"вы выбрали товар ')
        item = "1";
        tg.MainButton.show();
    }
});


btn2.addEventListener("click", function(){
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText('"вы выбрали товар ')
        item = "2";
        tg.MainButton.show();
    }
});

Telegram.WebApp.onEvent("mainButtonCkicked", function(){
     tg.sendData(item);
});


let usercard = document.getElementById("usercard");
let p = document.createElement("p");

p.itemtext = `${tg.initDataUnsafe.first_name}
${tg.initDataUnsafe.last_name}`

usercard.appendChild(p)
