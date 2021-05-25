console.log("this is working")

document.addEventListener("DOMContentLoaded", () => {
    // store constant url for form dom element; request url
    const requestUrl = " http://www.reddit.com/search.json?q=cats+nsfw:no"
    let inputForm = document.querySelector("form")
    let catPictures = document.querySelector("#catPictures")
    let catRes = []

    // REQUEST DATA
    // take form element and prevent default behavior
    inputForm.addEventListener("submit", (e) => {
        e.preventDefault() 
        // get user inputed number 
        let userInput = input.value
        // make fetch request to const api url with given user number
        fetch(requestUrl + userInput + "&limit=100")
            // .then --> take response data and format
            .then((res) => {
                return res.json()
            })
            // .then --> use response JSON data
            .then((jsonData) => {
               catRes = jsonDat.thumbnail
               domCatPictures(catRes)
            })
            // .catch --> to catch errors
            .catch((err) => {
                console.log(err)
                return err
            })
    })
      
    // RESPONSE DATA
    // collect formated data
function domCatPictures(resArr) {
        resArr.forEach((catPictures) => {
            // create li element for each response
            let div = document.createElement("div")
            div.imgContent = catPictures
           
            // add li element to DOM
            catPictures.appendChild(div)

        })
    }
})