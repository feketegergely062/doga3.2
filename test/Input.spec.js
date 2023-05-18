describe('bevitel teszt, szám és betű', () => {
    it('8', () => {
        let act = isGoodInput(8)
        expect(true).toBe(act);
    });
    it('xy', () => {
        let act = isGoodInput(xy)
        expect(false).toBe(act);
    });
    it('8x', () => {
        let act = isGoodInput("8x")
        expect(false).toBe(act);
    });

})