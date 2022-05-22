let maiorIdade = 0
let menorIdade = 0

document.querySelector('#btn-adicionar').addEventListener('click', () => {
	let idade = document.querySelector('.formulario__input')
	let maior = document.querySelector('#resposta-maior-idade')
	let menor = document.querySelector('#resposta-menor-idade')

	if (idade.value < 0 || idade.value === "")
		document.querySelector('.formulario__erro').innerText = 'idade inválida!'
	else if (idade.value < 18) {
		document.querySelector('.formulario__erro').innerText = ''
		menorIdade++
	} else {
		document.querySelector('.formulario__erro').innerText = ''
		maiorIdade++
	}

	maior.innerHTML = 'Número de pessoas <strong>maiores</strong> de idade: <strong> ' + maiorIdade + '</strong>'

	menor.innerHTML = 'Número de pessoas <strong>menores</strong> de idade: <strong> ' + menorIdade + '</strong>'
})