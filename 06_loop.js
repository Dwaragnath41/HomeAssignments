function loops(num){

    let Sum = 0;

    for(let i=0; i<=num; i++){

        Sum = Sum + i;

    }

    return Sum;


}

const answer = loops(5);
console.log(answer);