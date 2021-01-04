console.log('about to fetch...')



const URL = 'https://dog.ceo/api/breeds/image/random'

const fetchIMG = fetch(URL)
.then(data => {return data.json()})
.then(res => {
    document.getElementById('image').src = res.message;
    })



document.getElementById("newdoggo").addEventListener("click", () => {
    console.log('clicked')

    window.location.reload()
})