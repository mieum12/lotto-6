const INVALID_STRING_INPUT_ERROR_MESSAGE = "반드시 문자를 입력해야합니다."

class InvalidStringInputError extends Error {
  constructor() {
    super(INVALID_STRING_INPUT_ERROR_MESSAGE);
  }
}
export default  InvalidStringInputError