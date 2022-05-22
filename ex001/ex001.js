document.querySelector('#btn-calcular').addEventListener('click', () => {
	let numero = document.querySelectorAll('.formulario__input')
	let resposta = document.querySelector('#ul-resposta')

	resposta.innerHTML = ""

	numero.forEach(numero => {
		let li = document.createElement('li')

		if (numero.value === "")
			li.innerText = 'Você não digitou um número!'
		else
			li.innerHTML = '<strong>' + numero.value + '</strong> - ' + Math.pow(numero.value, 2)

		resposta.appendChild(li)
	})
})