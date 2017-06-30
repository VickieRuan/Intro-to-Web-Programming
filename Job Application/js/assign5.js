function validatePhone(){
 

	var pass = true;
	
	var loadPhone = document.querySelector("#phone").value;
    var phone = loadPhone.trim();
 
    var passCorrectPattern = /^\d{3}-\d{3}-\d{4}$/.exec(phone);
    var passAreaZero = /^[0]{3}-\d{3}-\d{4}$/.exec(phone);
    var passPhoneZero = /^\d{3}-[0]{3}-[0]{4}$/.exec(phone)
    document.querySelector("#phoneMsg").innerHTML = "";
    
     
    if(phone.length == 0){
    	document.querySelector("#phoneMsg").innerHTML = "please enter your phone number";
    	pass=false;
    }else if(passAreaZero){
        document.querySelector("#phoneMsg").innerHTML = "area code cannot be all 0";
        pass=false;
    }else if(passPhoneZero){
    	document.querySelector("#phoneMsg").innerHTML = "phone number cannot be all 0";
    	pass=false;
    }else if(!passCorrectPattern){
    	document.querySelector("#phoneMsg").innerHTML = "must be in format 999-999-9999";
    	pass=false;
    }
    return pass;
}
  

/*validate passwork and display promt messages*/
function validatePW(){


    var loadPW = document.querySelector("#pw").value;
    var PW = loadPW.trim();
    document.querySelector("#pwMsg").innerHTML = "";
    var pass = true;
    if(PW.length == 0){
        document.querySelector("#pwMsg").innerHTML = "cannot be empty";
        pass=false;
    }else if(PW.length < 8){
    	document.querySelector("#pwMsg").innerHTML = "must be at least 8 characters";
    	pass=false;
    }else if(!passNumber(PW)){
        document.querySelector("#pwMsg").innerHTML = "must contain at least one number";
        pass=false;

    }else if(!(passLower(PW)&&passUpper(PW))){
    	document.querySelector("#pwMsg").innerHTML = "must contain both upper and lower case characters";
    	pass=false;
    }
    return pass;
  
}

function validateRePW(){
	
	var loadPW = document.querySelector("#pw").value;
    var PW = loadPW.trim();

	var loadRePW = document.querySelector("#rePw").value;
	rePW = loadRePW.trim();
	document.querySelector("#rePwMsg").innerHTML = "";
 
    var pass=true;
    
	if(rePW != PW && PW.length!=0){
		document.querySelector("#rePwMsg").innerHTML = "must be identical to your password";
		pass=false;
	}
    return pass;
}
 
function passNumber(str){

	var num = "0123456789";
	var passNum = false;
	for(var i=0; i<str.length; i++){
		if (num.indexOf(str.substr(i,1)) >= 0){
			passNum = true;
	    }
    }
    return passNum;

}
function validateEduStatus(){
 
	
	var oneChecked = false;
	document.querySelector("#eduError").innerHTML = "";

	var radio = document.getElementsByName("educationStatus");
	for(var i = 0; i < radio.length; i++){
		if(radio[i].checked)
			return true
	}

    document.querySelector("#eduError").innerHTML = "must select one";
	return false;
	

}
function validateFname(){
 
	var loadFname = document.querySelector("#fname").value;
	var fName = loadFname.trim();
	document.querySelector("#fnameMsg").innerHTML = "";
    var pass=true;
    if(fName.length == 0){
        document.querySelector("#fnameMsg").innerHTML = "cannot be empty";
        pass=false;
    }
    else if(!passAllowCh(fName)){
    	document.querySelector("#fnameMsg").innerHTML = "can only contain alphabetic characters, apostrophe and hyphen";
    	pass=false;
    }
    else if(!(passLower(fName)||passUpper(fName))){
    	document.querySelector("#fnameMsg").innerHTML = "must have at least 1 alphabetic character";
    	pass=false;
    }
  
    return pass;
}
function validateLname(){
	 
	var loadLname = document.querySelector("#lname").value;
	var lName = loadLname.trim();
	document.querySelector("#lnameMsg").innerHTML = "";
    var pass=true;
    if(lName.length == 0){
        document.querySelector("#lnameMsg").innerHTML = "cannot be empty";
        pass=false;
    }
    else if(!passAllowCh(lName)){
    	document.querySelector("#lnameMsg").innerHTML = "can only contain alphabetic characters, apostrophe and hyphen";
    	pass=false;
    }
    else if(!(passLower(lName)||passUpper(lName))){
    	document.querySelector("#lnameMsg").innerHTML = "must have at least 1 alphabetic character";
    	pass=false;
    }
  
    return pass;

}
function passLower(str){
	var lowerCase = "abcdefghijklmnopqrstuvwxyz";

	 
	var passLower = false;
 
 
	for(var i=0; i<str.length; i++){
		if (lowerCase.indexOf(str.substr(i,1)) >= 0){
			passLower = true;
	    }
    }
    return passLower;
    
}
function passUpper(str){
    
	var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	 
	var passUpper = false;
 
    for(var i = 0; i < str.length; i++){
		if (upperCase.indexOf(str.substr(i,1)) >= 0){
			passUpper = true;
	    }
    }
    return passUpper;
    
}


function passAllowCh(str){
	var allowCH = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-'";
	for(var i = 0; i < str.length; i++){
		if(allowCH.indexOf(str.charAt(i))==-1){
			return false;
		}
	}
	return true;
}


function formValidation(){
 
	return validateFname()&&validateLname()&&validatePhone()&&validatePW()&&validateRePW()&&validateEduStatus();

}
