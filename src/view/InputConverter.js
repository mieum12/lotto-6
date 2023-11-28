
/**
 *
 * @type {string}
 */
const COMMAS = ','
/**
 *
 * @type {string}
 */
const SEMICOLON =';'
/**
 *
 * @type {string}
 */
const DASH = '-'

export class InputConverter {
  /**
   *
   * @param {string} input
   * @return {number}
   * @description ✅숫자로 변환 (검증에서 한번 거쳐 준 상태)
   */
  static convertToNumber(input) {
    return Number(input);
  }

  /**
   *
   * @param {string} input
   * @return {string[]}
   * @description '가,나,다' -> ['가','나','다']
   */
  static convertToArray(input){
    return input.split(COMMAS)
  }

}