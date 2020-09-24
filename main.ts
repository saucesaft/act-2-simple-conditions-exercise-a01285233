let temperature = 0
basic.forever(function () {
    temperature = input.temperature()
    if (temperature == 10) {
        basic.showNumber(temperature)
        basic.showString("Ski time!")
    } else if (temperature == 20) {
        basic.showNumber(temperature)
        basic.showString("Picnic time!")
    } else if (temperature == 30) {
        basic.showNumber(temperature)
        basic.showString("Ski time!")
    } else if (temperature == 40) {
        basic.showNumber(temperature)
        basic.showString("It is better to stay at home")
    } else {
        basic.showNumber(temperature)
    }
})
