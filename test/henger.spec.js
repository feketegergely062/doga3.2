describe('henger test', ()=>{
    it('1,200', () => {
        let act = calcSurface(1,200);
        expect(act).toBeCloseTo(1262.9)
    });
})