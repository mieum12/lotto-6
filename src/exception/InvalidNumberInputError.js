const INVALID_NUMBER_INPUT_ERROR_MESSAGE = "반드시 숫자를 입력해야합니다."

class InvalidNumberInputError extends Error {
  constructor() {
    super(INVALID_NUMBER_INPUT_ERROR_MESSAGE);
  }
}
export default InvalidNumberInputError