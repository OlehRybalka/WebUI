describe("Envelopes testing", function() {
    it("width/length values should be valid", function() {
        var value1 = 3;
        var value2 = 3;
        expect(validateEnvelope(value1,value2)).toBeTruthy()
    });
    
    it("avoid invalid values", function() {
        var value1 = 'asd';
        var value2 = 3;
        expect(validateEnvelope(value1,value2)).toBeFalsy()
    });
});
