const audioContext = new AudioContext()

const NOTE_DETAILS = [
  { note: "C", key: "A", frequency: 261.626, active: false },
  { note: "Db", key: "W", frequency: 277.183, active: false },
  { note: "D", key: "S", frequency: 293.665, active: false },
  { note: "Eb", key: "E", frequency: 311.127, active: false },
  { note: "E", key: "D", frequency: 329.628, active: false },
  { note: "F", key: "F", frequency: 349.228, active: false },
  { note: "Gb", key: "T", frequency: 369.994, active: false },
  { note: "G", key: "G", frequency: 391.995, active: false },
  { note: "Ab", key: "Y", frequency: 415.305, active: false },
  { note: "A", key: "H", frequency: 440, active: false },
  { note: "Bb", key: "U", frequency: 466.164, active: false },
  { note: "B", key: "J", frequency: 493.883, active: false },
  { note: "X", key: "K", frequency: 523.250, active: false },
  { note: "Xb", key: "O", frequency: 554.370, active: false },
  { note: "Y", key: "L", frequency: 587.330, active: false },
]

document.addEventListener("keydown", e => {
    if(e.repeat) return
    const keyboardKey = e.code
    const nodeDetail = getNodeDetail(keyboardKey)

    if(nodeDetail == null) return
    nodeDetail.active = true;
    playNotes()

})

document.addEventListener("keyup", e => {
    const keyboardKey = e.code
    const nodeDetail = getNodeDetail(keyboardKey)

    if(nodeDetail == null) return

    nodeDetail.active = false;
    playNotes()
})

function getNodeDetail(keyboardKey){
    return NOTE_DETAILS.find(n => `Key${n.key}` === keyboardKey)
}

function playNotes(){
    NOTE_DETAILS.forEach(n => {
        const keyElement = document.querySelector(`[data-note="${n.note}"]`)
        keyElement.classList.toggle("active",n.active)

        if(n.oscillator != null){
            n.oscillator.stop()
            n.oscillator.disconnect()
        }
    })    


const activeNotes = NOTE_DETAILS.filter(n => n.active)

const gain = 1 / activeNotes.length

activeNotes.forEach(n => {
    startNote(n, gain)
})

}

function startNote(nodeDetail, gain){
    const gainNode = audioContext.createGain()
    gainNode.gain.value = gain
    const oscillator = audioContext.createOscillator()
    oscillator.frequency.value = nodeDetail.frequency
    oscillator.type = 'sine'
    oscillator.connect(audioContext.destination)
    oscillator.start()
    nodeDetail.oscillator = oscillator
}