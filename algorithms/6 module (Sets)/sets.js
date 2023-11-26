// Time Complexity: O(n*m)
// Space Complexiry: O(n*m)

function cartProduct(setA, setB) {
  const product = [];

  for (let setAEl of setA) {
    if (!Array.isArray(setAEl)) {
      setAEl = [setAEl];
    }
    for (const setBEl of setB) {
      console.log('Running');
      product.push([...setAEl, setBEl]);
    }
  }

  return product;
}

// Time Complexity: O(n^x)
// Space Complexiry: O(n^x)

function cartesian(...sets) {
  let tempProduct = sets[0];

  for (let i = 1; i < sets.length; i++) {
    tempProduct = cartProduct(tempProduct, sets[i]);
  }

  return tempProduct;
}

const colors = ['blue', 'red'];
const sizes = ['s', 'm', 'l', 'xl'];
const styles = ['round neck', 'v neck'];
console.log(cartProduct(colors, sizes));

console.log(cartesian(colors, sizes, styles));
