let z = 0
let Liste = 0
let j = 0
let i2 = 0
basic.forever(function () {
    led.enable(true)
    z = 1
    if (z == 1) {
        Liste = 0
        Liste[0] = 0
        Liste[1] = 0
        Liste[2] = 0
        Liste[3] = 0
        Liste[4] = 0
        Liste[5] = 0
        Liste[6] = 0
        Liste[7] = 0
        Liste[8] = 0
        Liste[9] = 0
    }
    j = -1
    for (let index = 0; index < 5; index++) {
        j = -1
        i2 += 1
        for (let index = 0; index < 2; index++) {
            j += 1
            if (Liste[i2] == 1) {
                led.plot(i2, j)
            }
        }
    }
})
