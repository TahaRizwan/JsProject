const numberOfPeopleSpan = document.getElementById('numberOfPeople')
const billTotalInput = document.getElementById('billTotalInput')
const tipInput = document.getElementById('tipInput')
const perPersonTotal = document.getElementById('perPersonTotal')

let numberOfPeople = Number(numberOfPeopleSpan.innerText)

function increment() {
  numberOfPeople++
  numberOfPeopleSpan.innerText = numberOfPeople
  calculateBill()
}

function decrement() {
  if (numberOfPeople > 1) {
    numberOfPeople--
  }
  numberOfPeopleSpan.innerText = numberOfPeople
  calculateBill()
}

function calculateBill() {
  billTotal = Number(billTotalInput.value)
  tip = Number(tipInput.value)
  tip /= 100
  tip *= billTotal
  const total = (billTotal + tip) / numberOfPeople
  perPersonTotal.innerText = `$ ${total.toFixed(2)}`
}
