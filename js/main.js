let emailImages = new Array();

function validateForm(ev) {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
    if (email.value.match(validRegex)) {
        ev.preventDefault();
        alert("Email successfully assigned to image!");

        let emailImage = {
            email: document.getElementById('email').value,
            image: document.getElementById('image').src
        }
    
        emailImages.push(emailImage);
        document.forms[0].reset();
        localStorage.setItem('EmailImageList', JSON.stringify(emailImages));
    
        let output = document.querySelector('.output');
        let emailOutput = document.createElement('p');
        let imgOutput = document.createElement('img');
        output.appendChild(emailOutput);
        output.appendChild(imgOutput);
        imgOutput.src = emailImage.image;
        emailOutput.innerHTML = emailImage.email;
        console.log(emailImages);

        return false;
    }  else {
        ev.preventDefault();
        alert("No valid email address detected");
        return false;
    }
}

async function load_pic() {
    const url = 'https://picsum.photos/300/400';

    const options = {
        method: "GET"
    }

    let response = await fetch(url, options)

    if (response.status === 200) {

        const imageBlob = await response.blob()
        const imageObjectURL = URL.createObjectURL(imageBlob);

        const image = document.getElementById('image')
        image.src = imageObjectURL

        const container = document.getElementById('img-container')
        container.append(image)
    }
    else {
        console.log("HTTP-Error: " + response.status)
    }
}

document.addEventListener('DOMContentLoaded', () =>{
    document.getElementById('submit').addEventListener('click', validateForm);
});