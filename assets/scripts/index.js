let saveEl = document.getElementById("save-el")
let pennyEl = document.getElementById("pennies-el")
let nickelEl = document.getElementById("nickels-el")
let dimesEl = document.getElementById("dimes-el")
let quartersEl = document.getElementById("quarters-el")

let pennyLi = document.getElementById("penny-li")
let nickelLi = document.getElementById("nickel-li")
let dimeLi = document.getElementById("dime-li")
let quarterLi = document.getElementById("quarter-li")

let pennyCount = 0
let nickelCount = 0
let dimesCount = 0
let quartersCount = 0

function incrementPennyCount() {
    pennyCount += 1
    pennyEl.textContent = pennyCount
}

function incrementNickelCount() {
    nickelCount += 1
    nickelEl.textContent = nickelCount
}

function incrementDimeCount() {
    dimesCount += 1
    dimesEl.textContent = dimesCount
}

function incrementQuarterCount() {
    quartersCount += 1
    quartersEl.textContent = quartersCount
}   

function save() {
    const divider = " - "
    pennyLi.textContent += pennyCount + divider
    nickelLi.textContent += nickelCount + divider
    dimeLi.textContent += dimesCount + divider
    quarterLi.textContent += quartersCount + divider
}

function clearCounts() {
    pennyCount = 0
    nickelCount = 0
    dimesCount = 0
    quartersCount = 0
    pennyEl.textContent = pennyCount
    nickelEl.textContent = nickelCount
    dimesEl.textContent = dimesCount
    quartersEl.textContent = quartersCount
}
function clearHistory() {
    pennyLi.textContent = "Pennies: "
    nickelLi.textContent = "Nickels: "
    dimeLi.textContent = "Dimes: "
    quarterLi.textContent = "Quarters: "
}

function toggleHistory() {
    let history = document.getElementById("history-container")
    if (history.style.display === "none") {
        history.style.display = "block"
    } else {
        history.style.display = "none"
    }
}