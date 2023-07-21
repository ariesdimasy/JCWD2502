function stockExchange(stocks) { 

    var profit = 0
    for(var i = 0; i < stocks.length; i++) { 
        for( var j = i+1; j < stocks.length; j++) { 
            if(stocks[j]-stocks[i] > profit) { 
                profit = stocks[j]-stocks[i]
            }
        }
    }

    return profit

}

console.log(stockExchange([7,1,5,3,6,4]))

/* 
    7 -> 1 - 7 = -6
         5 - 7 = -2 
         3 - 7 = -4 
         6 - 7 = -1
         4 - 7 = -3


*/