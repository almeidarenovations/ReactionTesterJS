    var start = new Date().getTime();
    var times = new Array();
    var timer;

    function squareAppear() {

        var top = Math.random() * 400;
        var left = Math.random() * 800;
        var width = (Math.random() * 200) + 100;

        if (Math.random() > 0.5) {
            document.getElementById("shape").style.borderRadius = "50%";
        } else {
            document.getElementById("shape").style.borderRadius = "0%";
        }

        document.getElementById("shape").style.backgroundColor = getRandomColor();
        document.getElementById("shape").style.top = top + "px";
        document.getElementById("shape").style.left = left + "px";
        document.getElementById("shape").style.width = width + "px";
        document.getElementById("shape").style.height = width + "px";
        document.getElementById("shape").style.display = "block";

        start = new Date().getTime();
    }

    function getRandomColor() {
        var letters = "0123456789ABCDEF".split("");
        var color = "#";

        for (i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function appearDelay() {
        setTimeout(squareAppear, Math.random() * 2000);
    }

    appearDelay();

    function sqaureClick() {

        var end = new Date().getTime();
        var timeTaken = (end - start) / 1000;
        times.push(timeTaken);

        var highscore = Math.min(...times);

        document.getElementById("shape").style.display = "none";
        document.getElementById("timeTaken").innerHTML = timeTaken + "s";
        document.getElementById("fastestTime").innerHTML = highscore + "s";
        appearDelay();
    }
