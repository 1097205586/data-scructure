class Stack {
  constructor () {
    this.count = 0
    this.data = {}
  }

  peek () {
    return this.data[this.count - 1]
  }

  put (value) {
    this.data[this.count] = value
      this.count += 1
    return this.size()
  }

  out () {
    if (this.isEmpty()) return false
    this.count -= 1
    delete this.data[this.count]
    return true
  }

  size () {
    return this.count
  }

  empty () {
    this.data = {}
    this.count = 0
    return this.data
  }

  isEmpty () {
    return this.size() === 0
  }

  toString () {
    return this.data.join(',')
  }
}

export default Stack;