
var contact=function(){
	var mail = document.querySelector('#sales *[name="mail"]').value;
	var service = document.querySelector('#sales *[name="service"]').value;
	var desc = document.querySelector('#sales *[name="desc"]').value;
	var body = '<p style="font-size:16px"><b>Type: </b>Contact sales<br><b>Mail: </b>'+mail+'<br><b>Service: </b>'+service+'<br><b>Description: </b>'+desc; 
	var button = document.querySelector('#sales button[type="submit"]');
	send(body,"[locadifferent][Contact]");
	button.parentNode.parentNode.classList.remove('pop');	
	//window.location.replace(window.location.hostname);
	//window.location = window.location.href;
	//window.location.reload();
	$.notify("Your contact details has been added", "success");
	document.querySelector("#sales .language").reset();	
}

var opinion=function(){
	var mail = document.querySelector('#opinion *[name="mail"]').value;
	var title = document.querySelector('#opinion *[name="title"]').value;
	var desc = document.querySelector('#opinion *[name="desc"]').value;
	var body='<p style="font-size:16px"><b>Type: </b>Opinion<br><b>Mail: </b>'+mail+'<br><b>Title: </b>'+title+'<br><b>Description: </b>'+desc;
	var button = document.querySelector('#opinion button[type="submit"]');
	send(body,"[locadifferent][Opinion]");
	button.parentNode.parentNode.classList.remove('pop');
	$.notify("Your opinion has been provided", "success");
	document.querySelector("#opinion .language").reset();
}

var apply=function(){
	var desc = document.querySelector('#apply *[name="desc"]').value;
	var attach = document.querySelector('#apply *[name="attach"]').value;
	var body='<p style="font-size:16px"><b>Type: </b>Apply for a job<br><b>Cover letter: </b>'+desc+'<br><b>Attachment: </b><a href="'+attach+'">CV</a>';
	var button = document.querySelector('#apply button[type="submit"]');
	send(body,"[locadifferent][Apply]");
	button.parentNode.parentNode.classList.remove('pop');
	$.notify("You have applied successfully", "success");
	document.querySelector("#apply .language").reset();
}

var download=function(){
	var name = document.querySelector('#pricelist *[name="name"]').value;
	var mail = document.querySelector('#pricelist *[name="mail"]').value;
	var comp = document.querySelector('#pricelist *[name="comp"]').value;
	var title = document.querySelector('#pricelist *[name="title"]').value;
	var desc = document.querySelector('#pricelist *[name="desc"]').value;
	var body='<p style="font-size:16px"><b>Type: </b>Download prices list<br><b>Name: </b>'+name+'<br><b>Mail: </b>'+mail+'<br><b>Company Name: </b>'+comp+'<br><b>Job Title: </b>'+title+'<br><b>Description: </b>'+desc;
	var button = document.querySelector('#pricelist button[type="submit"]');
	send(body,"[locadifferent][Download Prices List]");
	button.parentNode.parentNode.classList.remove('pop');
	$.notify("Prices list hass been sent to you", "success");
	document.querySelector("#pricelist .language").reset();
}
var send = function(body,subject){
	var data = JSON.stringify({
  "Body": body,
  "Subject": subject,
  "TO": "amr.azzam@locadifferent.com"
});

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "http://yakensolution.cloudapp.net/SendEmail/Api/SendMail/SendMail");
xhr.setRequestHeader("content-type", "application/json");

xhr.send(data);
}
