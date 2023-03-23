//const p = document.querySelector('p')
//console.log(p.innerHTML)

const a = document.querySelector('a')
// const a = document.getElementsByTagName('a')
console.log(a[0])
a[0].setAttribute('href','https://www.Google.co.th')
a[0].setAttribute('target','_blank')

const crru = document.getElementsByTagName('a')
console.log(crru)
crru.innerHtml`<br> Go To crru`
crru.setAttribute('href','https://www.crru.ac.th')
crru.setAttribute('target','_blank')

const result = {first_name:"Pat",last_name:"wilai"}
const fullname = `${result.first_name} ${result.last_name}`

const p = document.querySelector('p')
p.innerHTML = fullname