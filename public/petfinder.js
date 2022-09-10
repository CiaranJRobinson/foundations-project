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
                'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJpZGdlN0hoOFNrN0xVMVltMHBhU2dVM1FnYUlhcGVqNU8zNE5SOFpCUVNTdTNCTGtxViIsImp0aSI6IjVkZTExYzYwZjMwOWJmNmRiMDYxYzEzYTMxMGVkNWUzMWU5YTQ0NTBjZGY3YTU2YThjYjNiYTk3ODEyMDJmZGE1ZDNmZjNmOGVlNjI3MGJjIiwiaWF0IjoxNjYyODI3NjU0LCJuYmYiOjE2NjI4Mjc2NTQsImV4cCI6MTY2MjgzMTI1NCwic3ViIjoiIiwic2NvcGVzIjpbXX0.B1IsHL69WrRl-oET4js73SDUChAHscYN7NMCDSpebEvuuSNYPEX0p2msY8xUFf_fdzZwRHnE4z5W_7YYTMtASXlECimgq39-_Un8dMZcqcEmITSnd08WwOGydDT18u5a97jXlOZ7p5RHPt7qWhb1NLNxbzlcJ1nPiBAjGi1EPz6GBCSEsBDh6DOtKrywYYnnAt3RDYzIssl0G-I7jSRO8cjIaadBGahRJSp5fsaYR5k_D_Ob-ZN1qoOMCtZpP1_U-oCqBvR1P7HRByr0TXI5x6pyEp1H0sxuNsoozrUEdOvn_KXaMw7H_z38ROgxP1lkWHV6jvgs_CRgM5Hr3lrWyw'
            }
        })
        .then(res => {
            console.log(res.data)
                showPets(res)
});}

