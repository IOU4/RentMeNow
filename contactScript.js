const submit = document.querySelector('input.btn')
const userName = document.querySelector('input[name="name"]')
const email = document.querySelector('input[name="email"]')
const subject = document.querySelector('input[name="subject"]')
const message = document.querySelector('textarea')
submit.addEventListener('click', () => alert(`
name:     ${userName.value}
email:    ${email.value}
subject:  ${subject.value}
message:  ${message.value}
`))
