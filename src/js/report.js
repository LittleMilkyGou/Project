var submit_btn = document.getElementById("submit_btn");
	//when click submit
submit_btn.addEventListener("click",function(){
    //read the inputs
	var user_name = document.getElementById("name").value;
	var user_password = document.getElementById("message").value;
    //when both boxes are empty
	if(user_name.length == 0 && user_password.length == 0){
		alert("You have not write anything!");
	}
    //when name box is empty
	else if(user_name.length == 0){
		alert("Please leave your name!");
	}
    //When message box is empty
	else if(user_password.length == 0){
		alert("Please leave your message!");
	}
	//Successfully submit the message
	else{
		
		alert("Successful submission!");
		
		setTimeout(function(){
			window.location.href = "index.html";
		},600);  //After 0.6s jump to home page
	}
})
