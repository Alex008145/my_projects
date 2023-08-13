class Course {
  #price;

  get price() {
    return '$' + this.#price;
  }

  set price(value) {
    if (value < 0) {
      throw 'Invalid value!';
    }
    this.#price = value;
  }

  constructor(title, length, price) {
    this.title = title;
    this.length = length;
    this.price = price;
  }

  calculate() {
    return this.length / this.#price;
  }

  summary() {
    console.log(
      `Title: ${this.title}, length: ${this.length}, price: ${this.price}`
    );
  }
}

const math = new Course('Math', 30, 500);
const programming = new Course('Programming', 50, 300);

console.log(math);
console.log(programming);

console.log(math.calculate());
console.log(programming.calculate());

math.summary();
programming.summary();

class PracticalCourse extends Course {
  constructor(title, length, price, numOfExercises) {
    super(title, length, price);
    this.numOfExercises = numOfExercises;
  }
}

const angularCourse = new PracticalCourse('Angular', 36, 50, 10);
console.log(angularCourse);
angularCourse.summary();

class TheoreticalCource extends Course {
  constructor(title, length, price) {
    super(title, length, price);
  }

  publish() {
    console.log('Some text in console');
  }
}

const reactCourse = new TheoreticalCource('React', 40, 60, 15);
reactCourse.price = 1055;

console.log(reactCourse);
reactCourse.summary();
reactCourse.publish();
