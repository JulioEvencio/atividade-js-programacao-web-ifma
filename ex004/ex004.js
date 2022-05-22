document.querySelector('#btn-exibir').addEventListener('click', () => {
	let data = document.querySelector('.formulario__input')
	let resposta = document.querySelector('.resposta__paragrafo')
	let mes = null

	d = data.value.split('-')

	switch (parseInt(d[1])) {
		case 1:
			mes = 'Janeiro'
			break

		case 2:
			mes = 'Fevereiro'
			break

		case 3:
			mes = 'Março'
			break

		case 4:
			mes = 'Abril'
			break

		case 5:
			mes = 'Maio'
			break

		case 6:
			mes = 'Junho'
			break

		case 7:
			mes = 'Julho'
			break

		case 8:
			mes = 'Agosto'
			break

		case 9:
			mes = 'Setembro'
			break

		case 10:
			mes = 'Outubro'
			break

		case 11:
			mes = 'Novembro'
			break

		case 12:
			mes = 'Dezembro'
			break
	}

	if (mes == null)
		document.querySelector('.formulario__erro').innerText = 'Data inválida!'
	else {
		document.querySelector('.formulario__erro').innerText = ''
		resposta.innerText = d[2] + ' de ' + mes + ' de ' + d[0]
	}
})