class LottoMachine {
  /**
   * @type {number[]}
   */
  #winningNumber
  /**
   * @type {number}
   */
  #bonusNumber

  constructor(winningNumber, bonusNumber) {
    this.#winningNumber = winningNumber
    this.#bonusNumber = bonusNumber
  }


}
export default LottoMachine