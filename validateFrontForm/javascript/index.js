class FormValidate {
    constructor () {
        this.form = document.querySelector('.formx');
        this.saveEvents();
    }

    saveEvents () {
        this.form.addEventListener('submit', e => {
            this.handleSubmit(e);
        });
    }

    handleSubmit (e) {
        e.preventDefault();
        const nameValidated = this.validateName();
        const usernameValidated = this.validateUsername();
        const passwordValidated = this.validatePassword();
        if (nameValidated && usernameValidated && passwordValidated) {
            this.form.submit();
            alert('Formulário enviado');
        }
    }

    validateName () {
        let valid = true;
        const nameU = this.form.querySelector('.name-user');
        if (nameU.length < 6 || nameU.length > 18) {
            alert('Error');
            valid = false;
        }
        return valid;
    }

    validateUsername () {
        let valid = true;
        const username = this.form.querySelector('.real-name').value;
        if (username.length < 8 || username.length > 20) {
            alert('Peixe');
            valid = false;
        }
        return valid;
    }

    validatePassword () {
        let valid = true;
        const password = this.form.querySelector('.password').value;
        const rePassword = this.form.querySelector('.re-Password').value;

        if (password !== rePassword) {
            valid = false;
            alert('Insira os mesmos valores');
        };

        if (password.length < 6 || password.length > 30) {
            valid = false;
            alert('Password must have between 7 and 29 chars');
        };
        return valid;
    }

}

const x = new FormValidate();
x.handleSubmit();