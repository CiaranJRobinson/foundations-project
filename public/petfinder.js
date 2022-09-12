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
                'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJpZGdlN0hoOFNrN0xVMVltMHBhU2dVM1FnYUlhcGVqNU8zNE5SOFpCUVNTdTNCTGtxViIsImp0aSI6IjJmNDg2NDA2NDdjNDIxNWQzYzM5MjQ4OWEwMzNmMzMzZjk0NDhkYWYxZWIzNWFlZTcxMDRkZjZkNDkyNmI2ZTc0MDEzOTQ0M2JiMGMzZDgyIiwiaWF0IjoxNjYyOTk5MzEwLCJuYmYiOjE2NjI5OTkzMTAsImV4cCI6MTY2MzAwMjkxMCwic3ViIjoiIiwic2NvcGVzIjpbXX0.MNwujajqKcmUITAlYm40b1R5F0sQ_m5-U3Zr0bSy7avYFjwx_rhxtY3RDS-qD6a3C6TIazv0I0uVfu9iYcFCUdbucqpC3CVr8fUOqX0u1e5Aq5hRcoLiSsaeQxiq22Q--qcO_m3oJeHWspFbIDIAup3CPIcEvx8zH5FSqxzsU9mv4bKnoK2XiZ5ikTXQCizL9NENzoW_Cj8bkQuK6xF-e3Y3oLcBhLtpLwwoQ94sqt4pgs_H2JvMmjk2uMnSvASxCCJ8h2tsnFTVcD787LiZn5-xXigjJQrO7tDGHbY1qS-iJXZW_KcH6l_5Q3BQ2aCDwmilq9m4ik_xAtMo8gan0g'
            }
        })
        .then(res => {
            console.log(res.data)
                showPets(res)
});}

