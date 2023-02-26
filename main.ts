let signal = 0
let tempo = 0
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        music.setVolume(47)
        radio.sendNumber(0)
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.giggle), SoundExpressionPlayMode.UntilDone)
        basic.showIcon(IconNames.Skull)
        basic.showIcon(IconNames.Heart)
        basic.clearScreen()
    } else {
        signal = radio.receivedPacket(RadioPacketProperty.SignalStrength)
        tempo = 220 + signal
        led.setBrightness(290 + signal * 2)
        if (signal < -80) {
            music.setVolume(226)
            music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 500, 500, 216, 117, 800, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
            music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 500, 500, 216, 117, 800, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
            basic.showIcon(IconNames.Heart)
            basic.showIcon(IconNames.SmallHeart)
            basic.showIcon(IconNames.Heart)
            basic.showIcon(IconNames.SmallHeart)
            basic.clearScreen()
        } else if (signal < -60) {
            music.setVolume(239)
            music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 954, 508, 255, 157, 500, SoundExpressionEffect.Warble, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
            music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 954, 508, 255, 157, 500, SoundExpressionEffect.Warble, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
            music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 954, 508, 255, 157, 500, SoundExpressionEffect.Warble, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
            basic.showIcon(IconNames.Heart)
            basic.showIcon(IconNames.SmallHeart)
            basic.showIcon(IconNames.Skull)
            basic.showIcon(IconNames.SmallHeart)
            basic.showIcon(IconNames.Heart)
            basic.clearScreen()
        } else {
            music.setVolume(255)
            music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 1221, 1311, 255, 184, 400, SoundExpressionEffect.Warble, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
            music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 1221, 1311, 255, 184, 400, SoundExpressionEffect.Warble, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
            music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 1221, 1311, 255, 184, 400, SoundExpressionEffect.Warble, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
            music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 1221, 1311, 255, 184, 400, SoundExpressionEffect.Warble, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
            basic.showIcon(IconNames.Heart)
            basic.showIcon(IconNames.Skull)
            basic.showIcon(IconNames.Heart)
            basic.showIcon(IconNames.Skull)
            basic.showIcon(IconNames.Heart)
            basic.showIcon(IconNames.Skull)
            basic.clearScreen()
        }
    }
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Skull)
    basic.showIcon(IconNames.Diamond)
    basic.showIcon(IconNames.Skull)
    basic.clearScreen()
    radio.sendNumber(1)
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    basic.showIcon(IconNames.Skull)
    basic.showIcon(IconNames.Diamond)
    basic.showIcon(IconNames.Skull)
    basic.clearScreen()
    radio.sendNumber(1)
})
basic.forever(function () {
    radio.setGroup(1)
    radio.setTransmitPower(6)
})
