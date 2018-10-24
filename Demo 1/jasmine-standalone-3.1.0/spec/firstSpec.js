describe("ChessBoard testing", function() {
    it("rows/cals values should be valid", function() {
        var value = 33;
        expect(validateTable(value)).toBeTruthy()
      });
    
    it("avoid invalid values", function() {
        var value = 'asd';
        expect(validateTable(value)).toBeFalsy()
    });
});
