const countEl = document.getElementById ("count-el")
const saveEl = document.getElementById ("save-el")

let count = 0

 increment = () => {
        count += 1
        countEl.innerText = count
}

 decrement = () => {
        count -= 1
        countEl.innerText = count
}

 save = () => {
        let countStr = count + "-"
        saveEl.textContent += countStr
        count = 0
        countEl.innerText = count
}


