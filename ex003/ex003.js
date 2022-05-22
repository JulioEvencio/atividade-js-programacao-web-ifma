let item = [
	{nome: 'Cachorro quente', codigo: 100, preco: 1.20},
	{nome: 'Bauru simples', codigo: 101, preco: 1.30},
	{nome: 'Bauru com ovo', codigo: 102, preco: 1.50},
	{nome: 'Hambúguer', codigo: 103, preco: 1.20},
	{nome: 'Cheeseburger', codigo: 104, preco: 1.30},
	{nome: 'Refrigerante', codigo: 105, preco: 1.00}
]

function gerarTabela() {
	item.forEach(item => {
		let tr = document.createElement('tr')

		let td1 = document.createElement('td')
		td1.innerText = item.nome

		let td2 = document.createElement('td')
		td2.innerText = item.codigo

		let td3 = document.createElement('td')
		td3.innerText = item.preco

		tr.appendChild(td1)
		tr.appendChild(td2)
		tr.appendChild(td3)

		document.querySelector('.tabela__body').appendChild(tr)
	})
}

gerarTabela()

document.querySelector('#btn-calcular').addEventListener('click', () => {
	let codigo = document.querySelectorAll('.formulario__input')
	let resposta = document.querySelector('.resposta__paragrafo')

	if (codigo[0].value === "") {
		document.querySelector('#codigo-invalido').innerText = 'Código invalido!'
		return
	} else
		document.querySelector('#codigo-invalido').innerText = ''

	if (codigo[1].value === "" || codigo[1].value < 1) {
		document.querySelector('#quantidade-invalida').innerText = 'Quantidade invalida!'
		return
	} else
		document.querySelector('#quantidade-invalida').innerText = ''

	for (let i = 0; i < item.length; i++) {
		if (codigo[0].value == item[i].codigo) {
			resposta.innerText = 'Valor a ser pago: ' + (item[i].preco * codigo[1].value)
			return
		}
	}

	document.querySelector('#codigo-invalido').innerText = 'Código invalido!'
})