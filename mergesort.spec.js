describe('Split Array function', function () {
    xit('es capaz de dividir el arreglo en dos partes', function () {
      expect(split([1, 2, 3, 4, 5, 6])).toEqual([[1, 2, 3], [4, 5, 6]])
    });
  });
  
  describe('Merge', function () {
    xit('es capaz de combinar dos Arreglos ordenados en uno solo ordenado', function () {
      expect(merge([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6])
    });
  });
  
  describe('mergeSort', function () {
    it('es capaz de combinar dos Arreglos ordenados en uno solo ordenado', function () {
      expect(mergeSort([1, 4, 5, 7, 2, 4])).toEqual([[1], [4], [5], [7], [2], [4]])
    });
  });