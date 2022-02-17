var get478 = function() {
    var sequance = "1(in) 2(in) 3(in) 4(in) 1(hold) 2(hold) 3(hold) 4(hold) 5(hold) 6(hold) 7(hold) 1(out) 2(out) 3(out) 4(out) 5(out) 6(out) 7(out) 8(out)".split(" ");
    var i = 0;
    return function() {
        if (i >= sequance.length) {
            i = 0;
        }
        return sequance[i++];
    };
};

var do478 = get478();

var stop478 = function() {clearInterval(interval478)};

var interval478 = setInterval(function() {
    console.log(do478());
}, 1000);
