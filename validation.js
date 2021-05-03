// validation script here
const inputs = document.querySelectorAll('input')
const reg = /[a-zA-Z]/gi

const patterns = {
    telephone: /^\d{10}$/,
    username: /^[a-z\d]{5,12}$/i,
    password: /^[\w@-]{8,20}$/,
    slug: /^[a-z\d-]{8,20}$/

}

function validate(field, regex) {
    if (regex.test(field.value)) {
        field.className = 'valid'
    } else {
        field.className = 'invalid'
    }
}

inputs.forEach(input => {
    input.addEventListener('keyup', (e) => {
        validate(e.target, patterns[e.target.attributes.name.value])
    })
})