
let count = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

// increment button
function increment() {
    count += 1
    countEl.innerText = count 
    console.log(count)
}


//save button 
function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    count = 0
    countEl.innerText = count 

}
