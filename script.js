const inpTxtEl = document.querySelector("#password")
let passwordRange = 12
const copyButtonEl = document.querySelector('#copy')

const upperCaseCheckEl = document.querySelector("#uppercase-check")
const numbersCheckEl = document.querySelector("#number-check")
const symbolsCheckEl = document.querySelector("#symbol-check")
const securityBarEl = document.querySelector('#security-bar')

const generatePassword = () => {
    let chars = "abcdefghjkmnpqrstuvwxyz"
    const upperCaseChars = "ABCDEFGHJKLMNPQRSTUVWXYZ"
    const numberChars = "123456789"
    const symbolsChars = "?!@&*()[]"

    if (upperCaseCheckEl.checked) {
        chars += upperCaseChars
    }

    if (numbersCheckEl.checked) {
        chars += numberChars
    }

    if (symbolsCheckEl.checked) {
        chars += symbolsChars
    }

    let password = ""

    for (let i = 0; i < passwordRange; i++) {
        const randomNumber = Math.floor(Math.random() * chars.length)
        password += chars.substring(randomNumber, randomNumber + 1)
    }
    inpTxtEl.value = password
    calculateQuality()
    calculateFontSize()


}

function calculateQuality() {


    const percent = Math.round((passwordRange / 64) * 30) + (upperCaseCheckEl.checked ? 15 : 0) + (numbersCheckEl.checked ? 28 : 0) + (symbolsCheckEl.checked ? 27 : 0)
    securityBarEl.style.width = `${percent}%`
    if (percent > 69) {
        securityBarEl.classList.remove("critical")
        securityBarEl.classList.remove("warning")
        securityBarEl.classList.add("safe")
    } else if (percent > 50) {
        securityBarEl.classList.remove("critical")
        securityBarEl.classList.remove("safe")
        securityBarEl.classList.add("warning")
    } else {
        securityBarEl.classList.remove("safe")
        securityBarEl.classList.remove("warning")
        securityBarEl.classList.add("critical")
    }

    if (percent >= 100) {
        securityBarEl.classList.add("completed")

    } else {
        securityBarEl.classList.remove("completed")
    }
}

function calculateFontSize() {
    if (passwordRange > 45) {
        inpTxtEl.classList.remove("font-sm")
        inpTxtEl.classList.remove("font-xs")
        inpTxtEl.classList.add("font-xxs")
    } else if (passwordRange > 32) {
        inpTxtEl.classList.remove("font-sm")
        inpTxtEl.classList.remove("font-xxs")
        inpTxtEl.classList.add("font-xs")

    } else if (passwordRange > 22) {
        inpTxtEl.classList.remove("font-xs")
        inpTxtEl.classList.remove("font-xxs")
        inpTxtEl.classList.add("font-sm")

    } else {

    }
}

const inpRangeEl = document.querySelector('#password-length')
inpRangeEl.addEventListener("input", () => {
    passwordRange = inpRangeEl.value
    document.querySelector('#password-length-text').innerText = passwordRange
    generatePassword()
})

upperCaseCheckEl.addEventListener('click', generatePassword)
numbersCheckEl.addEventListener('click', generatePassword)
symbolsCheckEl.addEventListener('click', generatePassword)

copyButtonEl.addEventListener('click', function copy() {
    navigator.clipboard.writeText(inpTxtEl.value)
    alert('Senha copiada com sucesso!')
})

document.querySelector("#copy2").addEventListener('click', function copy() {
    navigator.clipboard.writeText(inpTxtEl.value)
    alert('Senha copiada com sucesso!')
})


document.querySelector('#renew').addEventListener('click', generatePassword)
generatePassword()