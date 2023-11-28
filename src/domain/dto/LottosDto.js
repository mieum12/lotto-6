class LottosDto {
  /**
   * @type {LottoDto[]}
   */
  #lottos

  /**
   *
   * @param {LottoDto[]} manyLottoDto
   * @description manyLottoDto는 [ LottoDto, LottoDto, LottoDto ...] 구조
   *
   */
  constructor(manyLottoDto) {
    this.#lottos = Object.freeze(manyLottoDto)
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