
 const FIRST_PRIZE = 2000000000
 const SECOND_PRIZE = 30000000
 const THIRD_PRIZE = 1500000
 const FORTH_PRIZE = 50000
 const FIFTH_PRIZE = 5000


class LottoMachine {
  /**
   * @type {number[]}
   */
  #winningNumbers
  /**
   * @type {number}
   */
  #bonusNumber

  /**
   * @type {Object}
   */
  #result

  /**
   *
   * @param {number[]} winningNumbers
   * @param {number} bonusNumber
   */
  constructor(winningNumbers, bonusNumber) {

    this.#winningNumbers = winningNumbers
    this.#bonusNumber = bonusNumber
    this.#result = {
      threeMatches : 0,
      fourMatches : 0,
      fiveMatches : 0,
      fiveAndBonusMatches: 0,
      sixMatches: 0,
      totalCost: 0,
      totalEarning: 0,
    };
  }

  /**
   *
   * @param {Lottos} boughtLottos
   */
  drawAll(boughtLottos){
    boughtLottos.lottos.forEach(lotto => {
      const hasBounusNumber = lotto.hasBounusNumber(this.#bonusNumber)
      const matchingNumberCount = lotto.countMatchingNumbers(this.#winningNumbers)
      this.#drawOneLotto(matchingNumberCount,hasBounusNumber)
    })
    console.log('🍓', this.#result)
    return this.#result
  }

  #drawOneLotto(matchingNumberCount, hasBonusNumber){
    this.#result.totalCost += 1000 // 한번 돌떄마다 천원

    if(hasBonusNumber && matchingNumberCount === 5 ){
      this.#result.fiveAndBonusMatches ++
      this.#result.totalEarning += SECOND_PRIZE
      return
    }
    if (matchingNumberCount === 6) {
      this.#result.sixMatches ++;
      this.#result.totalEarning += FIRST_PRIZE;
    }
    if (matchingNumberCount === 5) {
      this.#result.fiveMatches ++;
      this.#result.totalEarning += THIRD_PRIZE;
    }
    if (matchingNumberCount === 4) {
      this.#result.fourMatches ++;
      this.#result.totalEarning += FORTH_PRIZE;
    }
    if (matchingNumberCount === 3) {
      this.#result.threeMatches ++;
      this.#result.totalEarning += FIFTH_PRIZE;
    }
  }


}
export default LottoMachine