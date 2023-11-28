import {Console} from "@woowacourse/mission-utils";

class OutputView {
 static printLottos(lottosDto){
   Console.print(`\n${lottosDto.lottos.length}개를 구매했습니다.`)
   lottosDto.lottos.forEach(lottoDto => {
     const lottoString = lottoDto.numbers.join(', ') //[1,2,3] -> '1, 2, 3'
     Console.print(`[${lottoString}]`)
   })
 }

 static  printResults(results){
   Console.print(`
당첨 통계
---
3개 일치 (5,000원) - ${results.threeMatches}개
4개 일치 (50,000원) - ${results.fourMatches}개
5개 일치 (1,500,000원) - ${results.fiveMatches}개
5개 일치, 보너스 볼 일치 (30,000,000원) - ${results.fiveAndBonusMatches}개
6개 일치 (2,000,000,000원) - ${results.sixMatches}개
총 수익률은 ${((results.totalEarning/results.totalCost)*100).toFixed(1)}%입니다.`)
 }
}

export default OutputView