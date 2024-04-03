function findWords(inputString, dictionary) {
    // Function to count the frequency of each letter in a string
    var countLetters = function (word) {
        var count = {};
        for (var _i = 0, word_1 = word; _i < word_1.length; _i++) {
            var letter = word_1[_i];
            if (!count[letter]) {
                count[letter] = 0;
            }
            count[letter]++;
        }
        return count;
    };
    // Count the frequency of each letter in the input string
    var inputCount = countLetters(inputString);
    var result = [];
    dictionary.forEach(function (word) {
        var wordCount = countLetters(word);
        var canForm = true;
        // Check if the word can be formed
        for (var letter in wordCount) {
            if (!inputCount[letter] || inputCount[letter] < wordCount[letter]) {
                canForm = false;
                break;
            }
        }
        if (canForm) {
            result.push(word);
        }
    });
    return result;
}
// Example usage
console.log(findWords("ate", ["ate", "eat", "tea", "dog", "do", "god", "goo", "go", "good"]));
console.log(findWords("oogd", ["ate", "eat", "tea", "dog", "do", "god", "goo", "go", "good"]));
console.log(findWords("apple", ["app", "lap", "leap", "peal", "plea", "pale", "ape"]));
// Expected output: ["app", "leap", "peal", "plea", "pale", "ape"]
console.log(findWords("xyz", ["a", "b", "c"]));
// Expected output: []
console.log(findWords("letters", ["let", "tel", "tree", "reset", "street", "tester", "reel"]));
// Expected output: ["let", "tel", "tree", "reel"]
console.log(findWords("characteristics", ["char", "character", "is", "stic", "tics", "aristocrat"]));
// Expected output: ["char", "is", "tics"]
console.log(findWords("definition", ["fine", "deft", "note", "define", "tone", "dine"]));
// Expected output: ["fine", "deft", "define", "dine"]
console.log(findWords("listen", ["silent", "listen", "enlist", "tinsel", "inlets", "islet"]));
// Expected output: ["silent", "listen", "enlist", "tinsel", "inlets", "islet"]
