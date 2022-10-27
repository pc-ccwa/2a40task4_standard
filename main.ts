let x_value = 0
let y_value = 0
input.onButtonPressed(Button.A, function () {
    x_value = 0
    while (x_value <= 4) {
        led.plot(x_value, 0)
        x_value += 1
        basic.pause(200)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    y_value = 0
    while (y_value <= 4) {
        led.plot(0, y_value)
        y_value += 1
        basic.pause(200)
        basic.clearScreen()
    }
})
basic.forever(function () {
	
})
