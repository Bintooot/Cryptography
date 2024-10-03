
//============= Start My Own Encrytion & Decryption ============

const charvalue = {
    'a': 'z',
    'b': 'y',
    'c': 'x',
    'd': 'w',
    'e': 'v',
    'f': 'u',
    'g': 't',
    'h': 's',
    'i': 'r',
    'j': 'q',
    'k': 'p',
    'l': 'o',
    'm': 'n',
    'n': 'm',
    'o': 'l',
    'p': 'k',
    'q': 'j',
    'r': 'i',
    's': 'h',
    't': 'g',
    'u': 'f',
    'v': 'e',
    'w': 'd',
    'x': 'c',
    'y': 'b',
    'z': 'a',
    '1': 'A',
    '2': 'B',
    '3': 'C',
    '4': 'D',
    '5': 'E',
    '6': 'F',
    '7': 'H',
    '8': 'I',
    '9': 'J',
    '0': 'K'
}

const charSpecial = {
    'A': '!',
    'B': '@',
    'C': '#',
    'D': '$',
    'E': '%',
    'F': '^',
    'G': '&',
    'H': '*',
    'I': '(',
    'J': ')',
    'K': '_',
    'L': '+',
    'M': '=',
    'N': '-',
    'O': '[',
    'P': ']',
    'Q': '{',
    'R': '}',
    'S': ';',
    'T': '"',
    'U': '?',
    'V': '/',
    'W': '>',
    'X': '<',
    'Y': '.',
    'Z': ','
}


function reloadPage() {
    location.reload();
}


// ============= decrypt for my own method =============//
const reversechar = {};
Object.keys(charvalue).forEach(key => {
    const value = charvalue[key];
    reversechar[value] = key;
});



// ==================== decrypt for char special =============
const reversecharSpecial = {};
Object.keys(charSpecial).forEach(key => {
    const value = charSpecial[key];
    reversecharSpecial[value] = key;
});

// =============== CHAR SPECIAL =================//
function charNumEncryption(text) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        let char = text[i].toUpperCase();
        const encChar = charSpecial[char] || char;
        result += encChar;
    }
    return result;
}

function charNumDecryption(text) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        const decChar = reversecharSpecial[char] || char;
        result += decChar.toLowerCase();
    }
    return result;
}

// ================ START CHAR SPECIAL ===============//
let skey = '';
function charNumencryptDisplay() {
    const text = document.getElementById('text').value;
    skey = document.getElementById('key').value;
    const encrypt = charNumEncryption(text);
    if (!text.trim()) {
        alert('Enter text to Encrypt.');
    } else {
        if (!skey.trim()) {
            alert('Enter key to Encrypt.');
        } else {
            document.getElementById('enc').value = encrypt;
        }
    }
}

function charNumdecryptDisplay() {
    const text = document.getElementById('enc').value;
    const deckey = document.getElementById('deckey').value;
    const decrypt = charNumDecryption(text);
    if (!text.trim()) {
        alert('Please enter some text to decrypt.');
    } else {
        if (skey != deckey) {
            alert('Wrong Decrypt Key. Try Again!');
        } else {
            const transformedText = decrypt.charAt(0).toUpperCase() + decrypt.slice(1).toLowerCase();
            document.getElementById('dec').value = transformedText;
        }

    }
}

// =============== MY OWN =============//
function MyOwnEncryption(text) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        let char = text[i].toLowerCase();
        const encChar = charvalue[char] || char;
        result += encChar;
    }
    return result;
}

function MyOwnDecryption(text) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        const decChar = reversechar[char] || char;
        result += decChar;
    }
    return result;
}




// =============== START MY OWN =====================//
let keys = '';
function encryptDisplay() {
    const text = document.getElementById('text').value;
    keys = document.getElementById('key').value;
    const encrypt = MyOwnEncryption(text);

    if (!text.trim()) {
        alert('Enter text to Encrypt.');
    } else {
        if (!keys.trim()) {
            alert('Enter key to Encrypt.');
        } else {
            document.getElementById('enc').value = encrypt;
        }
    }
}

function decryptDisplay() {
    const text = document.getElementById('enc').value;
    let deckey = document.getElementById('deckey').value;
    const decrypt = MyOwnDecryption(text);
    if (!text.trim()) {
        alert('Enter text to Decrypt.');
    } else {
        if (keys != deckey) {
            alert('Wrong Decrypt Key. Try Again!');
        } else {
            const transformedText = decrypt.charAt(0).toUpperCase() + decrypt.slice(1).toLowerCase();
            document.getElementById('dec').value = transformedText;
        }
    }
}

// ================= END OF MY OWN ====================//


//========== Start API Encrytion & Decryption ==========//
let apikey = '';
function apiEncrypt() {
    var text = document.getElementById("text").value;
    const algorithm = document.getElementById('methods').value;
    apikey = document.getElementById('key').value;
    let encryptedText;

    if (!text.trim()) {
        alert('Enter text to Encrypt.');
    } else {
        if (!apikey.trim()) {
            alert('Input a encryption key.')
        } else {
            if (algorithm === 'AES') {
                encryptedText = CryptoJS.AES.encrypt(text, 'secret key').toString();
            } else if (algorithm === 'DES') {
                encryptedText = CryptoJS.DES.encrypt(text, 'secret key').toString();
            } else if (algorithm === 'TripleDES') {
                encryptedText = CryptoJS.TripleDES.encrypt(text, 'secret key').toString();
            } else if (algorithm === 'Rabbit') {
                encryptedText = CryptoJS.Rabbit.encrypt(text, 'secret key').toString();
            } else if (algorithm === 'RC4') {
                encryptedText = CryptoJS.RC4.encrypt(text, 'secret key').toString();
            }
            document.getElementById("enc").innerText = encryptedText;
        }

    }
}

function apiDecrypt() {
    var encText = document.getElementById("enc").value;
    const algorithm = document.getElementById('methods').value;
    const deckey = document.getElementById('deckey').value;
    let decryptedText;

    if (!encText.trim()) {
        alert('Enter text to Decrypt.');
    } else {
        if (apikey != deckey) {
            alert('Wrong Key! Try Again.');
        } else {
            if (algorithm === 'AES') {
                decryptedText = CryptoJS.AES.decrypt(encText, 'secret key').toString(CryptoJS.enc.Utf8);
            } else if (algorithm === 'DES') {
                decryptedText = CryptoJS.DES.decrypt(encText, 'secret key').toString(CryptoJS.enc.Utf8);
            } else if (algorithm === 'TripleDES') {
                decryptedText = CryptoJS.TripleDES.decrypt(encText, 'secret key').toString(CryptoJS.enc.Utf8);
            } else if (algorithm === 'Rabbit') {
                decryptedText = CryptoJS.Rabbit.decrypt(encText, 'secret key').toString(CryptoJS.enc.Utf8);
            } else if (algorithm === 'RC4') {
                decryptedText = CryptoJS.RC4.decrypt(encText, 'secret key').toString(CryptoJS.enc.Utf8);
            }
            document.getElementById("dec").innerText = decryptedText;
        }
    }


}


//================ End of API Encrytion & Decryption ============


//============ Button Validation ============

function Encrypted() {
    const algorithm = document.getElementById('methods').value.trim();
    if (algorithm === "My Own") {
        encryptDisplay();
    } else if (algorithm === "charSpecial") {
        charNumencryptDisplay();
    } else {
        apiEncrypt();
    }
}

function Decrypted() {
    const algorithm = document.getElementById('methods').value;
    if (algorithm === "My Own") {
        decryptDisplay();
    } else if (algorithm === "charSpecial") {
        charNumdecryptDisplay();
    } else {
        apiDecrypt();
    }
}

//============= End of Button Validation =============


