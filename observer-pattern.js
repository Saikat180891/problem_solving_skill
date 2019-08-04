class Observable {
  constructor() {
    this.value = null;
    this.observers = [];
  }

  next(value) {
    this.value = value;
    this.notifyObservers();
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  notifyObservers() {
    this.observers.forEach(observer => {
      observer(this.value);
    });
  }
}

let obs1 = new Observable();
let obs2 = new Observable();

obs1.next(34);
obs1.subscribe(res => {
  console.log(res);
});
obs2.subscribe(res => {
  console.log(res);
});
