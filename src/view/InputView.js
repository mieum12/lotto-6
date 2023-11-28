import {Console} from "@woowacourse/mission-utils";
import InputValidator from "./InputValidator";
import {InputConverter} from "./InputConverter";
import LottoMachine from "../domain/LottoMachine.js";
import Money from "../domain/Money.js";

/**
 *
 * @type {string}
 */
const INPUT_MONEY_MESSAGE = "구입금액을 입력해 주세요.\n"
/**
 *
 * @type {string}
 */
const INPUT_WINNING_NUMBER_MESSAGE = "\n당첨 번호를 입력해 주세요.\n"
const INPUT_BONUS_NUMBER_MESSAGE = '\n보너스 번호를 입력해 주세요.\n'

class InputView {
  /**
   *
   * @description ✅금액를 입력받는 곳
   */
  static async inputMoney() {
    const input = await Console.readLineAsync(INPUT_MONEY_MESSAGE)
    try {
      InputValidator.validateNumberInput(input)
      return new Money(InputConverter.convertToNumber(input))
    } catch (e) {
      Console.print(`${e.message}`);
      return this.inputMoney()
    }
  }

  /**
   *
   * @return {Promise<LottoMachine>}
   * @description ✅당첨번호+보너스번호를 입력받는 곳 -> LottoMachine 생성
   */
  static async inputLottoMachine() {
    const winningNums = await Console.readLineAsync(INPUT_WINNING_NUMBER_MESSAGE)
    const bonusNumber = await Console.readLineAsync(INPUT_BONUS_NUMBER_MESSAGE)
    InputValidator.validateFormatInput(winningNums)
    InputValidator.validateNumberInput(bonusNumber)
    const winningNumber = InputConverter.convertToArray(winningNums)

    return new LottoMachine(winningNumber,bonusNumber)
  }

}

export  default InputView