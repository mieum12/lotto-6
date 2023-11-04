export class Money {
    /**
     * @type {number}
     *
     */
    #amount;

    /**
     *
     * @param {number} amount
     */
    constructor(amount) {
        this.#validate(amount);
        this.#amount = amount;
    }

    /**
     * 금액을 money라는 객체에 담아서 표현하는 이유
     *
     * 그냥 number타입으로 쓰면 안될까?
     * -------------------------------
     * const money = new Money(1000);
     * money.add(100);
     * -------------------------------
     * 위와같이 사용하는게 편하긴한데?
     *
     * 그러나 number 타입을 사용하게 되면
     * 아래와 같은 문제!
     *
     * -------------------------------
     * const money = 100;
     * money += -10000000000;
     * -------------------------------
     * 잔액은 항상 0 또는 양수여야하는데 음수가 되어버릴 수 있다
     *
     * 그러면 이상한 데이터가 되고 버그가 생긴다..
     *
     * -------------------------------
     * const money = new Money(1000);
     * money.add(100);
     * money.subtrack(100);
     * -------------------------------
     *
     * 이제 항상 add를 호출해서 돈을 더하거나
     * subtrack을 호출해서 돈을 차감할 수 있다
     *
     * 잔액이 부족한데 빼는 상황은 예외 발생! (아래처럼)
     * -------------------------------
     * const money = new Money(1000)
     * money.subtrack(10000000) // ERROR!
     *
     * -------------------------------
     *
     * 돈같이 중요한 요소를 다울 때 문제가 생기면 골치아파진다
     * 그래서 항상 조심해야하므로 객체로 만들어서 사용하는 것!!
     *
     * add(amount) {
     *     if (amount < 0) {
     *     throw new Error ('돈은 0 또는 양수여야해요');
     *     }
     * }
     *
     * 이제 반드시 add를 호출해서 금액을 추가하도록 강제할 수 있음!
     * 더이상 이상한 데이터가 들어갈 수 없기 때문에
     * 항상 돈이 0원 이상이라는 것을 믿고 쓸수 있다!!!
     *
     * 객체로 감싸면 유효한 데이터 최대한 보장!
     *
     */

    /**
     *
     * @return {boolean}
     */
    get isZero() {
        return this.#amount === 0
    }

    /**
     *
     * @param {number} amount
     * @description Money 객체의 잔액에 돈 추기
     * @return {void}
     */
    add(amount) {
        const sum = this.#amount + amount
        //항상 음수인지 검증해 이상한 데이터 안들어오게
        this.#validateAmount(sum)
        this.#amount = sum
    }

    /**
     *
     * @param {number} amount
     * @description Money 객체의 잔액에 돈 빼기
     * @return {void}
     */
    subtract(amount) {
        const sum = this.#amount - amount
        //항상 음수인지 검증해 이상한 데이터 안들어오게
        this.#validateAmount(sum)
        this.#amount = sum
    }

    /**
     *
     * @param {number} amount
     * @return {void}
     */

    #validate(amount) {
        //1000원으로 나누어떨어지지 않을 경우
        if (amount % 1000 !== 0) {
            throw new Error("[ERROR] 구매 금액은 1000원 단위로 입력되어야합니다.");
        }
    }

    #validateAmount() {
        if (this.#amount < 0) {
            throw new Error('잔액은 0 미만이 될 수 없음')
        }
    }

}