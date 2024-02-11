function startBuilding(){
    // hide build drink section and show add flavour section
    var buildDrinkSection = document.getElementById("buildDrinkSection");
    var addFlavourSection = document.getElementById("addFlavourSection");
    buildDrinkSection.style.display = "none";
    addFlavourSection.style.display = "block";
}

function addTaro(){
    // make liquid pour out of spout
    var liquid = document.getElementById("liquid");
    liquid.classList.add("liquidTaro");
    liquid.style.animationPlayState = "running";

    // make cup fill with taro
    var cupFill = document.getElementById("cupFill");
    cupFill.style.animationPlayState = "running";
    cupFill.classList.add("taroFill");

    // after animation, hide add flavour section and show add topping section
    setTimeout(function () {
        var addFlavourSection = document.getElementById("addFlavourSection");
        var addToppingSection = document.getElementById("addToppingSection");
        addFlavourSection.style.display = "none";
        addToppingSection.style.display = "block";
    }, 3500);
}

function addMango(){
    // make liquid pour out of spout
    var liquid = document.getElementById("liquid");
    liquid.classList.add("liquidMango");
    liquid.style.animationPlayState = "running";

    // make cup fill with mango
    var cupFill = document.getElementById("cupFill");
    cupFill.style.animationPlayState = "running";
    cupFill.classList.add("mangoFill");

    // after animation, hide add flavour section and show add topping section
    setTimeout(function () {
        var addFlavourSection = document.getElementById("addFlavourSection");
        var addToppingSection = document.getElementById("addToppingSection");
        addFlavourSection.style.display = "none";
        addToppingSection.style.display = "block";
    }, 3500);
}

function addStrawberry(){
    // make liquid pour out of spout
    var liquid = document.getElementById("liquid");
    liquid.classList.add("liquidStrawberry");
    liquid.style.animationPlayState = "running";

    // make cup fill with strawberry
    var cupFill = document.getElementById("cupFill");
    cupFill.style.animationPlayState = "running";
    cupFill.classList.add("strawberryFill");

    // after animation, hide add flavour section and show add topping section
    setTimeout(function () {
        var addFlavourSection = document.getElementById("addFlavourSection");
        var addToppingSection = document.getElementById("addToppingSection");
        addFlavourSection.style.display = "none";
        addToppingSection.style.display = "block";
    }, 3500);
}

function addMatcha(){
    // make liquid pour out of spout
    var liquid = document.getElementById("liquid");
    liquid.classList.add("liquidMatcha");
    liquid.style.animationPlayState = "running";

    // make cup fill with matcha
    var cupFill = document.getElementById("cupFill");
    cupFill.style.animationPlayState = "running";
    cupFill.classList.add("matchaFill");

    // after animation, hide add flavour section and show add topping section
    setTimeout(function () {
        var addFlavourSection = document.getElementById("addFlavourSection");
        var addToppingSection = document.getElementById("addToppingSection");
        addFlavourSection.style.display = "none";
        addToppingSection.style.display = "block";
    }, 3500);
}

function addTapioca(){
    var tapiocaContainer = document.getElementById("tapiocaContainer");
    tapiocaContainer.style.display = "block";
    var tapioca1 = document.getElementById("cupTapioca1");
    var tapioca2 = document.getElementById("cupTapioca2");
    var tapioca3 = document.getElementById("cupTapioca3");
    var tapioca4 = document.getElementById("cupTapioca4");
    var tapioca5 = document.getElementById("cupTapioca5");
    var tapioca6 = document.getElementById("cupTapioca6");
    var tapioca7 = document.getElementById("cupTapioca7");
    var tapioca8 = document.getElementById("cupTapioca8");

    tapioca1.style.animationPlayState = "running";
    tapioca2.style.animationPlayState = "running";
    tapioca3.style.animationPlayState = "running";
    tapioca4.style.animationPlayState = "running";
    tapioca5.style.animationPlayState = "running";
    tapioca6.style.animationPlayState = "running";
    tapioca7.style.animationPlayState = "running";
    tapioca8.style.animationPlayState = "running";

    // after animation, hide add topping section and show done section
    setTimeout(function () {
        var addToppingSection = document.getElementById("addToppingSection");
        var doneSection = document.getElementById("doneSection");
        addToppingSection.style.display = "none";
        doneSection.style.display = "block";
    }, 3000);
}

function addMangoJelly(){
    var mangoJellyContainer = document.getElementById("mangoJellyContainer");
    mangoJellyContainer.style.display = "block";

    var mango1 = document.getElementById("cupMango1");
    var mango2 = document.getElementById("cupMango2");
    var mango3 = document.getElementById("cupMango3");
    var mango4 = document.getElementById("cupMango4");
    var mango5 = document.getElementById("cupMango5");
    var mango6 = document.getElementById("cupMango6");
    var mango7 = document.getElementById("cupMango7");
    var mango8 = document.getElementById("cupMango8");

    mango1.style.animationPlayState = "running";
    mango2.style.animationPlayState = "running";
    mango3.style.animationPlayState = "running";
    mango4.style.animationPlayState = "running";
    mango5.style.animationPlayState = "running";
    mango6.style.animationPlayState = "running";
    mango7.style.animationPlayState = "running";
    mango8.style.animationPlayState = "running";

    // after animation, hide add topping section and show done section
    setTimeout(function () {
        var addToppingSection = document.getElementById("addToppingSection");
        var doneSection = document.getElementById("doneSection");
        addToppingSection.style.display = "none";
        doneSection.style.display = "block";
    }, 3000);
}

function addCoconutJelly(){
    var coconutContainer = document.getElementById("coconutContainer");
    coconutContainer.style.display = "block";

    var coconut1 = document.getElementById("cupCoconut1");
    var coconut2 = document.getElementById("cupCoconut2");
    var coconut3 = document.getElementById("cupCoconut3");
    var coconut4 = document.getElementById("cupCoconut4");
    var coconut5 = document.getElementById("cupCoconut5");
    var coconut6 = document.getElementById("cupCoconut6");
    var coconut7 = document.getElementById("cupCoconut7");
    var coconut8 = document.getElementById("cupCoconut8");

    coconut1.style.animationPlayState = "running";
    coconut2.style.animationPlayState = "running";
    coconut3.style.animationPlayState = "running";
    coconut4.style.animationPlayState = "running";
    coconut5.style.animationPlayState = "running";
    coconut6.style.animationPlayState = "running";
    coconut7.style.animationPlayState = "running";
    coconut8.style.animationPlayState = "running";

    // after animation, hide add topping section and show done section
    setTimeout(function () {
        var addToppingSection = document.getElementById("addToppingSection");
        var doneSection = document.getElementById("doneSection");
        addToppingSection.style.display = "none";
        doneSection.style.display = "block";
    }, 3000);
}

function addRedbean(){
    var redbeanContainer = document.getElementById("redbeanContainer");
    redbeanContainer.style.display = "block";

    var redbean1 = document.getElementById("cupRedbean1");
    var redbean2 = document.getElementById("cupRedbean2");
    var redbean3 = document.getElementById("cupRedbean3");
    var redbean4 = document.getElementById("cupRedbean4");
    var redbean5 = document.getElementById("cupRedbean5");
    var redbean6 = document.getElementById("cupRedbean6");
    var redbean7 = document.getElementById("cupRedbean7");
    var redbean8 = document.getElementById("cupRedbean8");

    redbean1.style.animationPlayState = "running";
    redbean2.style.animationPlayState = "running";
    redbean3.style.animationPlayState = "running";
    redbean4.style.animationPlayState = "running";
    redbean5.style.animationPlayState = "running";
    redbean6.style.animationPlayState = "running";
    redbean7.style.animationPlayState = "running";
    redbean8.style.animationPlayState = "running";

    // after animation, hide add topping section and show done section
    setTimeout(function () {
        var addToppingSection = document.getElementById("addToppingSection");
        var doneSection = document.getElementById("doneSection");
        addToppingSection.style.display = "none";
        doneSection.style.display = "block";
    }, 3000);
}

function addStraw(){
    var straw = document.getElementById("straw");
    straw.style.animationPlayState = "running";

    // after animation, hide done section and show restart section
    setTimeout(function () {
        var strawButton = document.getElementById("strawButton");
        var restartButton = document.getElementById("restartButton");
        strawButton.style.display = "none";
        restartButton.style.display = "block";
        restartButton.style.animationPlayState = "running";
    }, 2000);
}

function restart(){
    window.location.reload();
}