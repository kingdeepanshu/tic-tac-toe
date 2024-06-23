let a = [0,0,0,0,0,0,0,0,0];
        let b = []
        let i = 0;
        function win(){
            return (a[0]+a[1]+a[2] == 15)||(a[3]+a[4]+a[5]==15)||(a[6]+a[7]+a[8]==15)||(a[0]+a[3]+a[6]==15)||(a[1]+a[4]+a[7]==15)||(a[2]+a[5]+a[8]==15)||(a[0]+a[4]+a[8]==15)||(a[2]+a[4]+a[6]==15)
            }

            function loss(){
            return (a[0]+a[1]+a[2] == 12)||(a[3]+a[4]+a[5]==12)||(a[6]+a[7]+a[8]==12)||(a[0]+a[3]+a[6]==12)||(a[1]+a[4]+a[7]==12)||(a[2]+a[5]+a[8]==12)||(a[0]+a[4]+a[8]==12)||(a[2]+a[4]+a[6]==12)
            }


        function play(value){
                a[value] = 5;
            document.getElementById("q"+value).innerHTML = "x";
            document.getElementById("q"+value).disabled = true;
            b.push(value);

            let x = Math.floor(Math.random()*9);
            while(b.includes(x)){
                x = Math.floor(Math.random()*9);
            }
            document.getElementById("q"+x).innerHTML = 'o';
            document.getElementById("q"+x).disabled = true;
            b.push(x);
            a[x] = 4;
            console.log(a);
            if(win()||loss()){
                document.querySelectorAll('.but').forEach(function(button) {
                    button.disabled = true;
                })
            }
        }