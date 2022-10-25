//bruteforce - double for loop, TC: O(n^2), SC: O(1)
var maxProfit = function(prices) {
    let profit = 0;
    
    for(let i = 0; i < prices.length-1; i++){
        for(let j = i+1; j < prices.length; j++){
            profit = Math.max(profit, prices[j]-prices[i])
        }
    }
    return profit;
};

//sliding window - TC: O(n), SC: O(1)
var maxProfit = function(prices) {
    //iterate through the prices area, and computer the profit only if you're positive on trade else, update the buy pointer (j)
    //to when you sell
    let profit = 0;
    let j = 0;
    
    for(let i = 1; i < prices.length; i++){
        if(prices[i] > prices[j]){
            profit = Math.max(profit, prices[i]-prices[j])
        } else {
            j = i;
        }
    }
    return profit;
};