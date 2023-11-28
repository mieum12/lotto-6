import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";
import LottoStore from "../domain/LottoStore.js";
import lottoGenerator from "../domain/LottoGenerator.js";
import LottoGenerator from "../domain/LottoGenerator.js";

class Controller {
  static async run(){
    const boughtLottos =  await this.buyLotto() // 구매
    await this.drawLotto(boughtLottos) // 추첨

  }

  static async buyLotto(){
    // 1. 구입 금액 입력 받음
    const money = await InputView.inputMoney()
    // 2. 로또 구매하기
    const lottoGenerator = new LottoGenerator()
    const lottoStore = new LottoStore(lottoGenerator)
    const lottos = lottoStore.buyLottos(money)
    // 3. 구매한 로또 출력
    const lottosDto = lottos.toLottosDto()
    OutputView.printLottos(lottosDto)

  }

  static async drawLotto(boughtLottos){
    // 1. 로또 추첨 기계 생성
    const lottoMachine = InputView.inputLottoMachine()
    // 2. 로또 추첨하기
    const result = lottoMachine.drawAll()

  }
}
export default Controller