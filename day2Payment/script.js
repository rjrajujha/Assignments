console.log("JS Loaded");
//USD -Amount
let usd = document.getElementById('usd');


//Checkbox
let optm = document.getElementById('msg');
let opta = document.getElementById('ana');
let opts = document.getElementById('sup');
let optd = document.getElementById('dis');

optm?.addEventListener('change', () => {
    if (optm.checked === true) {
        usd.innerText = parseInt(usd.innerText) + 400;
    }
    if (optm.checked === false) {
        usd.innerText = parseInt(usd.innerText) - 400;
    }
})

opta?.addEventListener('change', () => {
    if (opta.checked === true) {
        usd.innerText = parseInt(usd.innerText) + 200;
    }
    if (opta.checked === false) {
        usd.innerText = parseInt(usd.innerText) - 200;
    }
})

opts?.addEventListener('change', () => {
    if (opts.checked === true) {
        usd.innerText = parseInt(usd.innerText) + 400;
    }
    if (opts.checked === false) {
        usd.innerText = parseInt(usd.innerText) - 400;
    }
})

optd?.addEventListener('change', () => {
    if (optd.checked === true) {
        usd.innerText = parseInt(usd.innerText) - 101;
    }
    if (optd.checked === false) {
        usd.innerText = parseInt(usd.innerText) + 101;
    }
})

let cardNum = document.getElementById("card-no-input");

cardNum.onkeyup = function (e) {
    if (this.value == this.lastValue) return;
    var caretPosition = this.selectionStart;
    var sanitizedValue = this.value.replace(/[^0-9]/gi, '');
    var parts = [];

    for (var i = 0, len = sanitizedValue.length; i < len; i += 4) {
        parts.push(sanitizedValue.substring(i, i + 4));
    }

    for (var i = caretPosition - 1; i >= 0; i--) {
        var c = this.value[i];
        if (c < '0' || c > '9') {
            caretPosition--;
        }
    }
    caretPosition += Math.floor(caretPosition / 4);

    this.value = this.lastValue = parts.join(' ');
    this.selectionStart = this.selectionEnd = caretPosition;
}

let expDate = document.getElementById('mm-yy');
expDate.onkeyup = function (e) {
    if (this.value == this.lastValue) return;
    var caretPosition = this.selectionStart;
    var sanitizedValue = this.value.replace(/[^0-9]/gi, '');
    var parts = [];

    for (var i = 0, len = sanitizedValue.length; i < len; i += 2) {
        parts.push(sanitizedValue.substring(i, i + 2));
    }

    for (var i = caretPosition - 1; i >= 0; i--) {
        var c = this.value[i];
        if (c < '0' || c > '9') {
            caretPosition--;
        }
    }
    caretPosition += Math.floor(caretPosition / 2);

    this.value = this.lastValue = parts.join('/');
    this.selectionStart = this.selectionEnd = caretPosition;
}

function valCardNum(num) {
    if (num.length === 19) return true;
    alert("Fill Card Number");
    return false;
}

function valExp(mmyy) {
    if (mmyy.length < 5) {
        alert("Fill Exp Date")
        return false;
    }
    let mm = mmyy.split('/')[0];
    let yy = mmyy.split('/')[1];
    if (parseInt(mm) > 12) {
        alert("Fill month Correctly");
        return false;
    }
    if (parseInt(yy) < 23) {
        alert("Your Card Expired");
        return false;
    }
    return true;
}

function makePayment() {
    if (!valCardNum(cardNum.value)) return;
    if (!valExp(expDate.value)) return;
    if (document.getElementById('cvv').value.length < 3 || document.getElementById('cvv').value.length > 4) {
        alert("Fill CVV properly");
        return;
    }

    localStorage.setItem("usdStorage", usd.innerText);
    window.location = ("./remove.html");
}
