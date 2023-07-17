const pwInput = document.getElementById('pw');
const confirmInput = document.getElementById('confirm-pw');
const errorStmt = document.getElementById('pw-error');
const submit = document.getElementById('btn')

submit.addEventListener('click', confirmPW);

function confirmPW (){
    const pw = pwInput;
    const cpw = confirmInput;

    if (pw !== cpw) {
        console.log('pw', pw, 'cpw, cpw')
        errorStmt.textContent = 'Passwords do not match please re-enter';
    } else {
        errorStmt.textContent = '';
    }
}
