enum RadioMessage {
    message1 = 49434,
    msg2 = 42467
}
input.onButtonPressed(Button.A, function () {
    radio.sendMessage(RadioMessage.message1)
})
radio.onReceivedMessage(RadioMessage.msg2, function () {
    music.play(music.stringPlayable("B G B G - - B G ", 200), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("B G - - - - - - ", 200), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.B, function () {
    radio.sendMessage(RadioMessage.msg2)
})
radio.onReceivedMessage(RadioMessage.message1, function () {
    record.startRecording(record.BlockingState.Blocking)
    record.playAudio(record.BlockingState.Blocking)
})
radio.setGroup(1)
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . # . #
        # . . . #
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # . # #
        # # # # #
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
