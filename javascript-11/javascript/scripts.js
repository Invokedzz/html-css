function origemCalculadora () {
    return {
        display: document.querySelector('.display'),
        eraseTexto () {
            this.display.value = '';
        },
        eraseLetter () {
            this.display.value = this.display.value.slice(0, -1);
        },
        btnforDisplay (value) {
            this.display.value += value;
        },
        calculateNumbers () {
            let expression = this.display.value;
            try {
                expression = eval(expression);
                if (!expression) {
                    alert('Invalid expression');
                    return;
                }
                this.display.value = String(expression);
            }
             catch (e) {
                alert('Invalid expression');
                return;
            }
        },
        clickBtns () {
            document.addEventListener('click', e => {
                let element = e.target;
                if (element.classList.contains('btn-num')) {
                    this.btnforDisplay(element.innerText);
                }
                if (element.classList.contains('btn-clear')) {
                    this.eraseTexto(element.innerText);
                }
                if (element.classList.contains('btn-del')) {
                    this.eraseLetter(element.innerText);
                }
                if (element.classList.contains('btn-eq')) {
                    this.calculateNumbers(element.innerText);
                }
            });
        },
        startCalculator () {
            this.clickBtns();
        }
    };
}
const calculator = origemCalculadora();
calculator.startCalculator();