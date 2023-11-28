import InvalidNumberInputError from "../exception/InvalidNumberInputError.js";
import InvalidFormatInputError from "../exception/InvalidFormatInputError.js";
import InvalidStringInputError from "../exception/InvalidStringInputError.js";

const INPUT_FORMAT_REG_EXP =/^(\d+,)*\d+$/

// 자동차 - pobi,woni,jun -  /^[A-z가-힣]+(,[A-z가-힣]+)*$/
// 로또 - 1,2,3,4,5,6 - /^\d+(,\d+)+$/ 아니면 /^(\d+,)*\d+$/
// 자판기 - [콜라,1500,20];[사이다,1000,10] - /^\[[가-힣]+,\d+,\d+\](;\[[가-힣]+,\d+,\d+\])*$/
// 크리스마스 - 타파스-1,제로콜라-1 - /^[A-z가-힣]+-\d+(,[A-z가-힣]+-\d+)*$/
// 페어매칭(4기 시험) - 프론트엔드, 레벨1, 자동차경주 - /^[A-z가-힣]+(,[A-z가-힣]+)*$/
// 메뉴 추천(5기 시험) - 토미,제임스,포코 - /^[A-z가-힣]+(,[A-z가-힣]+)*$/

  class InputValidator {
  /**
   *
   * @param {string} input
   * @return {void}
   * @description 숫자 포맷인지 검증
   */
  static validateNumberInput(input) {
    if (isNaN(parseInt(input))||isNaN(Number(input))) {
      throw new InvalidNumberInputError();
    }
  }

  /**
   *
   * @param {string} input
   * @return {void}
   * @description 알맞은 포맷인지 검증
   */
  static validateFormatInput(input){
    if (input ===null ||input===undefined ||!INPUT_FORMAT_REG_EXP.test(input)){
      throw new InvalidFormatInputError()
    }
  }

}

export default InputValidator