
const {format_plural} = require('../utils/helpers');

test('format_plural() returns a pluralized word', () => {
    const word1 = format_plural('apple', 1);
    const word2 = format_plural('panda', 2);

    expect(word1).toBe('apple');
    expect(word2).toBe('pandas');
});