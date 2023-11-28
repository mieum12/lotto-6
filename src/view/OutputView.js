import {Console} from "@woowacourse/mission-utils";

class OutputView {
 static printLottos(lottosDto){
   Console.print(`\n${lottosDto.lottos.length}개를 구매했습니다.`)
   lottosDto.lottos.forEach(lottoDto => {
     const lottoString = lottoDto.numbers.join(', ') //[1,2,3] -> '1, 2, 3'
     Console.print(lottoString)
   })
 }
}

export default OutputView