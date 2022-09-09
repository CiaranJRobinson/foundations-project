const apiKey = 'idge7Hh8Sk7LU1Ym0paSgU3QgaIapej5O34NR8ZBQSSu3BLkqV';
const apiSecr = 'N2Epm32XlytKdIwPx6Xwo64I0RLgD56x7ShGt6x0';
const apiToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJpZGdlN0hoOFNrN0xVMVltMHBhU2dVM1FnYUlhcGVqNU8zNE5SOFpCUVNTdTNCTGtxViIsImp0aSI6IjY5YjU0YzQ5ZWQxODk0YmRhYzg4ODJhNTA5M2M3ODc0ODE4MGI4NTI5YWE3MWY2YzRhYWEwNmIxOWFkYTUxZjVmMjYzMTIxMDMyM2UyZDNjIiwiaWF0IjoxNjYyNzI0OTI0LCJuYmYiOjE2NjI3MjQ5MjQsImV4cCI6MTY2MjcyODUyNCwic3ViIjoiIiwic2NvcGVzIjpbXX0.Llu4v9Es6fR1Lc2HWOBdc6jJtUANIqfihXRsegy8S7PYCzj1O4M7JNmqVELwlKPAQRn6lxtfSjtUDwOj8EExsT-92BdTUEtwSaDy-3zn3HecKIHrOBj8myrNHowDEIe-yF-OpUObTw4-hEFVw7afn83p04Z_zzpq5CaV6PteZoozFrPKPwJNM0gxltE0i1k7Mq4aR3na6z8IhgZFLkAE-OlMDGeW0BKhYAYDcgnCn5AjRbi7KB6Q5AygmJU9I8VJ5gBjM6kKfidy1Q6pVXgr9MAhuqsNzqZO8tb5aF5WzUWlu9Y31CwRyrAJGg6frrIAY91sZOtx72jEejbRbAeacw';

document.addEventListener('DOMContentLoaded', bindButtons);

function bindButtons(){
	document.getElementById('submitZip').addEventListener('click', function(event){
		event.preventDefault();
		var zip = document.getElementById('zip').value; 
		var url = 'http://api.petfinder.com/pet.getRandom';

        $.ajax({
			url: url,
			jsonp: "callback",
			dataType: "jsonp",
			data: {
				key: apiKey,
				animal: 'dog',
				'location': zip,
				output: 'basic',
				format: 'json'
			},
			
			success: function( response ) {
				console.log(response); 
				var dogName = response.petfinder.pet.name.$t;
				var img = response.petfinder.pet.media.photos.photo[0].$t;
				var id = response.petfinder.pet.id.$t;

				var newName = document.createElement('a');
				var newDiv = document.createElement('div');
				newName.textContent = dogName;
				newName.href = 'https://www.petfinder.com/petdetail/' + id;

				var newImg = document.createElement('img');
				newImg.src = img;
				
				var list = document.createElement("div");
				list.setAttribute("id", "List");
				document.body.appendChild(list);

				newDiv.appendChild(newName);
				list.appendChild(newDiv);
				list.appendChild(newImg);
			}
		});
		})

}

