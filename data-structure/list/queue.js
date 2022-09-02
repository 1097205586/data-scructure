class Quequ {
  constructor() {
    this.data = {};
    this.cursor = 0;
    this.count = 0;
  }

  put(value) {
    if (value === undefined) return false;
    this.data[this.count++] = value;
    return this.size();
  }
  out() {
    delete this.data[this.cursor];
    this.cursor++;
    console.log(this.data);
  }
  size() {
    return this.count;
  }
  isEmpty() {
    return this.count === 0;
  }
  peek() {
    return this.data[this.cursor];
  }
  forEach(callback) {
    for (let key in this.data) {
      callback(this.data[key], key);
    }
  }
}

export default Quequ;
