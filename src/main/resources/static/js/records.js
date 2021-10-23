function getRecords(event) {
	event.preventDefault();
	
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = (state)=>{
		if (xhttp.readyState == 4 && xhttp.status == 200){
			//console.log("done!!!!!!!!!!!",xhttp.responseText)  
			showData(JSON.parse(xhttp.responseText))
		}
	};
	xhttp.open("GET", "/student-form", true,);
	xhttp.send();

}

function showData(data){
	console.log("Records :: ",data)
	
	var tableBody = document.getElementById('studentTableBody');
	data.forEach(d=>{
		var row=` 
				<tr>
		      <th scope="row">${d.studentId}</th>
		      <td>${d.fullName}</td>
		      <td>${d.gender}</td>
		      <td>${d.dob}</td>
		      </tr>
		   `
			
	
			tableBody.innerHTML= tableBody.innerHTML + row;
	  
	  
	})
	
	
}
