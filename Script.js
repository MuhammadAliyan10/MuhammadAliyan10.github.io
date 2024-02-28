function handelReload() {
    let name = document.getElementById('name')
    name.value = ""
    let email = document.getElementById('email')
    email.value = ""
    let project = document.getElementById('project')
    project.value = ""
    let interest = document.getElementById('interest')
    interest.value = ""
    let features = document.getElementById('features')
    features.value = ""

}

function handleMessage() {
    const toastLiveExample = document.getElementById('liveToast')
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)

    let name = document.getElementById('name')
    let nameValue = name.value
    let email = document.getElementById('email')
    let emailValue = email.value
    let message = document.getElementById('message')
    let messageValue = message.value

    if (!nameValue && !emailValue && !messageValue) {
        document.getElementById('toastValue').innerHTML = "All the fields are required"
        toastBootstrap.show()
    }
    else if (!nameValue) {
        document.getElementById('toastValue').innerHTML = "Please enter your name"
        toastBootstrap.show()
    }
    else if (!emailValue) {
        document.getElementById('toastValue').innerHTML = "Please enter your email"
        toastBootstrap.show()
    }
    else if (!messageValue) {
        document.getElementById('toastValue').innerHTML = "Please enter message"
        toastBootstrap.show()
    }
    else {
        name.value = ""
        email.value = ""
        message.value = ""
        document.getElementById('toastValue').innerHTML = "Thats for contacting us. We will response you as soon as possible"
        toastBootstrap.show()
        let content = `
Name : ${nameValue}
Email : ${emailValue}
Message : ${messageValue}
        `
        console.log(content);
    }
}

function handleForm() {
    const toastLiveExample = document.getElementById('liveToast')
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)

    let name = document.getElementById('name')
    let nameValue = name.value
    let email = document.getElementById('email')
    let emailValue = email.value
    let project = document.getElementById('project')
    let projectValue = project.value
    let interest = document.getElementById('interest')
    let interestValue = interest.value
    let features = document.getElementById('features')
    let featuresValue = features.value


    if (!nameValue && !emailValue) {
        document.getElementById('toastValue').innerHTML = "All the fields are required."
        toastBootstrap.show()
    }
    else {
        name.value = ""
        email.value = ""
        project.value = ""
        interest.value = ""
        features.value = ""
        document.getElementById('toastValue').innerHTML = "Thats for contacting us. We will response you as soon as possible."
        toastBootstrap.show()
    }

}

