import Lottos from "./Lottos.js";
import LottoGenerator from "./LottoGenerator.js";

const LOTTO_PRICE = 1_000
class LottoStore {

  /**
   * @type {LottoGenerator}
   */
  #lottoGenerator;

  /**
   *
   * @param {LottoGenerator} lottoGenerator
   */
  constructor(lottoGenerator) {
    this.#lottoGenerator = lottoGenerator;
  }
  /**
   *
   * @param {Money} money
   * @return {Lottos}
   */
  buyLottos(money){
    /**
     * @type {Lotto[]}
     */
    const boughtLottos = []

    while(!money.isZero) { // 잔액이 0이 될때까지 반복
      const lotto = this.#buy(money); // 로또 하나 발행
      boughtLottos.push(lotto)
    }
    return new Lottos(boughtLottos)
  }

  /**
   *
   * @param {Money} money
   * @return {Lotto}
   */
  #buy(money) {
    //로또 금액만큼 잔액 차감
    money.subtract(1000);
    //새로운 로또 발행해서 넘기기!
    return this.#lottoGenerator.generate();
  }

}
export default LottoStore