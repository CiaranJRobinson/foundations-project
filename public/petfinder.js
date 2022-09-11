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
                'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJpZGdlN0hoOFNrN0xVMVltMHBhU2dVM1FnYUlhcGVqNU8zNE5SOFpCUVNTdTNCTGtxViIsImp0aSI6ImI1NTkyNjFiYjE2ZTMxZjUzZjBhODY3N2FmY2IxNGQxNjQzNWRlNDc0NGVkODAxZmMwYTE5YWZjMWE4ZDRlYjJiOTk1MmZiODA4NjYyODZhIiwiaWF0IjoxNjYyOTI3Mzk2LCJuYmYiOjE2NjI5MjczOTYsImV4cCI6MTY2MjkzMDk5Niwic3ViIjoiIiwic2NvcGVzIjpbXX0.u6XQE6D03EtmXvQ9daHIzRHMKk0d3w4h65eNNlSg9Xg_Vpg0lABfXsg2GdY3DTUjup6_txjXNrlNaE38oamf-zz_nk66_84tmryOYmlkrKzVEIj_HF72tqjx9vGhrY8gROoyVPGdUpsa42kiPtpS8kAQR8nXiNSBZG41NJ8gv2_b3lI0fUUtzwWX2tdt2AMqrVJVyS9JoPfAyzoE9HeWSJhATqNpDbTNbwPzYPbwToyuUWKWSzHJy1anFbNZdsJLSeY7vzL1o9Xo4WmWNn4qJc5qOCl1u7Esx9x2dLY-Woltk5fPHW0Lm1sINEiMqCsTu_1lMvkxpXljjTE8uM4eCA'
            }
        })
        .then(res => {
            console.log(res.data)
                showPets(res)
});}

