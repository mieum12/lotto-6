class LottosDto {
  /**
   * @type {LottoDto[]}
   */
  #lottos

  /**
   *
   * @param {LottoDto[]} lottosDto
   * @description manyLottoDto는 [ LottoDto, LottoDto, LottoDto ...] 구조
   *
   */
  constructor(lottosDto) {
    this.#lottos = Object.freeze(lottosDto)

  }

  /**
   *
   * @return {LottoDto[]}
   */
  get lottos() {
    return this.#lottos
  }
}

export default LottosDto