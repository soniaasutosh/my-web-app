

function clickHello(event) {
	event.preventDefault();
	//const data = manual()
	const data = autoGenerate();
	
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

