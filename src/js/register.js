


var register_btn = document.getElementById("register");
	//when click register
register_btn.addEventListener("click",function(){
	var user_name = document.getElementById("reg_name").value;
	var user_password = document.getElementById("reg_password").value;
	//if both boxes are empty
	if(user_name.length == 0 && user_password.length == 0){
		alert("Username and Password are empty!");
	}
	//if username is empty
	else if(user_name.length == 0){
		alert("Please enter a username!");
	}
	//if password is empty
	else if(user_password.length == 0){
		alert("Please enter a password!");
	}
	//information stored in database
	else{
		$.ajax({
			method: "post",
			url : "./php/register.php",
			data : {
				username : user_name,
				password : user_password,
			},
			success : function(result){
				var res = JSON.parse(result);
				if (res.code==0){
					alert("fail to connect database");
				} else if (res.code==1) {
					alert("username exists");	
				} else {
					confirm("sign up success");
				}
						
			},
			error : function(msg){
				console.log(msg);
			}
		})


	};


})
