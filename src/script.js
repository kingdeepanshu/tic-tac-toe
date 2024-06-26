let a = [0,0,0,0,0,0,0,0,0];
let b = []
let i = 0;
let count = 0;
function win(){
    return (a[0]+a[1]+a[2] == 15)||(a[3]+a[4]+a[5]==15)||(a[6]+a[7]+a[8]==15)||(a[0]+a[3]+a[6]==15)||(a[1]+a[4]+a[7]==15)||(a[2]+a[5]+a[8]==15)||(a[0]+a[4]+a[8]==15)||(a[2]+a[4]+a[6]==15)
    }

function loss(){
    return (a[0]+a[1]+a[2] == 12)||(a[3]+a[4]+a[5]==12)||(a[6]+a[7]+a[8]==12)||(a[0]+a[3]+a[6]==12)||(a[1]+a[4]+a[7]==12)||(a[2]+a[5]+a[8]==12)||(a[0]+a[4]+a[8]==12)||(a[2]+a[4]+a[6]==12)
    }

let type;
function player(){
    reset();
    if(document.getElementById("player").innerHTML == "Single Player"){
        document.getElementById("player").innerHTML = "Multi Player"
        document.getElementById("p2").innerHTML = "Player Two";
        document.getElementById("p2s").innerHTML = "Player Two";

        type = false;
    }else{
        document.getElementById("player").innerHTML = "Single Player";
        document.getElementById("p2").innerHTML = "Computer";
        document.getElementById("p2s").innerHTML = "Computer";
        type =  true;
    }
}

function reset(){
    document.querySelectorAll('.but').forEach(function(button) {
        button.disabled = false;
        button.innerHTML = "";
    })
    a = [0,0,0,0,0,0,0,0,0];
    b = [];

}

let p1 = 0;
let p2 = 0;

function play(value){
    if(type){
        a[value] = 5;
        document.getElementById("q"+value).innerHTML = "x";
        document.getElementById("q"+value).disabled = true;
        b.push(value);

        if(b.length < 9){
            let x = Math.floor(Math.random()*9);
            while(b.includes(x)){
                x = Math.floor(Math.random()*9);
            }
            document.getElementById("q"+x).innerHTML = 'o';
            document.getElementById("q"+x).disabled = true;

            b.push(x);
            a[x] = 4;
        }
        if(win()||loss()){
            document.querySelectorAll('.but').forEach(function(button) {
                button.disabled = true;
            })
        }
    }else{
        if(count%2 == 0){
            a[value] = 5;
            document.getElementById("q"+value).innerHTML = "x";
            document.getElementById("q"+value).disabled = true;
            b.push(value);
        }else{
            a[value] = 4
            document.getElementById("q"+value).innerHTML = 'o';
            document.getElementById("q"+value).disabled = true;
            b.push(value);
        }

    }
    count++;

    if(win()||loss()){
        document.querySelectorAll('.but').forEach(function(button) {
            button.disabled = true;
        })  
        count = 0;
    }
    if(win()){

        p1++;
        document.getElementById("p1wins").innerHTML = p1+" Wins" 
        document.getElementById("p1win").innerHTML = p1+" Wins" 

    }
    if(loss()){
        
        p2++;
        document.getElementById("p2wins").innerHTML = p2+" Wins"
        document.getElementById("p2win").innerHTML = p2+" Wins"
    }
}