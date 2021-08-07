const welcome = () => {
	const toanimates = [...document.querySelectorAll('.toanimate')]
	const lines = [...document.querySelectorAll('.line')]

	lines.forEach((line, i) => {
		line.style.setProperty('--delay-ratio', i)
	})

	const contentSlide = (ms) => {
		setTimeout(() => {
			toanimates[1].classList.add('animend')
		}, ms)
	}

	window.addEventListener('load', (event) => {
		toanimates.forEach((each, i) => {
			setTimeout(() => {
				each.classList.add('animstart')
				if (i === 0) {
					setTimeout(() => {
						each.classList.add('animend')
					}, 3000)
				}
			}, i * 2500)
			setTimeout(() => {
				lines.forEach((line, i) => {
					line.classList.add('shown')
					if (i === lines.length - 1) {
						contentSlide(6100 + 3000)
					}
				})
			}, 4000)
		})
	})
}

export default welcome
