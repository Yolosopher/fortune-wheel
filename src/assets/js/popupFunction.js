const togglePopup = (on=true) => {
	let popup = document.querySelector('.resultpopup')
	let popup__bg = document.querySelector('.resultpopup__bg')
	if (on) {
		popup.classList.add('toggled')
		popup__bg.classList.add('toggled')
	} else {
		popup.classList.remove('toggled')
		popup__bg.classList.remove('toggled')
	}
}
const popupFunction = (callback, winnerNum, winnerColor) => {
	togglePopup()
	const winnerNumEl = document.getElementById('winnernum')
	winnerNumEl.style.backgroundColor = winnerColor
    winnerNumEl.innerText = winnerNum
	const resetwheelBtn = document.getElementById('resetwheelbtn')
	resetwheelBtn.addEventListener('click', () => {
		callback()
		togglePopup(false)
	})
}

export default popupFunction
