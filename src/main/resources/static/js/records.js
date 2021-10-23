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
		      <td>
		      <a href="/edit.html#${d.studentId}">edit</a> 
		      	 <a href="#" onclick="showDeleteConfirmation(${d.id},${d.studentId})" style="color:red">delete</a> 
		      </td>
		     
		      </tr>
		   `
			
	
			tableBody.innerHTML= tableBody.innerHTML + row;
	  
	  
	})
	
}

function showDeleteConfirmation(id,studentId){
	console.log(id,studentId)
	document.getElementById("id").value=id;
	document.getElementById("studentId").innerText=studentId;
	
	var myModal = new bootstrap.Modal(document.getElementById('deleteConfirmation'), { keyboard: false })
		
    myModal.show();
	
}

function deleteStudent(){
	var id = document.getElementById("id").value;
	console.log("id",id)
	
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = (state)=>{
		if (xhttp.readyState == 4 && xhttp.status == 200){
			console.log("done!!!!!!!!!!!",xhttp.responseText)  
			setTimeout(() => {
				window.location.reload();
			}, 1000);
		}
	};
	xhttp.open("DELETE", "/student-form/"+id, true,);
	xhttp.send();
}
