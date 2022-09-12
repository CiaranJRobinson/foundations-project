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
                'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJpZGdlN0hoOFNrN0xVMVltMHBhU2dVM1FnYUlhcGVqNU8zNE5SOFpCUVNTdTNCTGtxViIsImp0aSI6IjQ4NWFmOTE1ZDdjMjk1Mzk0Y2U4M2UyYjExMDg0OTExYjA3ZmMzODJmMmI0NmJmZWE5OGM1MDZhZTRiMzhiNDFkMjRjODljOWUyNzk1NGUwIiwiaWF0IjoxNjYzMDE3OTQ4LCJuYmYiOjE2NjMwMTc5NDgsImV4cCI6MTY2MzAyMTU0OCwic3ViIjoiIiwic2NvcGVzIjpbXX0.F31htllUr31b_dGNYTrlX26nR0k8HL0nmzh4eHFR5pluFMEOc05Px4jtLr5t82-H4DHC6DlW9_aqd4WLeeuzb384rwR-Gf5ndKvhoBeLgzig3jTCWntXkG9ZZaSH7f0UeepGsQgByP6rTSTvRiyFoAq7A-l0KZhszCeXaI2MMjLE7i6ASg5RtL-SncCIe3DNC2Tk3ZehFcxoajUIS985nHVKm-H5fcLFe5E_16cITXk5LDuKQ_R6a5rBf1_2hCgS72N0uOnaHnR0YPapxDuVYaayBnfvr2ZWC_cGYpWhIsVraSUdHWvTzxbqh5mJO2D8dmSsicA7iUna8YuQcgC6Jw'
            }
        })
        .then(res => {
            console.log(res.data)
                showPets(res)
});}

