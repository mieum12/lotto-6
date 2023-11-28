
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
   * @param input
   * @return {number[]}
   * @description '1,2,3,4,5,6' -> [1,2,3,4,5,6]
   */
  static convertToArray(input){
    const str = input.split(',')
    return str.map(Number)
  }

}