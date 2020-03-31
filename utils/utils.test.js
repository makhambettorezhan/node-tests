const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {
    describe('#add', () => {
        it('should add two numbers', () => {
            var res = utils.add(33, 11);
            
            //if(res != 44) throw new Error(`Expected 44, but got ${res}`);
                    
            expect(res).toBe(44).toBeA('number'); 
        });
    });
    
    
    it('should square a number', () => {
        var res = utils.square(3);
        
        expect(res).toBe(9).toBeA('number');
    });
    
    it('should expect some values', () => {
        //expect(12).toNotBe(11);
        var object = { name: 'Max' };
        expect(object).toBe(object);
    
        expect({
            name: 'Max',
            age: 21,
            address: 'Tsevetochnaya St. 16/2'
        }).toInclude({
            age: 21
        });
    });
    
    
    it('should set firstName and lastName', () => {
        var user = {location: 'Aktobe', age: 21 };
        var res = utils.setName(user, 'Mad Max');
    
        expect(user).toEqual(res);
    
        expect(user).toInclude({
            location: 'Aktobe',
            age: 21
        });
    });
    
    it('should asyc add two numbers', (done) => {
        utils.asyncAdd(4, 3, (sum) => {
            expect(sum).toBe(7).toBeA('number');
            done();     
        });
    });
    
    it('should async square a number', (done) => {
        utils.asyncSquare(3, (square) => {
            expect(square).toBe(9).toBeA('number');
            done();
        });
    });
});
