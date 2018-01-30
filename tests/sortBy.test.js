const {sortBy} = require('../index');

const col = [
    {name: 'Adolfo'},
    {name: 'German'}
]

test('Ordena una coleccion', () => {
    expect(sortBy(col, 'name', false)[0].name).toBe('German');

});