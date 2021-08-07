const playSoundEffect = (miscname) => {
    let spinMisc = document.querySelector(`audio[src="assets/misc/${miscname}.wav"]`)
    spinMisc.play()
}

export default playSoundEffect