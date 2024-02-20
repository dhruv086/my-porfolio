const firebaseConfig = {
  apiKey: "AIzaSyDdm2uAizdXLwq-MfYd5DyXiHK_aD9Z_dw",
  authDomain: "portfolio-a595a.firebaseapp.com",
  databaseURL: "https://portfolio-a595a-default-rtdb.firebaseio.com",
  projectId: "portfolio-a595a",
  storageBucket: "portfolio-a595a.appspot.com",
  messagingSenderId: "151809493976",
  appId: "1:151809493976:web:2d4d1626555d78205d80ad"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();
  var userName = document.getElementById('fname').value;
  var fname = getElementVal("fname");
  var lname = getElementVal("lname");
  var mail = getElementVal("mail");
  var phonenumber = getElementVal("phonenumber");
  var typmessage = getElementVal("typmessage");

  saveMessages(fname,lname, mail,phonenumber, typmessage);

  //   enable alert
  output.innerHTML = "<p>" + userName +  "	&apos;s your detail are submitted" +"</p>";

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (fname,lname, mail,phonenumber, typmessage) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    fame: fname,
    lame: lname,
    mail: mail,
    phonenumber:phonenumber,
    typmessage:typmessage,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};