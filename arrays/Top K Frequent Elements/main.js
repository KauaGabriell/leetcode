/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const frequencyMap = nums.reduce((acc, num) => {
        acc[num] = (acc[num] || 0) + 1;
        return acc;
    }, {});

    return Object.entries(frequencyMap)
        .sort((a, b) => b[1] - a[1]) 
        .slice(0, k) 
        .map(pair => Number(pair[0]));
};

console.log(topKFrequent([3,3,1,2,2,3], 2));
