const filterOutOdds = (...nums) => nums.filter(val => val % 2 === 0);

const findMin = (...numbers) => Math.min(...numbers);

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});

const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(val => val * 2)];

const removeRandom = items => {
  let idx = Math.floor(Math.random() * items.length);
  return [...items.splice(0, idx), ...items.splice(idx + 1)];
}

const combine = (arr1, arr2) => {
  return [...arr1, ...arr2];
}

const addKeyValue = (obj, key, val) => {
  let newObj = { ...obj }
  newObj[key] = val;
  return newObj;
}

const removeKey = (obj, key) => {
  let newObj = { ...obj }
  delete newObj[key]
  return newObj;
}

const updateKeyAndValue = (obj, key, val) => {
  let newObj = { ...obj }
  newObj[key] = val;
  return newObj;
}