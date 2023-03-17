/**
 * Example test file after deployment.
 */
console.dir('hellle')
describe(`Running functions`, () => {

    test('function add', () => {
        const result = add(4,5);
        expect(result).toBe(9);
    });

    /**
     * More tests...
     */
});
