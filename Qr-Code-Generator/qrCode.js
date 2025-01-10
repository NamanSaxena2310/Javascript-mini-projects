const qrInput = document.getElementById("qr-input")
const qrImg = document.getElementById("qr-img")
const qrButton = document.getElementById("qr-button")

// console.log(qrButton ,qrImg,qrInput)


qrButton.addEventListener('click', ()=>{
    const qrInputValue = qrInput.value
    console.log(qrInputValue)
    if(!qrInputValue){
      alert("Please enter a valid url")
      return
    }else{
      qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrInputValue}`;
      qrImg.alt = qrInputValue
    }
})