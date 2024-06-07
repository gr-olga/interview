function calcAvgHeight(data) {
    if (Object.keys(data).length === 0) {
        return null;
    }
    let sum = 0;
    let count = 0;
    Object.keys(data).forEach((key) => {
        sum += data[key].height;
        count++;
    });
    return sum / count;

}

calcAvgHeight({
    Matt: {height: 174, weight: 69},
    Jason: {height: 190, weight: 103}
});


function findAllHobbyists(hobby, hobbies) {
    const res = hobbies.object.entries().filter(([key, value]) => value.includes(hobby)).map(([key, value]) => key);
    console.log(res);
    return [];
}

var hobbies = {
    "Steve": ['Fashion', 'Piano', 'Reading'],
    "Patty": ['Drama', 'Magic', 'Pets'],
    "Chad": ['Puzzles', 'Pets', 'Yoga']
};


function update(progressBarId, increase) {
    $("#progressBarId").value += increase;
    if ($("#progressBarId").value >= 100) {
        return true;
    }
    if ($("#progressBarId").value < 100) {
        return false;
    }
}

// Example case.
document.body.innerHTML = `<progress id="loading-bar" value="0" max="100"></progress>`;
console.log(update("loading-bar", 50)); // should return false and loading-bar's value should be 50.
console.log(update("loading-bar", 50))


function setup() {
    $("#btn").click(function() {
        $(this).hide();
        setTimeout(function () {
            $(this).show()
        });
    });
}

// Example case.
document.body.innerHTML = `<button type="button" id="btn">Hide Me!</button>`;

setup();

var button = $("#btn");
button.click();
console.l