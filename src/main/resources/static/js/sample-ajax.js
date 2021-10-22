function clickHello() {
	// alert("Hello !!! " + document.getElementById('fullName').value);

	var name= document.getElementById('fullName').value;
	
	var xhttp = new XMLHttpRequest();
	
	xhttp.onreadystatechange = onStateChange;
	
	xhttp.open("GET", "/hello?name="+name+"&extra=!!", true);
	
	xhttp.send();
}


function onStateChange(){
	console.log(this);
	if (this.readyState == 4 && this.status == 200) {
		//alert(this.responseText);
		
		document.getElementById('reponseText').innerText=this.responseText;
		
		var myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
		  keyboard: false
		})
		
		myModal.show();
	}
	
}