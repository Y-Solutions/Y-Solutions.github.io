
var contact=function(mail,service,desc){
	var title = document.querySelector('#sales *[name="service"]');
	var desc = document.querySelector('#sales *[name="desc"]');
	var body = '<p style="font-size:16px"><b>Type: </b>Contact sales<br><b>Mail: </b>'+mail+'<br><b>Service: </b>'+service+'<br><b>Description: </b>'+desc; 
	send(body,"[locadifferent][Contact]");
}

var opinion=function(mail,title,desc){
	var mail = document.querySelector('#opinion *[name="mail"]');
	var title = document.querySelector('#opinion *[name="title"]');
	var desc = document.querySelector('#opinion *[name="desc"]');
	var body='<p style="font-size:16px"><b>Type: </b>Opinion<br><b>Mail: </b>'+mail+'<br><b>Title: </b>'+title+'<br><b>Description: </b>'+desc;
	send(body,"[locadifferent][Opinion]");
}

var apply=function(){
	var desc = document.querySelector('#apply *[name="desc"]');
	var attach = document.querySelector('#apply *[name="attach"]');
	var body='<p style="font-size:16px"><b>Type: </b>Apply for a job<br><b>Cover letter: </b>'+desc+'<br><b>Attachment: </b><a href="'+attach+'">CV</a>';
	send(body,"[locadifferent][Apply]");
}

var download=function(){
	var name = document.querySelector('#pricelist *[name="name"]');
	var mail = document.querySelector('#pricelist *[name="mail"]');
	var comp = document.querySelector('#pricelist *[name="comp"]');
	var title = document.querySelector('#pricelist *[name="title"]');
	var desc = document.querySelector('#pricelist *[name="desc"]');
	var body='<p style="font-size:16px"><b>Type: </b>Download prices list<br><b>Name: </b>'+name+'<br><b>Mail: </b>'+mail+'<br><b>Company Name: </b>'+comp+'<br><b>Job Title: </b>'+title+'<br><b>Description: </b>'+desc;
	send(body,"[locadifferent][Download Prices List]");
}
var send = function(body,subject){
	var data = JSON.stringify({
  "Body": body,
  "Subject": subject,
  "TO": "hassanazzam95@gmail.com"
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