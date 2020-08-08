let digits: number[] = []
let wert = 0
let z = 0
let y = 0
let einer: number[] = []
let zehner: number[] = []
let j = 0
function digitize (d: number) {
    if (d == 1) {
        digits = [10]
        digits[0] = 0
        digits[1] = 0
        digits[2] = 0
        digits[3] = 0
        digits[4] = 0
        digits[5] = 1
        digits[6] = 1
        digits[7] = 1
        digits[8] = 1
        digits[9] = 1
    }
    if (d == 2) {
        digits = [10]
        digits[0] = 1
        digits[1] = 0
        digits[2] = 1
        digits[3] = 1
        digits[4] = 1
        digits[5] = 1
        digits[6] = 1
        digits[7] = 1
        digits[8] = 0
        digits[9] = 1
    }
    if (d == 3) {
        digits = [10]
        digits[0] = 1
        digits[1] = 0
        digits[2] = 1
        digits[3] = 0
        digits[4] = 1
        digits[5] = 1
        digits[6] = 1
        digits[7] = 1
        digits[8] = 1
        digits[9] = 1
    }
    if (d == 4) {
        digits = [10]
        digits[0] = 1
        digits[1] = 1
        digits[2] = 1
        digits[3] = 0
        digits[4] = 0
        digits[5] = 1
        digits[6] = 1
        digits[7] = 1
        digits[8] = 1
        digits[9] = 1
    }
    if (d == 5) {
        digits = [10]
        digits[0] = 1
        digits[1] = 1
        digits[2] = 1
        digits[3] = 0
        digits[4] = 1
        digits[5] = 1
        digits[6] = 0
        digits[7] = 1
        digits[8] = 1
        digits[9] = 1
    }
    if (d == 6) {
        digits = [10]
        digits[0] = 1
        digits[1] = 1
        digits[2] = 1
        digits[3] = 1
        digits[4] = 1
        digits[5] = 1
        digits[6] = 0
        digits[7] = 1
        digits[8] = 1
        digits[9] = 1
    }
    if (d == 7) {
        digits = [10]
        digits[0] = 1
        digits[1] = 0
        digits[2] = 0
        digits[3] = 1
        digits[4] = 1
        digits[5] = 1
        digits[6] = 1
        digits[7] = 1
        digits[8] = 0
        digits[9] = 0
    }
    if (d == 8) {
        digits = [10]
        digits[0] = 1
        digits[1] = 1
        digits[2] = 0
        digits[3] = 1
        digits[4] = 1
        digits[5] = 1
        digits[6] = 1
        digits[7] = 0
        digits[8] = 1
        digits[9] = 1
    }
    if (d == 9) {
        digits = [10]
        digits[0] = 1
        digits[1] = 1
        digits[2] = 1
        digits[3] = 0
        digits[4] = 1
        digits[5] = 1
        digits[6] = 1
        digits[7] = 1
        digits[8] = 1
        digits[9] = 1
    }
    if (d == 0) {
        digits = [10]
        digits[0] = 1
        digits[1] = 1
        digits[2] = 1
        digits[3] = 1
        digits[4] = 1
        digits[5] = 1
        digits[6] = 1
        digits[7] = 1
        digits[8] = 1
        digits[9] = 1
    }
}
basic.forever(function () {
    wert = 90
    z = Math.round(wert / 10 - 0.5)
    y = wert - z * 10
    led.enable(true)
    einer = [10]
    zehner = [10]
    digitize(z)
    zehner = digits
    digitize(y)
    einer = digits
    j = -1
    for (let index = 0; index < 10; index++) {
        j += 1
        if (zehner[j] == 1) {
            if (j < 5) {
                led.plot(0, j)
            } else {
                led.plot(1, j - 5)
            }
        }
    }
    j = -1
    for (let index = 0; index < 10; index++) {
        j += 1
        if (einer[j] == 1) {
            if (j < 5) {
                led.plot(3, j)
            } else {
                led.plot(4, j - 5)
            }
        }
    }
})
