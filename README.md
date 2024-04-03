# Weekend Health

take home challenge: https://weekendhealth.notion.site/Weekend-Health-Take-home-Challenge-327d5972824041829cf9ddc32cb7acd6

The `findWords` function is tasked with identifying all the words in a given dictionary that can be formed using some or all the letters from an input string. Each letter from the input string can be used at most once per word. This solution employs the following high-level strategy:

1 - Letter Frequency Count: At its core, the solution involves counting the frequency of each letter in the input string and comparing these counts to the letter frequencies required by each word in the dictionary.

2 - Implementation Steps:

Counting Input Letters: First, the function counts the occurrences of each letter in the input string. This count acts as a pool of available letters.
Iterating Over the Dictionary: The function then iterates over each word in the dictionary.
Counting Word Letters: For each word, it counts the occurrences of each letter.
Comparing Frequencies: The function compares the letter frequencies of the word against the available letters from the input string. If the word requires no more of any letter than is available in the input string, it can be formed.
Collecting Valid Words: Words that meet the criteria are collected and returned as an array.

3 - Key Functionalities:

Flexibility: This solution is flexible, capable of handling any set of lowercase English letters in both the input string and the dictionary.
Efficiency: While the solution iterates over each word in the dictionary and counts letters for each word, it is relatively efficient for moderate-sized dictionaries and input strings due to the simplicity of the operations involved.

4 - Outcome:

The function returns an array of all dictionary words that can be formed using the letters of the input string. This array could be empty if no words can be formed.

To run findWords file:

0 - `npm install -g typescript` (assuming typescript isnt already installed)

1 - `tsc findWords.ts`

2 - `node findWords.js`

### Time & Space Complexity:

Time:

1 - Counting letters in the input string: O(n) where n is the length of the input string, because each letter is visited once.

2 - Iterating over dictionary: O(m), where m is the number of words in the dictionary

Combining these two we get O(n + m) for the time complexity of this function.

Space:

1 - Storing letter counts: The space required to store the letter counts for the input string and for each word is O(1) in terms of the number of unique letters.

2 - Result Array: The space required for the result array depends on the number of words that can be formed and is at most O(m), where O(m) is the number of words in the dictionary (in the worst case, every word in the dictionary can be formed and needs to be stored).

Therefore, the overall space complexity is O(m), as the space to store letter counts is constant and does not depend on the input size, while the space for the output array is the most significant factor that scales with the size of the input dictionary.
