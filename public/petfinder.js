const submitZip = document.getElementById('submitZip')


submitZip.addEventListener('click', petslocate)

function showPets(res) { 
            console.log("showpets activated", res.data.animals);
            const animalArr = res.data.animals;
            console.log ("here is the animal arr", animalArr)
            const newArr = []
                for (let i=0; i<animalArr.length; i++){
                    if (animalArr[i].photos.length != 0){
                        newArr.push(animalArr[i])
                    }
                }
                console.log("This is the new array", newArr);
                
                for (let i=0; i<newArr.length; i++){ 
                let { name, description, age, gender, url } = newArr[i]
            let newName = document.createElement('a');
            let newDiv = document.createElement('div');
            let newDescr = document.createElement('p');
            let newGen = document.createElement('p');
            let newAge = document.createElement('p');
                newName.textContent = name;
                newGen.textContent = gender;
                newAge.textContent = age;

                newName.href = `${url}`;
                newDescr.textContent = description
                const newImg = document.createElement('img');
                    newImg.src = newArr[i].photos[0].medium;
                        
                const list = document.createElement("span");
                const dogresults = document.getElementById("dogresults");
                    list.setAttribute("id", "DogList");
                    list.setAttribute("class", "Dogcard");
                        document.body.appendChild(list);

                        list.appendChild(newDiv);
                        list.appendChild(newImg);       
                        newDiv.appendChild(newName);
                        list.appendChild(newGen);
                        list.appendChild(newAge);
                        list.appendChild(newDescr);
                        dogresults.appendChild(list);

};}


function petslocate(event){
		event.preventDefault();
		console.log("Petslocate Function activated")
        const zip = document.getElementById('zip').value;
    
        axios.get('https://api.petfinder.com/v2/animals', {
            params: {
                'type': 'dog',
                'location': zip
                },
            headers: {
                'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJpZGdlN0hoOFNrN0xVMVltMHBhU2dVM1FnYUlhcGVqNU8zNE5SOFpCUVNTdTNCTGtxViIsImp0aSI6ImMxYmJiODM5YmVjMjBhODdlYWUxZWQ3ZjA2NGFiMGI4ZTEwNjQxYzg5MDE2YzZmYjQwM2UwNzQzNzNjYmZkMzg1MDQwNjUzZWRhNDg3ZDdkIiwiaWF0IjoxNjYzMDAzMjI4LCJuYmYiOjE2NjMwMDMyMjgsImV4cCI6MTY2MzAwNjgyOCwic3ViIjoiIiwic2NvcGVzIjpbXX0.vULu4_GwLZuFHE_unoy-sWCQdBQSG0uheAjQ9KpVhX3ifxAdKmd2zdOFnG7SKB2S5Djl92QjgVWKFsuoU_uMsBI8kSttql1JLMigX-TNzalAS56ndwkFOKadRzOSOwA8GHhZaaPINEn51jLd9SZRbfbwMvjYJCifeGDiO55ELhaAIou7alfGC7CK3kjn7SmN41O9xJhFwDyUauFjpg4eSGJmzSmImlumazKSAfIdUOV8cgVB04lFPYVpXiq7aZwU970cXQeerQbGy3iEm643hMoIirYkpjmgwp4oTlJQriVhMTWotBEnxgAyxUomyxu-S-XtumFcjHQeszGc3b2zSA'
            }
        })
        .then(res => {
            console.log(res.data)
                showPets(res)
});}

