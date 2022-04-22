describe('Bubble Sort', function(){
    it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( [] );
    });
    it('handles unorderer array, return an orderer array', function(){
        expect( bubbleSort([2,1,3]) ).toEqual( [1,2,3] );
      });
      xit('handles an orderer array, be stay this ', function(){
        expect( bubbleSort([1,2,3])).toEqual( [1,2,3] );
      });
      it('handles an inverted array, return an ordered array ', function(){
        expect( bubbleSort([3,2,1]) ).toEqual( [1,2,3] );
      });
});

describe('probando spies', function() {
    xit('bubbleSort debe ser llamada N veces', function () {
        spyOn(window, 'bubbleSort').and.callThrough(); // callThrough le dice al spy que utilice el método original window['bubbleSort'], mientras que `callFake` haría una copia.
        window.bubbleSort([5,2,17,1,3]);
        expect(window.bubbleSort.calls.count()).toEqual();
      });

      xit('swap debe ser llamada N veces', function () {
        spyOn(window, 'swap').and.callThrough(); // callThrough le dice al spy que utilice el método original window['bubbleSort'], mientras que `callFake` haría una copia.
        bubbleSort([5,2,17,1,3]);
        /* 
        [2,5,17,1,3]
        [2,5,1,17,3]
        [2,5,1,3,17]
        [2,1,5,3,17]
        [2,1,3,5,17]
        [1,2,3,5,17]        
        */
        expect(window.swap.calls.count()).toEqual(6);
      });
});