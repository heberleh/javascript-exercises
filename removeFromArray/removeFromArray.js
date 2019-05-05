const removeFromArray = function(...args) {
    newArray = [];
    list = args[0];

    // solution 1
    for (let i = 0; i < list.length; i++){
        if (!args.includes(list[i])){
            newArray.push(list[i]);
        }
    }

    // solution 2
    // list.forEach((item)=>{
    //     if(!args.includes(item)){
    //         newArray.push(item);
    //     }
    // })

    return newArray;
}


module.exports = removeFromArray
