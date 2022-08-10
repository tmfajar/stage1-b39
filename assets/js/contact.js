let emailReceiver = 'tmfajar18@gmail.com';

function submitForm(){

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('pnumber').value;
    let subject = document.getElementById('subject').value;
    let message = document.getElementById('ymessage').value;

    // alert("harap mengisi") 

    if (name == '') {
        return alert('name harap mengisi');
    } else if (email == ''){
        return alert('email harap mengisi');
    } else if (phone == ''){
        return alert('phone harap mengisi');
    } else if (subject == ''){
        return alert('subject harap mengisi');
    } else if (message == ''){
        return alert('message harap mengisi');
    }



    const a = document.createElement('a');
    a.href = `mailto:${emailReceiver}?subject=${subject}&body=Hello my name is ${name},i'm from${subject}, ${message}, this is my phone number ${phone}`;
    a.click();

    let dataObject = {
        name: name,
        email: email,
        phoneNumber: phone,
        subject: subject,
        message: message,
      };
      console.log(dataObject);
} 