const dogsContainer = document.getElementById('dogcards-container');

const doggoCallback = ({ data: dogobj }) => displayDogs(dogobj);

const getTheDogList = () => axios.get('http://localhost:4004/api/showall').then(doggoCallback);


function showDog(dog) {
    const dogCard = document.createElement('div')
    dogCard.classList.add('dog-card')

    dogCard.innerHTML = `<img alt="dogpic" src=${dog.imageURL} class="dogpic"/>
    <p class="dogname"><b>${dog.name}</b></p>
    <p class="doginfo">${dog.info}</p>
    `
    dogsContainer.appendChild(dogCard)
};

function displayDogs(arr) {
    dogsContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        showDog(arr[i])
    }
}

getTheDogList();
