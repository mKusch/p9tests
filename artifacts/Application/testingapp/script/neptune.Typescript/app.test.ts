/**
 * Example test file after deployment.
 */

import { add } from '../neptune.Script/oJavascript.js';

describe(`Running functions`, () => {

    test('function add', () => {
        const result = add(4,5);
        expect(result).toBe(9);
    });
});
