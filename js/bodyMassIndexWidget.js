function CalculateBMI(nameInputs) {
    var name = nameInputs || [];

    function addName(enteredName) {
        var personName = enteredName.charAt(0).toUppecase() + enteredName.slice(1);
        
        if(enteredName === ""){
            return "Please enter your name"
        }

        return personName
    };

    function addWeight(weightNumber) {
        var weight = weightNumber;
        return weight
    };

    function addHeight(heightNumber) {
        var height = heightNumber;
        return height
    };

    function bodyMassIndex(weight, height) {
        var bmi = weight / height * height;
        return bmi
    };

    function getName() {
        return name
    };

    function getBMI(bmi) {
        var bodyMassIndexNumberCount = Object.keys(name);
        return bodyMassIndexNumberCount+bmi;
    };

    return {
        addName,
        addWeight,
        addHeight,
        bodyMassIndex,
        getName,
        getBMI
    };
};