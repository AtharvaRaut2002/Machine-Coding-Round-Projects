const container = document.querySelector('.container');
const URL = 'https://newsapi.org/v2/everything?q=Apple&apiKey=35814d9188124c9b8c565561dc3757a4'

function getRandNum(){
    return Math.floor(Math.random() * 100);
}
var numImages = 10;
function loadImages(numImages){
    let i=0;
    while(i < numImages){
        const img = document.createElement('img');
        img.src= dat.articles[i].urlToImage;
        img.style.width = '400px';
        img.style.border= "2px solid black";
        // console.log(dat.articles[i].urlToImage)
        container.appendChild(img);
        i++;
        console.log(i);
    }
    
}




let dat;

const apiKey = '35814d9188124c9b8c565561dc3757a4';
const apiUrl = 'https://newsapi.org/v2/everything?q=Apple&apiKey=' + apiKey;

// Make the request using fetch
fetch(apiUrl)
  .then(response => {
    // Check if the request was successful (status code 200)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    // Parse and use the response data (response.json() for JSON data)
    return response.json();
  })
  .then(data => {
    // Process the data
    dat = data
    loadImages(numImages);
    numImages+=10;
    // console.log(dat.articles[0]);
  })
  .catch(error => {
    // Handle errors
    console.error('Error:', error);
  });


  window.addEventListener('scroll', () => {
    if(window.scrollY + window.innerHeight+1 >= document.documentElement.scrollHeight){
        loadImages(numImages);
          numImages+=10;
    }
  })