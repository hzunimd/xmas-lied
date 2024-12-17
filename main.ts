input.onButtonPressed(Button.A, function () {
    if (var_knopf == 0) {
        var_knopf = 1
    }
})
input.onGesture(Gesture.Shake, function () {
    var_knopf = 0
})
input.onButtonPressed(Button.AB, function () {
    var_knopf = 0
})
input.onButtonPressed(Button.B, function () {
    if (var_knopf == 0) {
        var_knopf = 2
    }
})
let var_knopf = 0
let var_durchgaenge = 0
var_knopf = 0
basic.showString("XMAS")
basic.showLeds(`
    . . . . .
    . # . # .
    # # . # #
    . # . # .
    . . . . .
    `)
basic.forever(function () {
    if (var_knopf == 0) {
        basic.showLeds(`
            . . . . .
            . # . # .
            # # . # #
            . # . # .
            . . . . .
            `)
    }
})
basic.forever(function () {
    if (input.temperature() >= 50) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . . . .
            . . # . .
            `)
        music.playTone(262, music.beat(BeatFraction.Half))
        music.playTone(330, music.beat(BeatFraction.Half))
    }
})
basic.forever(function () {
    if (var_knopf == 0) {
        basic.setLedColor(basic.rgb(25, 0, 0))
        basic.pause(100)
        basic.setLedColor(basic.rgb(0, 25, 0))
        basic.pause(100)
        basic.setLedColor(basic.rgb(0, 0, 25))
        basic.pause(100)
    }
})
basic.forever(function () {
    if (var_knopf == 2) {
        music.setTempo(56)
        basic.pause(500)
        basic.setLedColor(0xff0000)
        for (let var_durchgaenge3 = 0; var_durchgaenge3 <= 1; var_durchgaenge3++) {
            music.playTone(262, music.beat(BeatFraction.Half))
            music.playTone(349, music.beat(BeatFraction.Half))
            music.playTone(349, music.beat(BeatFraction.Quarter))
            music.playTone(392, music.beat(BeatFraction.Quarter))
            music.playTone(349, music.beat(BeatFraction.Quarter))
            music.playTone(330, music.beat(BeatFraction.Quarter))
            music.playTone(294, music.beat(BeatFraction.Half))
            music.playTone(294, music.beat(BeatFraction.Half))
            music.playTone(294, music.beat(BeatFraction.Half))
            music.playTone(392, music.beat(BeatFraction.Half))
            music.playTone(392, music.beat(BeatFraction.Quarter))
            music.playTone(440, music.beat(BeatFraction.Quarter))
            music.playTone(392, music.beat(BeatFraction.Quarter))
            music.playTone(349, music.beat(BeatFraction.Quarter))
            music.playTone(330, music.beat(BeatFraction.Half))
            music.playTone(262, music.beat(BeatFraction.Half))
            music.playTone(262, music.beat(BeatFraction.Half))
            if (var_durchgaenge3 == 0) {
                music.playTone(440, music.beat(BeatFraction.Half))
                music.playTone(440, music.beat(BeatFraction.Quarter))
                music.playTone(494, music.beat(BeatFraction.Quarter))
                music.playTone(440, music.beat(BeatFraction.Quarter))
                music.playTone(392, music.beat(BeatFraction.Quarter))
                music.playTone(349, music.beat(BeatFraction.Half))
                music.playTone(294, music.beat(BeatFraction.Half))
                music.playTone(262, music.beat(BeatFraction.Quarter))
                music.playTone(294, music.beat(BeatFraction.Half))
                music.playTone(392, music.beat(BeatFraction.Half))
                music.playTone(330, music.beat(BeatFraction.Half))
                music.playTone(349, music.beat(BeatFraction.Whole))
            } else {
                music.playTone(440, music.beat(BeatFraction.Half))
                music.playTone(440, music.beat(BeatFraction.Quarter))
                music.playTone(494, music.beat(BeatFraction.Quarter))
                music.playTone(440, music.beat(BeatFraction.Quarter))
                music.playTone(392, music.beat(BeatFraction.Quarter))
                music.playTone(349, music.beat(BeatFraction.Half))
                music.playTone(294, music.beat(BeatFraction.Half))
                music.playTone(262, music.beat(BeatFraction.Quarter))
                music.playTone(294, music.beat(BeatFraction.Half))
                music.playTone(392, music.beat(BeatFraction.Half))
                music.playTone(330, music.beat(BeatFraction.Half))
                music.playTone(349, music.beat(BeatFraction.Whole))
            }
        }
        basic.setLedColor(basic.rgb(0, 0, 0))
        var_knopf = 0
        basic.pause(1500)
    }
})
basic.forever(function () {
    if (var_knopf == 1) {
        music.setTempo(47)
        basic.pause(500)
        basic.setLedColor(0xff0000)
        for (let var_durchgaenge2 = 0; var_durchgaenge2 <= 1; var_durchgaenge2++) {
            music.playTone(330, music.beat(BeatFraction.Quarter))
            music.playTone(330, music.beat(BeatFraction.Quarter))
            music.playTone(330, music.beat(BeatFraction.Half))
            music.playTone(330, music.beat(BeatFraction.Quarter))
            music.playTone(330, music.beat(BeatFraction.Quarter))
            music.playTone(330, music.beat(BeatFraction.Half))
            music.playTone(330, music.beat(BeatFraction.Quarter))
            music.playTone(392, music.beat(BeatFraction.Quarter))
            music.playTone(262, music.beat(BeatFraction.Quarter))
            music.playTone(262, music.beat(BeatFraction.Eighth))
            music.playTone(294, music.beat(BeatFraction.Eighth))
            music.playTone(330, music.beat(BeatFraction.Whole))
            music.playTone(349, music.beat(BeatFraction.Quarter))
            music.playTone(349, music.beat(BeatFraction.Quarter))
            music.playTone(349, music.beat(BeatFraction.Quarter))
            music.playTone(349, music.beat(BeatFraction.Eighth))
            music.playTone(349, music.beat(BeatFraction.Eighth))
            music.playTone(349, music.beat(BeatFraction.Quarter))
            music.playTone(330, music.beat(BeatFraction.Quarter))
            music.playTone(330, music.beat(BeatFraction.Quarter))
            music.playTone(330, music.beat(BeatFraction.Eighth))
            music.playTone(330, music.beat(BeatFraction.Eighth))
            if (var_durchgaenge2 == 0) {
                music.playTone(330, music.beat(BeatFraction.Quarter))
                music.playTone(294, music.beat(BeatFraction.Quarter))
                music.playTone(294, music.beat(BeatFraction.Quarter))
                music.playTone(330, music.beat(BeatFraction.Quarter))
                music.playTone(294, music.beat(BeatFraction.Half))
                music.playTone(392, music.beat(BeatFraction.Half))
            } else {
                music.playTone(392, music.beat(BeatFraction.Quarter))
                music.playTone(392, music.beat(BeatFraction.Quarter))
                music.playTone(349, music.beat(BeatFraction.Quarter))
                music.playTone(294, music.beat(BeatFraction.Quarter))
                music.playTone(262, music.beat(BeatFraction.Whole))
            }
        }
        basic.setLedColor(basic.rgb(0, 0, 0))
        var_knopf = 0
        basic.pause(1500)
    }
})
basic.forever(function () {
    if (var_knopf > 0) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.pause(50)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . # . .
            . # . # .
            . . . . .
            `)
        basic.pause(50)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.pause(50)
        basic.showLeds(`
            # . # . #
            . # . # .
            # . # . #
            . # . # .
            # . # . #
            `)
        basic.pause(50)
        basic.showLeds(`
            # . # . #
            . . . . .
            # . . . #
            . . . . .
            # . # . #
            `)
        basic.pause(50)
    }
})
