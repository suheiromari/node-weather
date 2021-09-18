console.log('trying js folder');
 
const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const location = search.value
  
  messageOne.textContent = 'Loading...'
  messageTwo.textContent = ''
  fetch('http://localhost:3000/weather?address='+ location).then((response) => {
    
      response.json().then((Data) => {
      if (Data.error) {
          messageOne.textContent = Data.error
           
      } else {
        messageOne.textContent = Data.location
        messageTwo.textContent = Data.forcast
        console.log(Data.forcast)
      }
    })
  })

})