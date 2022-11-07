let nameInput = document.getElementById('expense')
let dateInput = document.getElementById('date')
let amountInput = document.getElementById('amount')
let btnEl = document.getElementById('btn')
let table = document.getElementById('table')
let nameList = []
let dateList = []
let amountList = []

btnEl.addEventListener('click', function() {
	nameList.push(nameInput.value)
	dateList.push(dateInput.value)
	amountList.push(amountInput.value)
	nameInput.value = null
	dateInput.value = null
	amountInput.value = null
	render()
})

function render() {
	listItem = ''
	for (let i = 0; i < nameList.length; i++) {
		listItem =	`<tr>
						<td>${nameList[i]}</td>
						<td>${dateList[i]}</td>
						<td>$${amountList[i]}</td>
						<td>-</td>
				    </tr>

		` 
	}
	table.innerHTML += listItem
}