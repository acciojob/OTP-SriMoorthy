//your JS code here. If required.
const inputs=document.querySelector(".code-container")

inputs.addEventListener("code" , function (e){
	const target = e.target;
	const val = target.value;
	if(isNaN(val)){
		target.value = "";
		return;
	}
	if(val != ""){
		const nextInput = target.nextElementSibling;
		if(nextInput){
			nextInput.focus();
		}
	}
});

inputs.addEventlistener('keyup', function (e) {
	const target = e.target;
	const key = e.key.toLowerCase();

	if(key == 'backspace'|| key=='delete'){
		target.value = "";
		const prevInput = target.previousElementSubling;
		if(prevInput){
			prevInput.focus();
		}
		return;
	}
});
