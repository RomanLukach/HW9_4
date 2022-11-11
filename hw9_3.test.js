let calculateBonus = require('./hw9_3')

describe ('Bonus calculation - positive tests', () => {
    it('Positive tests', () => {
        expect(calculateBonus(10, 20)).toBe(30);
        expect(calculateBonus(40, 20)).toBe(50);  
        expect(calculateBonus(1000000, 2000000000000)).toBe(50)
        expect(calculateBonus(10.90, 20.05)).toBeCloseTo(30.95);
        expect(calculateBonus(40.001, 20.095)).toBe(50);  
    });
    it('Boundary values', () => {
        expect(calculateBonus(20, 29)).toBe(49);
        expect(calculateBonus(49, 0)).toBe(49);  
        expect(calculateBonus(0, 49)).toBe(49);
        expect(calculateBonus(20, 30)).toBe(50);  
        expect(calculateBonus(21, 30)).toBe(50)
    });
    it('Negative', () => {
        expect(calculateBonus(-20, -29)).toBe(-49);  
        expect(calculateBonus(20, -29)).toBe(-9);
//        expect(calculateBonus(20, '50')).toBe('fail');  
//        expect(calculateBonus(25, 'text')).toBe('fail');
    })
})