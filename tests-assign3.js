"use strict";

const chai = window.chai;
const expect = chai.expect;

// Test function 1
describe('Circle', () =>  {
    it('return circle objects back to the caller',  () => {
        let c1 = new Circle(3);
        expect(c1.area()).to.deep.equal(28.27)
        expect(c1.perimeter()).to.deep.equal(18.84955592153876) 

        let c2 = new Circle(7);
        expect(c2.area()).to.deep.equal(153.93804002589985)
        expect(c2.perimeter()).to.deep.equal(43.982297150257104) 

        let c3 = new Circle(9);
        expect(c3.area()).to.deep.equal(254.46900494077323)
        expect(c3.perimeter()).to.deep.equal(56.548667764616276) 
    })
    it('return circle 0',  () => {
        let c1 = new Circle(0);
        expect(c1.area()).to.deep.equal(0)
        expect(c1.perimeter()).to.deep.equal(0) 

     
    })
})

// Test function 2
describe('calculateSalary', () =>  {
    it('sums up calculates and returns the calculated total gross weekly salary',  () => {
        expect(calculateSalary([8, 8, 8, 8, 8, 0, 0])).to.deep.equal(400)
       
    })
    it('sums up calculates and returns the calculated total gross weekly salary',  () => {
    
        expect(calculateSalary([10, 10, 10, 0, 8, 0, 0])).to.deep.equal(410)
    
    })
    it('Testing weekend days hours',  () => {
   
        expect(calculateSalary([0, 0, 0, 0, 0, 12, 0])).to.deep.equal(280)
    })
})

// Test function 3
describe('indexMultiplier', () =>  {
    it('sums up sum of all items in the array where each item is multiplied by its index',  () => {
        expect(indexMultiplier([1, 2, 3, 4, 5])).to.deep.equal(40);
        expect(indexMultiplier([-3, 0, 8, -6])).to.deep.equal(-2);
        expect(indexMultiplier([15, 16, -100, 50])).to.deep.equal(-34)
    })
})

// Test function 4
describe('filteredJSON', () =>  {
    it('filters the input array',  () => {
        expect(filteredJSON([{ id: 1, u: "batman" }])).to.deep.equal([])
        expect(filteredJSON([{ id: 11, u: "spidey" }])).to.deep.equal([{ id: 11, u: "spidey" }])
        expect(filteredJSON([{ id: 1, u: "batman" },
        { id: 11, u: "spidey" },])).to.deep.equal([{ id: 11, u: "spidey" }])
    })
})

// Test function 5
describe('breakAway', () =>  {
    it('returns an array containing the array groupings back to the caller',  () => {
        expect(breakAway([2, 3, 4, 5], 2)).to.deep.equal([[2,3],[4,5]])
        expect(breakAway([2, 3, 4, 5, 6], 2)).to.deep.equal([[2,3],[4,5], [6]])
        expect(breakAway([2, 3, 4, 5, 6, 7], 3)).to.deep.equal([[2,3,4],[5,6,7]])
        expect(breakAway([2, 3, 4, 5], 1)).to.deep.equal([[2],[3],[4],[5]])
        expect(breakAway([2, 3, 4, 5, 6, 7], 7)).to.deep.equal([[2, 3, 4, 5, 6, 7]])
})
})