let emailImages = new Array();

function validateForm(ev) {
    var validRegex = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
    let emailCheck = document.getElementById('email').value;

    if (email.value.match(validRegex) && !emailImages.includes(emailCheck)) {
        ev.preventDefault();
        alert("Email successfully assigned to image!");

        let email = document.getElementById('email').value;
        let img = document.getElementById('image').src;
        emailImages[emailImages.length]= email;
        emailImages[emailImages.length]= img;
        localStorage.setItem('emailImages', JSON.stringify(emailImages));

        let output = document.querySelector('.output');
        let emailOutput = document.createElement('h2');
        output.appendChild(emailOutput);
        emailOutput.innerHTML = email;
        emailOutput.setAttribute('id', email);

        let imgOutput = document.createElement('img');
        output.appendChild(imgOutput);
        for ( let x = 0; x < emailImages.length; x++) {
            let a = emailImages[x];
            imgOutput.src = a;
        }

        return false;

    } else if (email.value.match(validRegex) && emailImages.includes(emailCheck)) {
        ev.preventDefault();
        alert("Email successfully assigned to image!");

        let email = document.getElementById('email').value;
        let img = document.getElementById('image').src;
        emailImages[emailImages.length]= email;
        emailImages[emailImages.length]= img;
        localStorage.setItem('emailImages', JSON.stringify(emailImages));

        emailMatch = document.getElementById(email);
        let imgOutput = document.createElement('img');
        emailMatch.insertAdjacentElement('afterend', imgOutput);
        for ( let x = 0; x < emailImages.length; x++) {
            let a = emailImages[x];
            imgOutput.src = a;
        }
        
    } else {
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
