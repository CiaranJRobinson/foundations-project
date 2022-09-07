const submit = document.getElementById('submit');
const thename = document.getElementById('name');



// q1answer.addEventListener('click', check());
// q2answer.addEventListener('click', check());



// function getResults() {
//     axios.get('http://localhost:4004/inputs')
//         .then(res => {
//             alert(res.data)
//         })
// };

function submitBtn (e) {
    e.preventDefault();
    
    if (thename.value < 1 ) {
        alert ('You must enter your name')
        return
    }

    const q1answer = document.querySelector('input[name="q1"]:checked').value;
    console.log(q1answer);

    const q2answer = document.querySelector('input[name="q2"]:checked').value;
    console.log(q2answer);


    const body = {
        name : thename.value,
        questionone : q1answer,
        questiontwo : q2answer
    };
    console.log(`this is the body ${body.name} ${body.questionone} ${body.questiontwo}`);
    axios.post("http://localhost:4004/api/inputs", body)
        .then(res => {
                console.log(res.data)
                alert("Got your entry")})
        .catch(err => console.log(err));
    };

submit.addEventListener('click', submitBtn);
