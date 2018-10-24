describe("Fibo task testing", function() {
    it("quantity values should be valid", function() {
        var value = 33;
        expect(validateFibo(value)).toBeTruthy()
      });
    
    it("avoid invalid values", function() {
        var value = 'asd';
        expect(validateFibo(value)).toBeFalsy()
    });
});