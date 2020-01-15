import { isEven } from './utils.ts';

describe('array methods', () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    it('checking membership in array', () => {
        numbers.every(n => n % 2 === 0);
    });

    it('checking membership in array: all', () => {
        const allEvens = numbers.every(isEven);
        expect(allEvens).toBe(false);
    });

    it('checking membership in array: all', () => {
        const someEvens = numbers.some(isEven);
        expect(someEvens).toBe(true);
    });

    it('less efficient loop', () => {
        let total = 0;
        numbers.forEach(n => total += n);
        expect(total).toBe(55);
    });

    it('map: create new arrays', () => {
        function doubleIt(n: number) {
            return n * 2;
        }
        const doubled = numbers.map(doubleIt);

        expect(doubled).toEqual([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]);
    });

    it('has a filter', () => {

    });
});

describe('two loops', () => {
    it('for in loop', () => {
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const total = 0;
        // for (const num in numbers) {
        //     total += num;
        // }

        // expect(total).toBe(45);
        // meant to enumerate props in object

        const book = {
            title: 'Hyperobjects',
            author: 'Morton'
        };
        for (const prop in book) {
            console.log(`Book's ${prop} is ${book[prop]}`);
        }
    });
    // for of loop
    it('for of loop', () => {
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        let total = 0;
        for (const num of numbers) {
            total += num;
        }
        expect(total).toBe(45);
    });


});
