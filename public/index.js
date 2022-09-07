const submit = document.getElementById('submit');
const thename = document.getElementById('name');




function submitBtn (e) {
    e.preventDefault();
    
    if (thename.value < 1 ) {
        alert ('You must enter your name')
        return
    }

    const q1answer = document.querySelector('input[name="q1"]:checked').value;

    const q2answer = document.querySelector('input[name="q2"]:checked').value;

    const q3answer = document.querySelector('input[name="q3"]:checked').value;

    const q4answer = document.querySelector('input[name="q4"]:checked').value;

    const q5answer = document.querySelector('input[name="q5"]:checked').value;

    const q6answer = document.querySelector('input[name="q6"]:checked').value;

    const q7answer = document.querySelector('input[name="q7"]:checked').value;


    const body = {
        name : thename.value,
        questionone : q1answer,
        questiontwo : q2answer,
        questionthree : q3answer,
        questionfour : q4answer,
        questionfive : q5answer,
        questionsix : q6answer,
        questionseven : q7answer
    };
    axios.post("http://localhost:4004/api/inputs", body)
        .then(response => {
                console.log(response.data)
                    alert("Got your entry")
                axios.get("http://localhost:4004/api/inputs")
                    .then(res => {
                        console.log(res.data)
                                        })
            })
        .catch(err => console.log(err));

    };

submit.addEventListener('click', submitBtn);