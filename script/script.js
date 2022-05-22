document.querySelector('#botao-mobile').addEventListener('click', exibirMenu)
document.querySelector('#botao-mobile').addEventListener('touchstart', exibirMenu)

function exibirMenu(event) {
	if (event.type === 'touchstart')
		event.preventDefault()

	let navegacao = document.querySelector('#navegacao')
	navegacao.classList.toggle('ativado')

	let ativado = navegacao.classList.contains('ativado')
	event.currentTarget.setAttribute('aria-expanded', ativado)

	if (ativado)
		event.currentTarget.setAttribute('aria-label', 'Fechar Menu')
	else
		event.currentTarget.setAttribute('aria-label', 'Abrir Menu')
}