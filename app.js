document.addEventListener("DOMContentLoaded", () => {
    // store constant url for dom element; request url
    const requestUrl = "http://www.reddit.com/search.json?q=cats+nsfw:no"
    let inputForm = document.querySelector("form")
    let catPics = document.querySelector("#catPictures")
    let catRes = []
   
    //request data
    //prevent form submission
    inputForm.addEventListener("submit", (e) => {
        e.preventDefault()
    
        //get user input data
        let userInput = input.value
        
       // make fetch request to const API url
        fetch(requestUrl + userInput)
        console.log("input is showing")
//             // .then --> take response data and format
//             .then((res) => {
//                 return res.json()
//             })
//             //.then --> use response JSON data
//             .then((jsonData) => {
//                 catsRes = jsonData.results
//                 domCatPics(catRes)
//                 console.log(catPics)
//             })
//             // .catch --> to catch errors
//             .catch((err) => {
//                 console.log(err)
//                 return err
//             })
//     })
// })