describe("Show bigger task testing", function() {
    it("quantity values should be valid", function() {
        var value = 33;
        expect(validateLine(value)).toBeTruthy()
      });
    
    it("avoid invalid values", function() {
        var value = 'asd';
        expect(validateTable(value)).toBeFalsy()
    });
});