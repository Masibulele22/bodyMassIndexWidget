var nameElem = document.querySelector(".nameInput");
var weightElem = document.querySelector(".weightInput");
var heightElem = document.querySelector(".heightInput");

var calculateButtonElem = document.querySelector(".calculateButton");
var resetElement = document.querySelector(".resetButton");
var displayElem = document.querySelector(".display");

let factoryInstance = CalculateBMI(storeNames);

if (localStorage['name', 'weight',] !== undefined) {
    var storeNames = JSON.parse(localStorage['name'])
}

else {
    storeNames = {};
}

function calculate() {
    var nameElem = factoryInstance.addName(typedName);
    name = nameElem.value;

    var weightElem = factoryInstance.addWeight(typedWeight);
    weight = weightElem.value;

    var heightElem = factoryInstance.addHeight(typedHeight);
    height = heightElem.value;

    localStorage['name'] = JSON.stringify(factoryInstance.addName());

};

resetElement.addEventListener('click', function() { 
    localStorage.clear();
    window.location.reload();
});

calculateButtonElem.addEventListener('click', calculate);

