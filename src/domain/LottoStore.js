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
    const boughtLottos = []
    while(!money.isZero) { // 잔액이 0이 될때까지 반복
      money.subtract(1000);
      const lotto = this.#lottoGenerator.generate(); // 로또 하나 발행
      boughtLottos.push(lotto)
    }
    return new Lottos(boughtLottos)
  }

}
export default LottoStore