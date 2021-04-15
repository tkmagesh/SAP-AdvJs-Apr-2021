describe('A Calculator', function(){
    it('should add 2 numbers', function(){
        //Arrange
            var n1 = 10,
                n2 = 20,
                expectedResult = 30;

        //Act
            var result = add(n1, n2);

        //Assert
            expect(result).toBe(expectedResult);
    });
    it('should add numbers in string format', function(){
        //Arrange
            var n1 = 10,
                n2 = '20',
                expectedResult = 30;

        //Act
            var result = add(n1, n2);

        //Assert
            expect(result).toBe(expectedResult);
    });
    it('should ignore non-numeric strings', function(){
        //Arrange
            var n1 = 10,
                n2 = 'abc',
                expectedResult = 10;

        //Act
            var result = add(n1, n2);

        //Assert
            expect(result).toBe(expectedResult);
    });
    it('should add array of numbers', function(){
        //Arrange
            var n1 = [10,20],
                n2 = [30,40],
                expectedResult = 100;

        //Act
            var result = add(n1, n2);

        //Assert
            expect(result).toBe(expectedResult);
    });
    it('should add array of numbers in string format', function(){
        //Arrange
            var n1 = [10,20],
                n2 = [30,'40'],
                expectedResult = 100;

        //Act
            var result = add(n1, n2);

        //Assert
            expect(result).toBe(expectedResult);
    });
    it('should add array of non-numeric strings', function(){
        //Arrange
            var n1 = [10,20],
                n2 = [30,'abc'],
                expectedResult = 60;

        //Act
            var result = add(n1, n2);

        //Assert
            expect(result).toBe(expectedResult);
    });
    it('should add nested array of values', function(){
        //Arrange
            var n1 = [10,20],
                n2 = [[30,'40', 'abc'], 50],
                expectedResult = 150;

        //Act
            var result = add(n1, n2);

        //Assert
            expect(result).toBe(expectedResult);
    });
    it('should add functions returning nested array of numbers and strings', function(){
        //Arrange
            var expectedResult = 150;

        //Act
            var result = add(function(){ return [10,20];} , function(){ return [[30,'40', 'abc'], 50]; })

        //Assert
            expect(result).toBe(expectedResult);
    });
    it('should add array of functions returning nested array of numbers and strings', function(){
        //Arrange
            var expectedResult = 150;

        //Act
            var result = add([function(){ return [10,20];} , function(){ return [[30,'40', 'abc'], 50]; }])

        //Assert
            expect(result).toBe(expectedResult);
    });
    it('should add 1 number', function(){
        //Arrange
            var n1 = 10,
                expectedResult = 10;

        //Act
            var result = add(n1);

        //Assert
            expect(result).toBe(expectedResult);
    });
    it('should return 0 by default', function(){
        //Arrange
            var expectedResult = 0;

        //Act
            var result = add();

        //Assert
            expect(result).toBe(expectedResult);
    });
    it('should add more than 2 numbers', function(){
        //Arrange
            var expectedResult = 150;

        //Act
            var result = add(10,20,30,40,50);

        //Assert
            expect(result).toBe(expectedResult);
    });
});