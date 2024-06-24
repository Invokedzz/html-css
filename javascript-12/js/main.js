function factoringCPF() {
    return {
        writename() {
            const name = document.querySelector('.name');
            if (!name || name.value === '') return false;
            this.name = name.value;
            return true;
        },
        writenickname() {
            const nickname = document.querySelector('.nickname');
            if (!nickname || nickname.value === '') return false;
            this.nickname = nickname.value;
            return true;
        },
        insertcpf() {
            const cpf = document.querySelector('.cpf').value;
            this.valorCPF = cpf.replace(/[^\d]/g, '');

            if (this.valorCPF.length !== 11) return false;

            let valorinicial = 0;
            for (let i = 0; i < 9; i++) {
                valorinicial += Number(this.valorCPF.charAt(i)) * (10 - i);
            }

            let primeironum = 11 - (valorinicial % 11);
            if (primeironum > 9) {
                primeironum = 0;
            }

            valorinicial = 0;
            for (let i = 0; i < 10; i++) {
                valorinicial += Number(this.valorCPF.charAt(i)) * (11 - i);
            }

            let segundonum = 11 - (valorinicial % 11);
            if (segundonum > 9) {
                segundonum = 0;
            }

            if (Number(this.valorCPF.charAt(9)) === primeironum && Number(this.valorCPF.charAt(10)) === segundonum) {
                return true;
            }
            return false;
        },

        savingfunctions() {
            return this.writename() && this.writenickname() && this.insertcpf();
        },

        answertheuser (isValid) {
            const res = document.querySelector('.res');
            if (!res) {
                console.error('Elemento não encontrado');
                return;
            }
            if (isValid) {
                res.innerText = `Seu CPF foi verificado e aprovado ${this.name} ${this.nickname}!` 
            } else {
                res.innerText = `Seu CPF não foi aprovado!`
            }
        },
        
        receivemsg (msg) {
           this.answertheuser(false);
           const usermsg = `${this.name} ${this.nickname}!`
           return usermsg += msg;
        },
        clickbtn() {
            const form = document.querySelector('.btn-block');
            form.addEventListener('submit', e => {
                e.preventDefault();
                let isValid = this.savingfunctions();
                this.answertheuser(isValid);
            });
        }
    };
}
const cpfvalidate = factoringCPF();
cpfvalidate.clickbtn();