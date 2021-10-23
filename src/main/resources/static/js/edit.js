
function getStudent(){
	var studentId=window.location.hash.substring(1);
	
	console.log(studentId);
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = (state)=>{
		if (xhttp.readyState == 4 && xhttp.status == 200){
			//console.log("done!!!!!!!!!!!",xhttp.responseText)  
			var data =JSON.parse(xhttp.responseText);
			console.log("data",data)
			showData(data)
		}
	};
	xhttp.open("GET", "/student-form/"+studentId, true,);
	xhttp.send();
}

function showData(data){
	
	
	const arr = [...document.getElementsByTagName('input'),...document.getElementsByTagName('select')];

	arr.forEach(el=>{
		if(el.type=='radio' && data[el.name]==el.id){
			el.checked=true;
		}else if(el.type !='radio'){
			el.value=data[el.name];
		}
	})
}



function clickHello(event) {
	event.preventDefault();
	//const data = manual()
	const data = autoGenerate();
	
	var xhttp = new XMLHttpRequest();
	
	xhttp.onreadystatechange = ()=>{
		if (xhttp.readyState == 4 && xhttp.status == 200){
			console.log("done!!!!!!!!!!!")  
			window.location.hash=''
			window.location.pathname="/records.html"
		}
	};
	var id = document.getElementById('id').value;
	xhttp.open("PUT", "/student-form/"+id, true,);
	xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	xhttp.send(JSON.stringify(data));

	console.log(data)
}

function autoGenerate(){
	var data={}
	
	const arr = [...document.getElementsByTagName('input'),...document.getElementsByTagName('select')];

	arr.forEach(el=>{
		if(el.type=='radio' && el.checked){
			data[el.name]=el.id
		}else if(el.type !='radio'){
			data[el.name]=el.value;
		}
	})


	return data;
}

function manual() {
	var data = {
		fullName: '',
		emailId: '',
		phoneNumber: '',
		studentId: '',
		dob: '',
		entryYear: ''
	}

	// var keys = Object.keys(data);
	// for (var i = 0; i < keys.length; i++) {
	// 	var k = keys[i];
	// 	data[k] = document.getElementById(k).value;
	// }

	Object.keys(data).forEach(k => data[k] = document.getElementById(k).value);

	data['gender'] = document.getElementById('male').checked ? 'Male' : 'Female';

	return data;
}

