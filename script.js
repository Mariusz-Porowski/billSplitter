const inputPrice = document.querySelector('#price')
const inputPeople = document.querySelector('#people')
const selectTip = document.querySelector('#tip')
const button = document.querySelector('.count')
const error = document.querySelector('.error')
const costInfo = document.querySelector('.cost-info')
const cost = document.querySelector('.cost')

const showBill = () => {
	if (inputPrice.value == '' || inputPeople.value == '' || selectTip.value == 0) {
		error.textContent = 'Uzupełnij wszystkie pola!'
		costInfo.style.display = 'none'
	} else {
		countBill()
		error.textContent = ''
	}
}

const countBill = () => {
	const newPrice = parseFloat(inputPrice.value)
	const newPeople = inputPeople.value
	const newTip = parseFloat(selectTip.value)

	const sum = (newPrice + newPrice * newTip) / newPeople
	costInfo.style.display = 'block'

    cost.textContent = sum.toFixed(2)
}

button.addEventListener('click', showBill)
 