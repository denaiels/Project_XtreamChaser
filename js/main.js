$("#dropBtn").click(function(){
    if($("#menuContent").is(":visible")){
        $("#menuContent").css('display', 'none')
    }else{
        $("#menuContent").css('display', 'block')
    }
})
    
$(document).ready(function(){
	$('.next').on('click', function(){
		var currentImg = $('.active');
		var nextImg = currentImg.next();

		if(nextImg.length){
			currentImg.removeClass('active').css('z-index', -10);
			nextImg.addClass('active').css('z-index', 10);
		}
	})

	$('.prev').on('click', function(){
		var currentImg = $('.active');
		var prevImg = currentImg.prev();

		if(prevImg.length){
			currentImg.removeClass('active').css('z-index', -10);
			prevImg.addClass('active').css('z-index', 10);
		}
	})
});

function validateF(){  
    var name=document.preregis.name.value;
	var pass=document.preregis.pass.value;
    var email=document.getElementById("email").value;  
    var gendermale=document.getElementById("male_r").checked;
    var genderfem=document.getElementById("fem_r").checked;
    var cek=document.getElementById("cek_id").checked;
    var nations=document.getElementById("nation").value;

    if(email==null || email==""){
        alert("You must fill your email");
        return false;
    }else if(!email.endsWith(".com") && !email.endsWith(".co.id")){
        alert("Email must end with .com or .co.id");
        return false;
    }else if(!email.includes("@")){
        alert("Email must contain @");
        return false;
    }else if(name==null || name==""){  
        alert("You must fill your username");  
        return false;  
    }else if(pass==null || pass=="" || pass.length<8){
        alert("Password must have 8 characters");
        return false;
    }else if(gendermale==false && genderfem==false){
        alert("You must choose your gender");
        return false;
    }else if(nations==""){
        alert("You must pick your nation");
        return false;
    }else if(cek==false){
        alert("You must agree to user terms");
        return false;
    }else{
        alert("Insert Success");
        return true;
    }
}