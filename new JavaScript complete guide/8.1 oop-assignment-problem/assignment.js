class Course {
  #price;

  get price() {
    return '$' + this.#price;
  }

  set price(value) {
    if (value < 0) {
      throw 'Invalid value';
    }
    this.#price = value;
  }

  constructor(title, length, price) {
    this.title = title;
    this.length = length;
    this.price = price;
  }

  calculatedPrice() {
    return this.length / this.#price;
  }

  courseSummary() {
    console.log(
      `Title: ${this.title} Length: ${this.length} hours Price: ${this.price}.`
    );
  }
}

class PracticalCourse extends Course {
  constructor(title, length, price, exercisesCount) {
    super(title, length, price);
    this.numOfExercises = exercisesCount;
  }
}

class TheoreticalCourse extends Course {
  publish() {
    console.log('Something in console...');
  }
}

const jsCourse = new Course('JavaScript', 50, 44);
const reactCourse = new Course('React', 50, 36);
console.log(jsCourse);
console.log(reactCourse);
console.log(jsCourse.calculatedPrice());
console.log(reactCourse.calculatedPrice());
jsCourse.courseSummary();
reactCourse.courseSummary();

const python = new PracticalCourse('Python', 30, 24, 15);
const angular = new TheoreticalCourse('Angular', 40, 32);
console.log(python);
console.log(angular);
python.courseSummary();
angular.publish();
