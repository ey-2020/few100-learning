describe('functions', () => {
    describe('declaring functions', () => {
        it('has 3 ways to do', () => {
            // 1. named


            // 2. anonymous - 2 syntax
            const add = function (a: number, b: number) {
                return a + b;
            };

            // 3. arrow
            const multiply = (a: number, b: number) => a * b;
            expect(add(3, 4)).toBe(7);
            expect(multiply(3, 4)).toBe(12);
        });
    });

    describe('arguments passed into function', () => {
        it('does not have overloading', () => {
            function formatName(first: string, last: string, mi?: string) {
                let firstPart = `${last}, ${first}`;
                if (mi) {
                    firstPart += ` ${mi}.`;
                }
                return firstPart;
            }

            expect(formatName('Han', 'Solo')).toBe('Solo, Han');
            expect(formatName('Han', 'Solo', 'D')).toBe('Solo, Han D.');
        });

        it('default params', () => {
            function add(a: number = 3, b: number = 5) {
                return a + b;
            }

            expect(add(2, 3)).toBe(5);
            expect(add(8)).toBe(13);
            expect(add(undefined, 8)).toBe(11);
        });

        it('uses rest operator', () => {
            function add(a: number, b: number, ...rest: number[]) {
                const firstTwo = a + b;
                return rest.reduce((s, n) => s + n, firstTwo);
            }

            expect(add(2, 2)).toBe(4);
            expect(add(1, 2, 3, 4, 5)).toBe(15);
        });
    });

    describe('higher order function', () => {
        it('basic syntax', () => {
            type stringModifier = (msg: string) => string;
            function logItOut(message: string, f: stringModifier) {
                console.log(`At ${new Date().toISOString()}: ${f(message)}`);
            }

            logItOut('Tacos!', (s: string) => s.toUpperCase());

            function decorate(x: string) {
                return `*** ${x} ***`;
            }

            logItOut('Burrito', decorate);
        });

    });

    describe('higher order functions', () => {
        // A function that takes one or more arguments that are functions and/or
        // return a function
        it('the basic syntax', () => {

            type StringModifier = (msg: string) => string;
            function logItOut(message: string, f: StringModifier) {
                console.log(`At ${new Date().toISOString()}: ${f(message)}`);
            }

            logItOut('Tacos', (s: string) => s.toUpperCase());

            function decorate(x: string) {
                return `***${x}***`;
            }

            logItOut('Burrito', decorate);
        });

        describe('HOF that returns a function', () => {

            it('with just a normal ', () => {
                // <element>content</element>

                function tagMaker(element: string, content: string) {
                    return `<${element}>${content}</${element}>`;
                }

                expect(tagMaker('customer', 'Bob Smith')).toBe('<customer>Bob Smith</customer>');
                expect(tagMaker('customer', 'Sue Jones')).toBe('<customer>Sue Jones</customer>');
            });

            it('oop version', () => {

                class TagMaker {
                    private element: string;

                    constructor(element: string) {
                        this.element = element;
                    }

                    make(content: string) {
                        return `<${this.element}>${content}</${this.element}>`;
                    }

                }

                const customerMaker = new TagMaker('customer');

                expect(customerMaker.make('Bob Smith')).toBe('<customer>Bob Smith</customer>');


            });

            it('how a functional programmer would do it.', () => {

                function tagMaker(element: string) {
                    return (content: string) => `<${element}>${content}</${element}>`;
                }

                const customerMaker = tagMaker('customer');

                expect(customerMaker('Bob Smith')).toBe('<customer>Bob Smith</customer>');
            });

        });
    });
});
