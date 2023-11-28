import {Console} from "@woowacourse/mission-utils";

const INVALID_MONEY_ERROR = '[ERROR] 1000원으로 나누어떨어져야함'
class Money {
  /**
   * @type {number}
   */
  #amount

  constructor(amount) {
    this.#validateUnit(amount)
    this.#amount = amount
  }

  /**
   *
   * @return {boolean}
   * @description 잔액이 0인지 판단
   */
  get isZero(){
    return this.#amount === 0
  }

  /**
   *
   * @param {number} amount
   * @return {void}
   * @description 돈 차감
   */
  subtract(amount){
    const sum = this.#amount - amount
    this.#validateMoneyAmount(sum)
    this.#amount = sum
  }

  /**
   *
   * @param {number} amount
   */
  #validateUnit(amount){
    if (amount % 1000 !== 0) {
      throw new Error(INVALID_MONEY_ERROR)
    }
  }

  /**
   *
   * @param {number} sum
   */
  #validateMoneyAmount(sum){
    if(sum < 0) {
      throw new Error('잔액은 0 아래로 떨어질 수 없음')
    }
  }
}
export default Money