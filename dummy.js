const prompt=require("prompt-sync")({sigint:true});
const user_values =[]
const comp_values = []

const choices =[1,2,3,4,5,6,7,8,9]
console.log(choices)

function factoryUser(u_val){
    user_values.push(u_val)
    const index = choices.indexOf(u_val);
    if (index > -1) {
        choices.splice(index, 1);
    }
    return user_values
}

function factoryComp(){
    const random = Math.floor(Math.random() * choices.length);
    const randd = choices[random]
    comp_values.push(randd)
    const index2 = choices.indexOf(randd);
    if (index2 > -1) {
      choices.splice(index2, 1);
    }
    return comp_values
}

for (i =1 ;i<=4 ;i++){
    const u_val = parseInt(prompt('Enter the value : '))
    factoryUser(u_val)
    factoryComp()
    console.log(choices)
    if(choices.length ==1){
        user_values.push(choices[0])      
    }
    if(winner(user_values,comp_values)==1){
        return
    } 
}

function winner (user_values,comp_values){
    //console.log(user_values)
    if(working(user_values) ==1){
        console.log('User Wonn')
        return 1
    }
    else if(working(comp_values)==1){
        console.log("Computer Won")
        return 1
    } 
    
}

function working(arr){
    let key = 0;
   
    const result = arr.reduce((a, v) => arr.reduce((a, v2) => {
        arr.reduce((a, v3) => {
            const current = [v, v2, v3].sort().join(",");
            !a.find(_ => _.sort().join() === current) && a.push([v, v2, v3]);
            return a;
        }, a);
        return a;
    }, a), []);
    
    
    const ar = [
        [1,5,9],[3,5,7],[2,5,8],[4,5,6],[1,2,3],[7,8,9],[1,4,7],[3,6,9]
    ];
    
    
    const hash = {};
    for(let i = 0 ; i < ar.length; i += 1) {
        hash[ar[i]] = i;
    }
    
    for (val of result){
    
    if(hash.hasOwnProperty(val)) {
        key +=1
    } 
}
return key
}

