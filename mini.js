 async function apicall(){
    let res=await fetch('https://meowfacts.herokuapp.com/?count=3')
    let finalres=await res.json()
    document.getElementById('box').innerText=finalres.data[0]
    speechSynthesis.speak(new SpeechSynthesisUtterance(finalres.data[0]))
 }