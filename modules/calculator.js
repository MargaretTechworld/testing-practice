class Calculate {
  constructor(fNumber, sNumber){
    this.fNumber = fNumber;
    this.sNumber = sNumber;
  }
 
  add = () => {
    return this.fNumber + this.sNumber;
  }
  substract = () => {
    return this.fNumber - this.sNumber;
  }

  divide = () => {
   return this.fNumber / this.sNumber;
  }

  multiply = () => {
    return this.fNumber * this.sNumber;
  }

}

module.exports = Calculate;