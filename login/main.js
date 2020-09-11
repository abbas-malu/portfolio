let showHide = document.getElementById('myDiv')

// showHide.addEventListener('click', hide)
function show() {
    let pswd = document.getElementById('pswd')
    pswd.setAttribute('type','text')
    showHide.innerHTML = `<label id="showHide" onclick="hide()"><i class="fas fa-eye-slash"></i> Hide Password</label>`
}

function hide() {
    let pswd = document.getElementById('pswd')
    pswd.setAttribute('type','password')
    showHide.innerHTML = `<label id="showHide" onclick="show()"><i class="fas fa-eye"></i> Show Password</label>`
}