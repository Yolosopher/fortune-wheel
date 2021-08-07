import playSoundEffect from './playSoundEffect'
import popupFunction from './popupFunction'

const spinnner = () => {
	const wheel = document.getElementById('wheel')
	const spinnerBtn = document.getElementById('spin')
	let isWheeling = false
	let deg = 0
	const winner = (degreee) => {
		let degree = +degreee
		let winner
		if (degree === 0 || degree === 360) {
			winner = 1
		} else if (degree >= 300) {
			winner = 1
		} else if (degree >= 240) {
			winner = 6
		} else if (degree >= 180) {
			winner = 5
		} else if (degree >= 120) {
			winner = 4
		} else if (degree >= 60) {
			winner = 3
		} else {
			winner = 2
		}

		return winner
	}
	const resetWheel = () => {
		wheel.style.transition = 'none'
		wheel.style.transform = `rotate(0deg)`
	}
	spinnerBtn.addEventListener('click', () => {
		deg = 0
		isWheeling = true
		setTimeout(() => {
			resetWheel()
			playSoundEffect('wheel')
			spinnerBtn.style.pointerEvents = 'none'
			deg = Math.floor(5000 + Math.random() * 5000)
			wheel.style.transition = 'all 5s ease-out'
			wheel.style.transform = `rotate(${deg}deg)`
		}, 1)
	})

	wheel.addEventListener('transitionend', () => {
		let pattern = /\D*(\d+)(\d+)?\D*/
		let transformVal = Number(
			wheel.style.getPropertyValue('transform').match(pattern)[1]
		)
		let wheelDegreeLeft = 360 - (transformVal % 360)
		wheel.style.transition = '5s ease-out'
		spinnerBtn.style.pointerEvents = 'all'
		if (isWheeling) {
			setTimeout(() => {
				const winnerEl = document.querySelector(
					`.wheel__number[data-num="${winner(wheelDegreeLeft)}"]`
				)
				let winnerColor = getComputedStyle(
					winnerEl,
					`::nth-of-type(${winner(wheelDegreeLeft)})`
				).getPropertyValue('--bgc')

				winnerEl.classList.add('winner')
				setTimeout(() => {
					winnerEl.classList.remove('winner')
				}, 501)
				playSoundEffect('win')
				setTimeout(() => {
					popupFunction(
						resetWheel,
						winner(wheelDegreeLeft),
						winnerColor
					)
				}, 501 + 220)
			}, 200)

			isWheeling = false
		}
	})
}

export default spinnner
