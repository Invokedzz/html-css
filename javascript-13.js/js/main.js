class Validate {
    constructor () {
        this.form = document.querySelector('.formulario');
        this.events();
    }

    events () {
        this.form.addEventListener('submit', e => {
            this.handlesubmit(e);
        });
    }

    handlesubmit (e) {
        e.preventDefault();
        this.clearerrors()
        const pass = this.passvalid();
        const user = this.uservalid(this.form.querySelector('.user'));
        const name = this.namevalid(this.form.querySelector('.name'));
        const nickname = this.nicknamevalid(this.form.querySelector('.nickname'));
        if (pass && user && name && nickname) {
            alert('Thanks for sending the form.');
            this.form.submit(); // Tem que arrumar                      =+
        }
    }

    namevalid (n) {
        let valid = true;
        const username = n.value;
        if (username.length < 4 || username.length > 16) {
            this.errortext(n, 'Nome deve estar entre 4 e 16 caracteres');
            valid = false;
        } 
        if (username.value === '' || !username) {
            this.errortext(n, 'Preencha o espaço em branco');
            valid = false;
        }
        return valid;
    }

    nicknamevalid (txt) {
        let valid = true;
        const nick = txt.value;
        if (nick.length < 4 || nick.length > 16) {
            this.errortext(txt, 'Sobrenome deve estar entre 4 e 16 caracteres');
            valid = false;
        }
        if (!nick || nick.value === '') {
            this.errortext(txt, 'Preencha o espaço em branco');
            valid = false;
        }
        return valid;
    }

    writepassword () {
        let valid = true;
        const password = this.form.querySelector('.password');
        if (password.value < 6 || password.value > 12) {
            this.errortext(password, 'O valor deve ser entre 6 e 12 caracteres');
            valid = false;
        }
        return valid;
    }

    writerepassword () {
        let valid = true;
        const repassword = this.form.querySelector('.repassword');
        if (repassword.value < 6 || repassword.value > 12) {
            this.errortext(repassword, 'O valor deve ser entre 6 e 12 caracteres');
            valid = false;
        }
        return valid;
    }

    passvalid () {
        let valid = true;
        const validpassword = this.writepassword();
        const validrepassword = this.writerepassword();
        if (!validpassword || !validrepassword || 
            this.form.querySelector('.password').value !== this.form.querySelector('.repassword').value) {
            this.errortext(this.form.querySelector('.password'), 'As senhas devem ser compatíveis');
            this.errortext(this.form.querySelector('.repassword'), 'As senhas devem ser compatíveis');
            valid = false;
        }
        return valid;
    }

    uservalid (field) {
        let valid = true;
        const user = field.value;
        if (user.length < 3 || user.length > 12) {
            this.errortext(field, 'Usuário deve ter entre 3 e 12 caracteres');
            valid = false;
        }
        return valid;
    }

    errortext (camp, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        camp.insertAdjacentElement('afterend', div);
    
}

    clearerrors () {
        const errormsg = this.form.querySelectorAll('.error-text');
        errormsg.forEach(errormsg => {
            errormsg.remove();
        });
    }
}

const val = new Validate();