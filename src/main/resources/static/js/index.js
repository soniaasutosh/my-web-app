

function clickHello(event) {
	event.preventDefault();
	var data={
			fullName:'',
			emailId:'',
			phoneNumber:'',
			studentId:'',
			dob:'',
			entryYear:''
	}
	
	Object.keys(data).forEach(k=>{
		data[k]=document.getElementById(k).value;
	})
	
	data['gender']=document.getElementById('male').checked ? 'Male' : 'Female'
	
	console.log(data)
}

