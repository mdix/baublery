"use strict"
function bitFlipsNeeded(int1, int2) {
    if (int1 === int2) return 0

    const bin1Temp = int1.toString(2).split('')
    const bin2Temp = int2.toString(2).split('')

    const bin1 = bin1Temp.length > bin2Temp.length ? bin1Temp : bin2Temp
    const bin2 = bin1Temp.length > bin2Temp.length ? bin2Temp : bin1Temp

    // pad shorter one if necessary
    while (bin2.length !== bin1.length) {
        bin2.unshift('0')
    }

    return bin1.reduce((previous, current, index) => {
        return (current !== bin2[index]) ? parseInt(previous) + 1 : parseInt(previous)
    }, 0)
}

// TESTS
;(function testBitFlipsNeeded() {
    {
        let flips = bitFlipsNeeded(1, 2)
        if (flips != 2) console.log(`Expected 2 flips, but got ${flips}`)
    }
    {
        let flips = bitFlipsNeeded(1, 3)
        if (flips != 1) console.log(`Expected 1 flip, but got ${flips}`)
    }
    {
        let flips = bitFlipsNeeded(10, 20)
        if (flips != 4) console.log(`Expected 4 flips, but got ${flips}`)
    }
    {
        let flips = bitFlipsNeeded(399, 5120)
        if (flips != 8) console.log(`Expected 8 flips, but got ${flips}`)
    }
})()