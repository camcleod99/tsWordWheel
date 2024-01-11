import { describe, expect, test } from '@jest/globals';
import sum from "../ex/calculator";
// const sum: ((a: number, b: number) => number) = require('../ex/calculator');

describe('sum module', ()=>{
    test('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
    });
});
