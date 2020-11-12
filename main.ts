let randomNum = 0
music.setVolume(208)
basic.showLeds(`
    # # . # #
    # # . # #
    . . . . .
    . . # . .
    . . # . .
    `)
basic.forever(function () {
    music.playMelody("C5 C5 - C5 C5 - C5 - ", 107)
})
basic.forever(function () {
    randomNum = randint(0, 4)
    basic.pause(2000)
})
basic.forever(function () {
    if (randomNum == 0) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 255)
    } else {
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 138)
        DFRobotMaqueenPlus.mototStop(Motors.M2)
    }
})
