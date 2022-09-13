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
                'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJpZGdlN0hoOFNrN0xVMVltMHBhU2dVM1FnYUlhcGVqNU8zNE5SOFpCUVNTdTNCTGtxViIsImp0aSI6IjE2ZDE3YWFkOTVkM2ZiM2E0OThmNzIwZjY2Nzk3MWY4ZTMwYjhjZWRkN2Y0M2U5ZWY3YzVjNWIxYWU0MGU5OTViZmU0MmJlNjI4ZjVhZGY4IiwiaWF0IjoxNjYzMDgyMjMwLCJuYmYiOjE2NjMwODIyMzAsImV4cCI6MTY2MzA4NTgzMCwic3ViIjoiIiwic2NvcGVzIjpbXX0.cyCE6usjYaZIoUlJHTS2l7bo7INDgWo-c2YGgD4ooecXIKBgMFhPD4NcRdiANvHbjFm27qkwLgklkETnCnNIZZwcg53t_rXnmrxqkfLqBSerZCrtmO26Vra1eLjAsxQ4dlPgEbNhZJUy5-FARExRUgpXdB0EaYrRxHOnbkIe2AMMwB8LC2SN7wQmI7t4NX0CtVIXfZ7hb7cyIzqyJ3THYzhTQ_ETepwxdz3miXdZAMAUndWetRfoqt5AU0YQT9x0P6WdF2GZ_r8RDMamR7-4NC3Dyv5P8l3zMYlr4-H39kxRLSux_n9Yv0NHYMPPfk_vc7zGyIXbKn8RblLf9Qi4pA'
            }
        })
        .then(res => {
            console.log(res.data)
                showPets(res)
});}

