let state = {
    dog: 1,
    acc: 0,
    toy: 0,
    background: 1,
    };
    
    nextdog();
    nextacc();
    nexttoy();
    nextbackground();


function nextbackground() {
    let background = document.querySelector("#background");
    if (state.background < 4) {
        state.background++;
        background.setAttribute("class", `background${state.background}`);
    } else if (state.background === 4) {
        state.background = 0;
        background.setAttribute("class", `background${state.background}`);
    }
}
function nexttoy() {
    let toy = document.querySelector("#toy");
    if (state.toy < 3) {
        state.toy++;
        toy.setAttribute("class", `toy${state.toy}`);
    } else if (state.toy === 3) {
        state.toy = 0;
        toy.setAttribute("class", `toy${state.toy}`);
    }
}
function nextacc() {
    let acc = document.querySelector("#acc");
    if (state.acc < 6) {
        state.acc++;
        acc.setAttribute("class", `acc${state.acc}`);
    } else if (state.acc === 6) {
        state.acc = 0;
        acc.setAttribute("class", `acc${state.acc}`);
    }
    }

function nextdog() {
    let dog = document.querySelector("#dog");
    if (state.dog < 4) {
        state.dog++;
        dog.setAttribute("class", `dog${state.dog}`);
    } else if (state.dog === 4) {
        state.dog = 1;
        dog.setAttribute("class", `dog${state.dog}`);
    }
    }