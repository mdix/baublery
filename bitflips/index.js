"use strict"
function bitFlipsNeeded(int1, int2) {
    if (int1 === int2) return 0

    return (int1 ^ int2).toString(2).match(/1/g).length;
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