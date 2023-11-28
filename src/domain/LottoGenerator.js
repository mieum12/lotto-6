import {Random} from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class LottoGenerator {
  /**
   *
   * @return {Lotto}
   * @description 랜덤으로 로또 번호 6자리를 생성해서 한개의 로또를 발행
   */
  generate() {
    const randomNumber =  Random.pickUniqueNumbersInRange(1, 45, 6).sort((a,b)=>a-b)
    return new Lotto(randomNumber)
  }

}

export default LottoGenerator