import Quequ from './queue.js'

class DoubleQueue extends Quequ {
  constructor () {
    super()
  }
  putBack (value) {
    this.put(value)
  }

  putHead (value) {
    if (this.isEmpty()){
      this.putBack(value)
    } else if (this.cursor > 0) {
      this.data[--this.cursor] = value
    } else if (this.cursor === 0) {
      let temp
      for (let key in this.data) {
        temp = this.data[key * 1 + 1]
        this.data[key * 1 + 1] =  this.data[0]
        this.data[0] = temp
      }
      this.data[0] = value
    }
  }

  outHead () {
  }
}

export default DoubleQueue