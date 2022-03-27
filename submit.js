// submit button take data

function submitButton() {
  let name = document.getElementById("input-name").value;
  let email = document.getElementById("input-email").value;
  let phone = document.getElementById("input-phone").value;
  let subject = document.getElementById("input-subject").value;
  let message = document.getElementById("input-message").value;

  console.log(name);
  console.log(email);
  console.log(phone);
  console.log(subject);
  console.log(message);

  if (name == "") {
    return alert("Nama harus di isi !");
  } else if (email == "") {
    return alert("E-mail harus di isi !");
  } else if (phone == "") {
    return alert("Nomor HP harus di isi !");
  } else if (subject == "") {
    return alert("Subject harus di pilih !");
  } else if (message == "") {
    return alert("Message harus di isi !");
  }

  let emailRecaiver = "syamteuku4@gmail.com";

  let a = document.createElement("a");

  a.href = `mailto:${emailRecaiver}?subject=${subject}&body=Hallo my name ${name} ${message} please call me ${phone}`;

  a.click();

  let dataObject = {
    nama: name,
    email: email,
    nomorHp: phone,
    subject: subject,
    message: message,
  };

  console.log(dataObject);
  window.location.reload();
}
