import QUERY from '../src/components/services/QUERY.js';
const test = QUnit.test;

QUnit.module('Query String Parser');

test('converts query string to object', assert => {
    // arrange
    const query = 'pokemon=tangela&page=1'; 
    const expected = {
        pokemon: 'tangela',
        page: '1'
    };

    // act
    const queryProps = QUERY.parse(query);

    // assert
    assert.deepEqual(queryProps, expected);
});

test('converts object to query string', assert => {
    const queryProps = {
        pokemon: 'tangela',
        page: '1'
    };

    const expected = 'pokemon=tangela&page=1'; 
    
    // act
    const query = QUERY.stringify(queryProps);

    // assert
    assert.deepEqual(query, expected);
});