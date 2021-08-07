const playSoundEffect = (miscname) => {
    let spinMisc = new Audio(`assets/misc/${miscname}.wav`)
    spinMisc.play()
}

export default playSoundEffect