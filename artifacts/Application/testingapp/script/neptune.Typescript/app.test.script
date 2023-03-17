/**
 * Example test file after deployment.
 */

import axios from "axios";
import * as https from 'https';

const serverUrl = process.env.DXP_OE_SERVER_URL;
const serverToken = process.env.DXP_OE_SERVER_TOKEN;

const healtzUrl = (server: string) => `${server}/healthz`;

const httpsAgent = new https.Agent({
    rejectUnauthorized: false
});

describe(`Running functions`, () => {

    test('function add', () => {
        const result = add(4,5);
        expect(result).toBe(9);
    });

    /**
     * More tests...
     */
});
