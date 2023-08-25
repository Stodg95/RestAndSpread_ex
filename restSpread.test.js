describe('#FilterOutOdds', function(){
  it('should filter out all odd numbers in an array', function(){
    expect(filterOutOdds(1,3,4,6,5,7,8)).toEqual([4,6,8]);
  });
});

describe('#findMin', function(){
  it('should find the lowest number in the array', function(){
    expect(findMin(2, 23, 12, 4)).toEqual(2);
  });
});

describe('#mergeObjects', function(){
  it('should combine two objects into one', function() {
    var obj1 = { a:1, b:2};
    var obj2 = { c:3, d:4 };
    expect(
      mergeObjects(obj1, obj2)).toEqual({ a:1, b:2, c:3, d:4 });
  });
});

describe('#doubleAndReturnArgs', function(){
  it('should return the array and attaching the args after doubling them', function(){
    expect(doubleAndReturnArgs([1, 3, 4], 2, 6)).toEqual([1, 3, 4, 4, 12]);
  });
});

describe('#removeRandom', function(){
  it('should remove a random item from the array', function(){
    let items = ['1, 3, 5, 6, 3, 7'];
    let idx = Math.floor(Math.random() * items.length);
    let newItems = items.slice(0, idx); 
    expect(removeRandom(items)).toEqual(newItems);
  });
});

describe('#combine', function(){
  it('should combine two arrays into one', function(){
    expect(combine([1,2,3], [4,5,6])).toEqual([1,2,3,4,5,6])
  });
});

describe('#addKeyValue', function(){
  it('should add a key value in the object', function(){
    let obj = {
      'name' : 'Scott',
      'age' : '27'
    }
    expect(addKeyValue(obj, 'gender', 'male')).toEqual({
      'name': 'Scott',
      'age' : '27',
      'gender' : 'male'
    })
  });
});

describe('#removeKey', function(){
  it('should remove a key from the object', function(){
   let obj = {
    'name' : 'Scott',
    'age' : '27',
    'gender' : 'male'
   };
   expect(removeKey(obj, 'gender')).toEqual({
    'name' : 'Scott',
    'age' : '27'
   })
  });
});

describe('#updateKeyAndValue', function(){
  it('should update a key with a new value', function(){
    let obj = {
      'name' : 'Scott',
      'age' : '27',
      'gender' : 'male'
    }
    expect(updateKeyAndValue(obj, 'age', '28')).toEqual({
      'name' : 'Scott',
      'age' : '28',
      'gender' : 'male'
    })
  });
});