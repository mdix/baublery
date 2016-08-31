"use strict"
const PermutationFinder = function() {
    return this
}

PermutationFinder.prototype.getPermutations = function(inputString) {
    const permutationOrder = [
        '0123', '0132', '0213', '0231', '0312', '0321',
        '1023', '1032', '1203', '1230', '1302', '1320',
        '2013', '2031', '2103', '2130', '2301', '2310',
        '3012', '3021', '3102', '3120', '3201', '3210'
    ]

    return permutationOrder.map((order) => {
        return inputString[order[0]] + inputString[order[1]] + inputString[order[2]] + inputString[order[3]]
    })
}

PermutationFinder.prototype.findPermutations = function(haystack, needle) {
    const out = []
    const possiblePermutations = this.getPermutations(needle)

    let pos = 0
    while (pos < (haystack.length - (needle.length - 1))) {
        const sample = haystack.substr(pos, needle.length)

        if (possiblePermutations.includes(sample)) {
            out.push([pos + 1, pos + needle.length, sample])
        }
        pos++
    }

    return out
}

// TESTS
{
    const permutationFinder = new PermutationFinder()

    ;(function testGetPermutationsReturnsAllPossiblePermutations() {
        const possiblePermutations = ['abcd', 'abdc', 'acbd', 'acdb', 'adbc', 'adcb', 'bacd', 'bcad', 'bcda', 'bdac', 'bdca', 'badc', 'cabd', 'cbad', 'cdab', 'cadb', 'cdba', 'cdba', 'dacb', 'dabc', 'dcab', 'dcba', 'dbac', 'dbca']

        possiblePermutations.forEach((permutation) => {
            if (!permutationFinder.getPermutations('abcd').includes(permutation)) {
                console.log('Missing: ' + permutation)
            }
        })
    })()

    ;(function testFindPermutationsFindsAllPermutations() {
        {
            let output = permutationFinder.findPermutations('ac', 'abcd')
            if (output.length !== 0) {console.log('should find nothing, but found ' + output.length)}
        }
        {
            let output = permutationFinder.findPermutations('abcd', 'abcd')
            if (output.length !== 1) {console.log('should only find 2, but found ' + output.length)}
        }
        {
            let output = permutationFinder.findPermutations('abcda', 'abcd')
            if (output.length !== 2) {console.log('should only find 2, but found ' + output.length)}
        }
        {
            let output = permutationFinder.findPermutations('abcdab', 'abcd')
            if (output.length !== 3) {console.log('should only find 3, but found ' + output.length)}
        }
        {
            let output = permutationFinder.findPermutations('abcdabc', 'abcd')
            if (output.length !== 4) {console.log('should only find 4, but found ' + output.length)}
        }
    })()
}
