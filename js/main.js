
function validateForm() {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
    if (email.value.match(validRegex)) {
        alert("Email successfully assigned to image!");
        return false;
    } else {
        alert("Invalid email address!");
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

let emailImages = [];

const addEmail = (ev) => {
    ev.preventDefault();

    let emailImage = {
        email: document.getElementById('email').value,
        image: imageObjectURL
    }
    emailImages.push(emailImage);
    document.forms[0].reset();
    console.log(emailImage);
    localStorage.setItem('EmailImageList', JSON.stringify(emailImages));
}

document.addEventListener('DOMContentLoaded', () =>{
    document.getElementById('submit').addEventListener('click', addEmail);
});