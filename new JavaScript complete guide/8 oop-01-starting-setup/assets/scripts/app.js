class Product {
  // title = 'DEFAULT';
  // imageUrl;
  // description;
  // price;

  constructor(title, image, desc, price) {
    this.title = title;
    this.imageUrl = image;
    this.description = desc;
    this.price = price;
  }
}

class ProductItem {
  constructor(product) {
    this.product = product;
  }

  render() {
    const prodEl = document.createElement('li');
    prodEl.className = 'product-item';
    prodEl.innerHTML = ` 
      <div>
         <img src=${this.product.imageUrl} alt=${this.product.title}>
         <div class='product-item__content'> 
           <h2>${this.product.title}</h2>
           <h3>\$${this.product.price}</h3>
           <p>${this.product.description}</p>
           
         </div>
      </div>
      `;
    return prodEl;
  }
}

class ProductList {
  products = [
    new Product(
      'A Pillow',
      'https://hips.hearstapps.com/hmg-prod/images/ghi-best-pillows-1573668641.png?crop=0.621xw:0.953xh;0.194xw,0.0471xh&resize=1200:*',
      'A soft pillow!',
      19.99
    ),
    new Product(
      'A Carpet',
      'https://i.pinimg.com/originals/a7/b0/c5/a7b0c52a99df98134a96406b61bdce51.jpg',
      'A carpet which you might like - or not.',
      89.99
    ),
  ];

  constructor() {}

  render() {
    const renderHook = document.getElementById('app');
    const prodList = document.createElement('ul');
    prodList.className = 'product-list';
    for (const prod of this.products) {
      const productItem = new ProductItem(prod);
      const prodEl = productItem.render();
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  }
}

const productList = new ProductList();
productList.render();
