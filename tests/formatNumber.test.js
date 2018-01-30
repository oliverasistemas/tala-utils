const {formatNumber} = require('../index');

test('Formatea un numero', () => {
    expect(formatNumber(1000)).toBe('1.000');
});