let items = [
	{nome: 'suco', preco: 4},
	{nome: 'refrigerante', preco: 2.50},
	{nome: 'agua', preco: 1.5},
	{nome: 'bolo', preco: 3.50},
	{nome: 'pastel', preco: 3.00},
	{nome: 'torta', preco: 4}
]

document.querySelector('#btn-calcular').addEventListener('click', () => {
	let inputs = document.querySelectorAll('.formulario__input')
	let resposta = document.querySelector('.resposta__paragrafo')
	let total = 0

	nome = inputs[0].value
	bebidas = [inputs[1], inputs[2], inputs[3]]
	comidas = [inputs[4], inputs[5], inputs[6]]

	resposta.innerHTML = 'Nome: ' + nome + '<br>'

	resposta.innerHTML += 'Bebida consumida: '
	bebidas.forEach(bebida => {
		if (bebida.checked) {
			resposta.innerHTML += bebida.value + ', '

			items.forEach(item => {
				if (bebida.value == item.nome)
					total += item.preco
			})
		}
	})

	resposta.innerHTML += '<br>Doces ou Salgados: '
	comidas.forEach(comida => {
		if (comida.checked) {
			resposta.innerHTML += comida.value + ', '

			items.forEach(item => {
				if (comida.value == item.nome)
					total += item.preco
			})
		}
	})

	resposta.innerHTML += '<br>Total: R$' + total
})

document.querySelector('#btn-limpar').addEventListener('click', () => {
	let inputs = document.querySelectorAll('.formulario__input')
	let resposta = document.querySelector('.resposta__paragrafo')

	inputs.forEach(input => {
		input.checked = false
	})

	inputs[0].value = ''
	resposta.innerHTML = ''
})