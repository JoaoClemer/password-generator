const inpTxtEl = document.querySelector("#password")
let passwordRange = 12
const copyButtonEl = document.querySelector('#copy')

const generatePassword = () => {
    const chars = "abcdefghjkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ123456789?!@&*()[]"

    let password = ""

    for (let i = 0; i < passwordRange; i++) {
        const randomNumber = Math.floor(Math.random() * chars.length)
        password += chars.substring(randomNumber, randomNumber + 1)
    }
    inpTxtEl.value = password


}

const inpRangeEl = document.querySelector('#password-length')
inpRangeEl.addEventListener("input", () => {
    passwordRange = inpRangeEl.value
    generatePassword()
})

copyButtonEl.addEventListener('click', function copy() {
    navigator.clipboard.writeText(inpTxtEl.value)
})

generatePassword()