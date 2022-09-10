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
                'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJpZGdlN0hoOFNrN0xVMVltMHBhU2dVM1FnYUlhcGVqNU8zNE5SOFpCUVNTdTNCTGtxViIsImp0aSI6IjZiODc4MmMxNmI3NjUwMjE0OTM0YTdlMGJmNDkyZGEzZDdiMGIzYmFlMGM4ZmUwYjA3OWE5ZGM4NTI4MWM0Y2FlOGEwOGZkNWRiYzg3MzIyIiwiaWF0IjoxNjYyODA4NTg0LCJuYmYiOjE2NjI4MDg1ODQsImV4cCI6MTY2MjgxMjE4NCwic3ViIjoiIiwic2NvcGVzIjpbXX0.H1ybX8Tl-oFmx1sD7kh0C9fyAqxsyYHrOmLYERw9-LebFcOkFiJxh4wf_NLOfAAYi4u13vYd84-JPrvV7j6cLl8ppVq8Qei6967__NSgFouqCuIFcnmGtUl_vDnG_hdzgBlrMGODME4Q-uHRrZI4rqIKQbC2bgh4fetXOUPD40yRs0f1rARDOVb-qwy0Tkm20pYx0OLM8NOO1bJrPxIvGcJyl03qdUcX-XUQ2T_sJrSEzZ0EyVVxTsEaWnkEfn4D-VJlcsQbFSI-VX5U4gdrYfcE5xWRmesyI_jlWEZdDW4y27KM9qwVWMO1XOvPdzaXIURPFNMfMmMPJ_KSYk3JEw'
            }
        })
        .then(res => {
            console.log(res.data)
                showPets(res)
});}

