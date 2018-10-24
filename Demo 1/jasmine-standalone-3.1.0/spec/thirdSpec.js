describe("Triangulars testing", function() {  
    it("avoid invalid values", function() {
        var value = 'asd';
        expect(validateTriangulars(value)).toBeFalsy()
    });

    it("triangular should have a name", function() {
        var name = 'First';
        expect(validateName(name)).toBeTruthy()
    });
});