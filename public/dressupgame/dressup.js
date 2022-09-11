let state = {
    // sweater: 0,
    dog: 1,
    acc: 0,
    toy: 0,
    background: 1,
    };
    
    nextdog();
    nextacc();
    nexttoy();
    nextbackground();


// function nextsweater() {
//     let sweater = document.querySelector("#sweater");

//     if (state.sweater < 7) {
//         state.sweater++;
//         sweater.setAttribute("class", `sweater${state.sweater}`);
//     } else if (state.sweater === 7) {
//         state.sweater = 0;
//         sweater.setAttribute("class", `sweater${state.sweater}`);
//     }
//     }

function nextbackground() {
    let background = document.querySelector("#background");
    if (state.background < 2) {
        state.background++;
        background.setAttribute("class", `background${state.background}`);
    } else if (state.background === 2) {
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
    if (state.acc < 4) {
        state.acc++;
        acc.setAttribute("class", `acc${state.acc}`);
    } else if (state.acc === 4) {
        state.acc = 0;
        acc.setAttribute("class", `acc${state.acc}`);
    }
    }

function nextdog() {
    let dog = document.querySelector("#dog");
    if (state.dog < 3) {
        state.dog++;
        dog.setAttribute("class", `dog${state.dog}`);
    } else if (state.dog === 3) {
        state.dog = 1;
        dog.setAttribute("class", `dog${state.dog}`);
    }
    }