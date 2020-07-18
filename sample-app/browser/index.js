const isEmpty = require('../shared/is-empty')
const outfits = require('../shared/outfits')

const resultsBlock = document.getElementById('results')

const getResults = () => {
  const response = fetch('http://localhost:3000/get-results')
  response.then(res => {
    const responseBodyAsJson = res.json()
    responseBodyAsJson.then(data => {
      console.log(data)
      resultsBlock.innerHTML = JSON.stringify(data, null, 2)
    })
  })
  response.catch(error => {
    resultsBlock.innerHTML = error
  })
}
getResults()

const myForm = document.getElementById('myForm')
myForm.addEventListener('submit', (e) => {
  document.getElementById('errorMessage').innerText = ''
  e.preventDefault()

  const text = e.target.myText.value

  if (isEmpty(text)) {
    document.getElementById('errorMessage').innerText = 'Произошла ошибка, отловили на клиенте'
    return
  }

  const response = fetch('http://localhost:3000/save-results', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({text: text})
  })
  response.then((response) => {
    if (response.status !== 201) {
      document.getElementById('errorMessage').innerText = 'Произошла ошибка, отловили на сервере'
      return
    }
    getResults()
  })
  e.target.myText.value = ''
})
