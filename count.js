function counter() {
		let noc =document.getElementById('input_text').value
		document.getElementById('displaycount').innerHTML =  noc.length + " Characters "+  noc.trim().split(/\s+/).length + " Words";
		deocument.getElementById('displayspecial').innerHTML = "Special Character "+ (noc.match(/is/g) || []).length;

	}
