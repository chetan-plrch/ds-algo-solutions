function getChocolateCount(money, cost, wExchange) {
    let chocolates = 0;
    let wrappers = 0;
    while(money >= cost) {
        let cBought = parseInt(money/cost);
        chocolates = chocolates + cBought;
        money = money - (cBought * cost);
        wrappers = wrappers + cBought;
        
        let wToMoney = parseInt(wrappers / wExchange) * cost;
        money = money + wToMoney;
        wrappers = wrappers - ((wToMoney * wExchange) / cost);
    }

    return chocolates
}

console.log(getChocolateCount(10, 2, 5))