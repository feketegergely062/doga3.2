describe('henger test', ()=>{
    it('1,200', () => {
        let act = calcSurface(1,200);
        expect(act).toBeCloseTo(1262.9)
    });
    it('8,400', () => {
        let act = calcSurface(8,400);
        expect(act).toBeCloseTo(20508.3)
    });
    it('9,500', () => {
        let act = calcSurface(9,500);
        expect(act).toBeCloseTo(28783.27)
    });
    it('9,-500', () => {
        let act = calcSurface(9,-500);
        expect(act).toBeCloseTo("hibás beviteli érték!")
    });

})