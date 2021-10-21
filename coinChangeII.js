//two ways as well
//top down with recursion
//bottom up with tabulation
//recursion first
var change = function(amount, coins) {
    return helper(amount,coins)
};

let helper = (amount,coins,index=0,memo={}) => {
    if (amount in memo && index in memo[amount]) return memo[amount][index]
    if (memo[amount] === undefined) memo[amount] = []
    //base case
    if (index>=coins.length || amount<0) {
        memo[amount][index] = 0
        return 0  
    } else if (amount === 0) {
        memo[amount][index] = 1
        return 1
    } else {
        let count = 0
        for (let i=index; i<coins.length; i++) {
            count += helper(amount-coins[i],coins,i,memo)
        }
        memo[amount][index] = count
        return count
    }
} 

//recursion with a classic 0/1 knapsack approach
//time and space complexity is the same as above
var change2 = function(amount,coins) {
    return helper2(amount, coins)
}

let helper2 =(amount,coins,index=0,memo={}) => {
    if (amount in memo && index in memo[amount]) return memo[amount][index]
    if (memo[amount] ===  undefined) memo[amount] = []
    if (index >= coins.length || amount<0) {
        return 0
    }

    if (amount === 0) {
        return 1
    }

    if (coins[index] > amount) {
        memo[amount][index] = helper2(amount,coins,index+1,memo)
        return memo[amount][index]
    }
    memo[amount][index] = helper2(amount,coins,index+1,memo) + helper2(amount-coins[index],coins,index,memo)
    return memo[amount][index]
}
//let input =[200,217,234,251,268,285,302,319,336,353,370,387,404,421,438,455,472,489,506,523,540,557,574,591,608,625,642,659,676,693,710,727,744,761,778,795,812,829,846,863,880,897,914,931,948,965,982,999,1016,1033,1050,1067,1084,1101,1118,1135,1152,1169,1186,1203,1220,1237,1254,1271,1288,1305,1322,1339,1356,1373,1390,1407,1424,1441,1458,1475,1492,1509,1526,1543,1560,1577,1594,1611,1628,1645,1662,1679,1696,1713,1730,1747,1764,1781,1798,1815,1832,1849,1866,1883,1900,1917,1934,1951,1968,1985,2002,2019,2036,2053,2070,2087,2104,2121,2138,2155,2172,2189,2206,2223,2240,2257,2274,2291,2308,2325,2342,2359,2376,2393,2410,2427,2444,2461,2478,2495,2512,2529,2546,2563,2580,2597,2614,2631,2648,2665,2682,2699,2716,2733,2750,2767,2784,2801,2818,2835,2852,2869,2886,2903,2920,2937,2954,2971,2988,3005,3022,3039,3056,3073,3090,3107,3124,3141,3158,3175,3192,3209,3226,3243,3260,3277,3294,3311,3328,3345,3362,3379,3396,3413,3430,3447,3464,3481,3498,3515,3532,3549,3566,3583,3600,3617,3634,3651,3668,3685,3702,3719,3736,3753,3770,3787,3804,3821,3838,3855,3872,3889,3906,3923,3940,3957,3974,3991,4008,4025,4042,4059,4076,4093,4110,4127,4144,4161,4178,4195,4212,4229,4246,4263,4280,4297,4314,4331,4348,4365,4382,4399,4416,4433,4450,4467,4484,4501,4518,4535,4552,4569,4586,4603,4620,4637,4654,4671,4688,4705,4722,4739,4756,4773,4790,4807,4824,4841,4858,4875,4892,4909,4926,4943,4960,4977,4994]
let input = [1,2,5]
console.log('start')


console.time('two')
console.log(change2(5,input))
console.timeEnd('two')
console.time('one')
console.log(change(5,input))
console.timeEnd('one')

//find the combination, not the permutation 
var change3 = function(amount, coins) {
    let arr = new Array(amount+1).fill(0)
    arr[0] = 1

    for (let i=0; i<amount+1; i++) {
        if (arr[i] >0) {
            for (let j=0; j<coins.length; j++) {
                arr[i+coins[j]] +=  arr[i]
            }
        }
    } 
    console.log(arr)
    return arr[amount]
};

// let input =
// console.log(change(3999,input))
