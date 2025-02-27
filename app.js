// console.log("this is working")

// document.addEventListener("DOMContentLoaded", () => {
//     // store constant url for form dom element; request url
//     const requestUrl = " http://www.reddit.com/search.json?q=cats+nsfw:no"
//     let inputForm = document.querySelector("form")
//     let catPictures = document.querySelector("#catPictures")
//     let catRes = []

//     // REQUEST DATA
//     // take form element and prevent default behavior
//     inputForm.addEventListener("submit", (e) => {
//         e.preventDefault() 
//         // get user inputed number 
//         let userInput = input.value
//         console.log(userInput)
//         // make fetch request to const api url with given user number
//         fetch(requestUrl + userInput + "&limit=100")
//             // .then --> take response data and format
//             .then((res) => {
                
//                 let results = res.json()
//                 console.log(results)
//                 return results
//             })
//             // .then --> use response JSON data
//             .then((jsonData) => {
//                catRes = jsonData.thumbnail
//                console.log(jsonData)
//                domCatPictures(catRes)
//             })
//             // .catch --> to catch errors
//             .catch((err) => {
//                 console.log(err)
//                 return err
//             })
//     })
      
//     // RESPONSE DATA
//     // collect formated data
// function domCatPictures(resArr) {
//         resArr.forEach((catPictures) => {
//             // create li element for each response
//             let div = document.createElement("div")
//             div.imgContent = catPictures
           
//             // add li element to DOM
//             catPictures.appendChild(div)

//         })
//     }
// })

            //CLASS WALK THRU

/* ------- APP STATE ------- */

const TIMER_SPEED = 1000
// variable for our interval
let slideshowInterval = null
// container for the images
let images = []
// index of the current image being shown
let imageIndex = 0

/* ------- DOM SELECTORS ------- */

const SEARCH_FORM = document.querySelector('#search-form')
const SEARCH_INPUT = document.querySelector('#search-input')
const SUBMIT_BUTTON = document.querySelector('#submit-button')
const STOP_BUTTON = document.querySelector('#stop-button')
const SLIDESHOW_CONTAINER = document.querySelector('#slideshow-container')

SEARCH_FORM.addEventListener('submit', fetchReddit)
STOP_BUTTON.addEventListener('click', stopSlideshow)
STOP_BUTTON.style.display = 'none'

/* ------- FUNCTIONS ------- */

function fetchReddit(e) {
  e.preventDefault()
  // console.log(SEARCH_INPUT.value)
  // fetch from reddit
  fetch(`http://www.reddit.com/search.json?q=` + SEARCH_INPUT.value + '+nsfw:no')
    .then(res => res.json()) // implicit return (with one param)
    .then((jsonData) => {
      console.log(jsonData.data.children)
      images = jsonData.data.children
        .map(child => {
          return {
            url: child.data.url,
            subreddit: child.data.subreddit,
            author: child.data.subreddit
          }
        })
        .filter(image => {
          const fileExtension = image.url.slice(-4)
          // if(image.url === undefined) return false
          if(fileExtension === '.jpg' || fileExtension === '.png') return true
          return false
    
        })
      // set the interval for the slideshow
      slideshowInterval = setInterval(changeSlide, TIMER_SPEED)
      STOP_BUTTON.style.display = 'inline'
      // invoke the slideshow callback one time
      changeSlide()
    })
    .catch(err => console.log(err))

    // we use catch bc we are good programmers  
}

// callback function for the interval
function changeSlide() {
  // increment the slideshow index
  imageIndex++
  // reset the the image index if it is out of bounds
  if(imageIndex >= images.length) imageIndex = 0
  console.log(images[imageIndex])
  // first empty out the div of any elements
  while(SLIDESHOW_CONTAINER.firstChild) {
    SLIDESHOW_CONTAINER.removeChild(SLIDESHOW_CONTAINER.firstChild)
  }
  // update the DOM
  const imageSlide = document.createElement('img')
  imageSlide.src = images[imageIndex].url
  imageSlide.alt = images[imageIndex].author
  imageSlide.width = '400'

  SLIDESHOW_CONTAINER.appendChild(imageSlide)
}

function stopSlideshow() {
  // stop the madness
}
