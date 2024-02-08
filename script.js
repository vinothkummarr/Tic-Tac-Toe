const one = document.getElementById('one')

const user_values =[]
const comp_values = []

const choices =[1,2,3,4,5,6,7,8,9]
console.log(choices)

function playGame(val){
    factoryUser(val)
    const sel_button = document.getElementById(val)
    //sel_button.style.backgroundColor ='green'
    sel_button.innerHTML = "X"
    sel_button.style.color = 'black'
    sel_button.disabled= true
    if(choices.length !=0){
    factoryComp()
    }
    
    
    if(choices.length ==1){
        user_values.push(choices[0]) 
        const last_button =document.getElementById(choices[0])
        last_button.innerHTML ="X"
        last_button.style.color ='black'
        last_button.disabled=true     
    }
    console.log(choices)
    console.log(user_values)
    if(working(user_values)==1){
        const result = document.getElementById('gameover')
        result.style.display ='block'
        const message = document.getElementById('gameovermessage')
        message.innerText ='User Won'
        const restart = document.getElementById('restart')
        restart.style.display ='block'
    } 
    if(working(comp_values)==1){
        console.log("Computer Won")
        const result = document.getElementById('gameover')
        result.style.display ='block'
        const message = document.getElementById('gameovermessage')
        message.innerText ='Computer Won'
    } 
    if(working(comp_values)==1 && working(user_values)==1){
        console.log("Tie Match")
        const result = document.getElementById('gameover')
        result.style.display ='block'
        const message = document.getElementById('gameovermessage')
        message.innerText ='Tie Match'
    }
}

function winner (user_values,comp_values){
    //console.log(user_values)
    if(working(user_values) >=1){
        //console.log('User Wonn')
        //const result = document.getElementById('gameover')
        //result.style.display ='block'
        //const message = document.getElementById('gameovermessage')
        //message.innerText ='User Won'
    }
    if(working(comp_values)>=1){
        //console.log("Computer Won")
        //const result = document.getElementById('gameover')
        //result.style.display ='block'
        //const message = document.getElementById('gameovermessage')
        //message.innerText ='Computer Won'
    } 
    if((working(user_values)>=1) && (working(comp_values)>=1)){
        //console.log("Tie Match")
        //const result = document.getElementById('gameover')
        //result.style.display ='block'
        //const message = document.getElementById('gameovermessage')
        //message.innerText ='Tie Match'
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
    const sys_button = document.getElementById(randd)
    //sys_button.style.backgroundColor = "red"
    sys_button.innerHTML = "O"
    sys_button.style.color = 'black'
    sys_button.disabled=true
    if(choices.length ==1){
        playGame(choices[0])
    }
    const index2 = choices.indexOf(randd);
    if (index2 > -1) {
      choices.splice(index2, 1);
    }
    return comp_values
}

function restart(){
    window.location.reload()
}