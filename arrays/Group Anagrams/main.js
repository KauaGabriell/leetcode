const strings = ["eat", "tea", "tan", "ate", "nat", "bat"];
const newArr  = strings.reduce(function(acc, obj){
    const assignature = obj.split('').sort().join('');
    if(acc[assignature]){
        acc[assignature].push(obj);
    }else{
        acc[assignature] = [obj];
    }
    return acc;
}, {});
Object.values(newArr);

