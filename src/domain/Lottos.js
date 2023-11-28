import Lotto from "./Lotto.js";
import LottosDto from "./dto/LottosDto.js";

class Lottos {
  /**
   * @type {Lotto[]}
   */
  #lottos

  /**
   *
   * @param {Lotto[]}boughtLottos
   */
  constructor(boughtLottos) {
    this.#lottos = boughtLottos
  }
  toLottosDto(){
    const lottosDto = this.#lottos.map(lotto => lotto.toLottoDto())
    return new LottosDto(lottosDto)
  }
}

export default Lottos