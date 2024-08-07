var getRandomNumber = function(size){
    return Math.floor(Math.random() * size);
};

var getDistance = function(event, target){
    var diffX = event.offsetX - target.x;
    var diffY = event.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
}

var getDistanceHint = function(distance){
    if(distance < 10){
        return "Обожжешься!";
    }else if(distance < 20){
        return "Очень горячо";
    }else if(distance < 40){
        return "Горячо";
    }else if(distance < 80){
        return "Тепло";
    }else if(distance < 160){
        return "Холодно";
    }else if(distance < 320){
        return "Очень холодно";
    }else if(distance < 520){
        return "Очень-очень холодно"
    }else if(distance < 720){
        return "Замерзнешь!"
    }
};

var width = 400;
var heigth = 400;
var clicks = 0;
count = 20;

var target = {
    x: getRandomNumber(width),
    y: getRandomNumber(heigth)
};


$("#map").click(function(event){
    clicks++;
    count--;

    var distance = getDistance(event, target);
    var distanceHint = getDistanceHint(distance);
    $("#distance").text(distanceHint);
    $("#counts").text("Осталось ходов: " + count);

    if(count <= 0){
        alert(" КОНЕЦ ИГРЫ!")
        $("#distance").text(" ");
        $("#counts").text(" ");
    }
    debugger;
    if(distance < 8){
        alert("Клад найден! Сделано кликов: " + clicks);
    }
})





