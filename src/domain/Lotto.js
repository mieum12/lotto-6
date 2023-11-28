import LottoDto from "./dto/LottoDto.js";

class Lotto {
  /**
   * @type {number[]}
   */
  #numbers;

  /**
   *
   * @param {number[]} numbers
   */
  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  /**
   *
   * @param {number[]} numbers
   */
  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }

    const lottoNums = new Set(numbers);
    if (lottoNums.size !== numbers.length) {
      throw new Error('[ERROR] 로또 번호는 중복없이 입력되어야합니다.')
    }

  }

  /**
   *
   * @return {number[]}
   */
  get numbers() {
    return this.#numbers;
  }

  /**
   *
   * @return {LottoDto}
   */
  toLottoDto(){
    return new LottoDto(this.#numbers)
  }

  /**
   *
   * @param {number[]} winningNumbers
   * @return {number}
   */
  countMatchingNumbers(winningNumbers){
    console.log(this.#numbers.filter(number=> winningNumbers.includes(number)).length,'개 일치!!!!')
    return this.#numbers.filter(number=> winningNumbers.includes(number)).length
  }

  /**
   *
   * @param {number} bonusNumber
   * @return {boolean}
   */
  hasBounusNumber(bonusNumber){
    return this.#numbers.includes(bonusNumber)
  }
}

export default Lotto;
