function counter() {
		let noc =document.getElementById('input_text').value
		document.getElementById('displaycount').innerHTML =  noc.length + " Characters "+  noc.trim().split(/\s+/).length + " Words";
		document.getElementById('displayspecial').innerHTML = "Special Character "+ (noc.match(/[^a-zA-Z ]+//g) || []).length;

	}
