function twoSum(nums, target){
    const map = {};
    for (let i = 0; i < nums.length; i++) {
        let complemento = target - nums[i];
        if(complemento in map){
            const result = [];
            result.push(map[complemento], i);
            return result;
        }else{
            map[nums[i]] = i
        }
        
    }
}

console.log(twoSum([2, 7, 11, 15], 9));