    var x = 0;
    function myFunction() {
            x++;
            document.getElementById("num").innerHTML = x;
        }
        function reset() {
            x = 0;
            document.getElementById("num").innerHTML = 0;
        }

    function color() {
        let screen = document.querySelector(".screen");
        let color = document.querySelector(".color");
        color.addEventListener('click' , function() {
            let rgb = 'rgb(' + random(225) + ',' + random(225) + ',' + random(225) +')'
            screen.style.backgroundColor = rgb;
        });
    }
    function random (number) {
        return Math.floor(Math.random() * (number + 1));
    }

