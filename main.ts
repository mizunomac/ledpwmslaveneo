radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        LightUP()
    } else if (receivedNumber == 2) {
        LightDown()
    }
})
input.onButtonPressed(Button.A, function () {
    LightUP()
})
function LightUP () {
    LightLevel = LightLevel * 1.41421356
    if (LightLevel > 1023) {
        LightLevel = 1023
    }
    if (LightLevel == 0) {
        LightLevel = 1
    }
    pins.analogWritePin(AnalogPin.P1, LightLevel)
}
function LightDown () {
    LightLevel = LightLevel / 1.41421356
    if (LightLevel < 1) {
        LightLevel = 0
    }
    pins.analogWritePin(AnalogPin.P1, LightLevel)
}
input.onButtonPressed(Button.B, function () {
    LightDown()
})
let LightLevel = 0
LightLevel = 64
pins.analogWritePin(AnalogPin.P1, LightLevel)
radio.setGroup(123)
let strip = neopixel.create(DigitalPin.P0, 17, NeoPixelMode.RGB_RGB)
strip.showRainbow(1, 360)
basic.pause(1000)
let range2 = strip.range(0, 1)
let range22 = strip.range(1, 1)
let range3 = strip.range(2, 1)
range2.showColor(neopixel.colors(NeoPixelColors.Red))
range22.showColor(neopixel.colors(NeoPixelColors.Green))
range3.showColor(neopixel.colors(NeoPixelColors.Blue))
strip.clear()
basic.clearScreen()
basic.forever(function () {
    for (let index = 0; index < 8; index++) {
        strip.showRainbow(90, 270)
        basic.pause(500)
        strip.showRainbow(45, 360)
        basic.pause(500)
        strip.showRainbow(135, 360)
        basic.pause(500)
        strip.showRainbow(180, 360)
        basic.pause(500)
        strip.showRainbow(225, 400)
        basic.pause(500)
        strip.showRainbow(270, 400)
        basic.pause(500)
        strip.showRainbow(315, 444)
        basic.pause(500)
    }
})
