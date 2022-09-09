const axios = require('axios');

function bindButtons(){
	document.getElementById('submitZip').addEventListener('click', function(event){
		event.preventDefault();
		
        var zip = document.getElementById('zip').value;})
    
        axios.get('https://api.petfinder.com/v2/animals', {
            params: {
                'type': 'dog',
                'location': `${zip}`
                },
            headers: {
                'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ3OHF4T20weENJQ3FoVlNpTjdwazBlYm1kUHlYek9PcDJnZTlDR3FsVXRibUxtc3lBbCIsImp0aSI6IjZkNDA3OTM0NmE2NTQ1ODdiNDQxMmU5MzY1ODA5NzgxZWRmN2ZlMmRiZGY4MGQ0MWZiZWViY2RkODk5MjU3Y2E1YjRkZmQ1ZGYyYTI4MDUyIiwiaWF0IjoxNjYyNzQ0MDQ5LCJuYmYiOjE2NjI3NDQwNDksImV4cCI6MTY2Mjc0NzY0OSwic3ViIjoiIiwic2NvcGVzIjpbXX0.m8H7nnX6PcRdOV0O3yOtztIpgEGLip3RVInjz0Y-J_LjykSgiMdSgxC0g6qNKuhbIYZ3BL9EFXBUkwZSkc2f5Rl6L1p4QVS5UkfAiVBGM257-gIQSvyvMFY5SPAaI_fspTm2FDmVK2xSkKLtl6imtIjaPg40hYxVSCRd3moO0iB0dI16h07pMcGU80oSPMTj2SjBfSB8iX6610kg1t0Cy7_9EymJLHXDPIrmTM6ZELQhaUKNTYC6s-4SxkDTfR2Ee32jtYPwt2Nkilc8TYKztCPMowIgN2_heFIYlbs9iuA8E4CAVfBXsS09bPWjXQiemvQLsYOQHmEhGmtYtRbYow'
            }
        })
        .then(res => {
            console.log(res.data)
                showPets(res.data)})
            };

function showPets(res) { 
            let dogName = res.data.pet.name;
            let img = res.data.pet.media.photos.photo[0];
            var id = res.data.petfinder.pet.id;
        
            let newName = document.createElement('a');
            let newDiv = document.createElement('div');
                newName.textContent = dogName;
            newName.href = 'https://www.petfinder.com/petdetail/' + id;
        
                const newImg = document.createElement('img');
                    newImg.src = img;
                        
                const list = document.createElement("div");

                    list.setAttribute("id", "List");
                        document.body.appendChild(list);
        
                        newDiv.appendChild(newName);
                        list.appendChild(newDiv);
                        list.appendChild(newImg);
};




document.addEventListener('DOMContentLoaded', bindButtons);



