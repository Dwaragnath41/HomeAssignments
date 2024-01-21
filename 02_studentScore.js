let result;


function calculateGrade(score){

    switch (true) {

        case (score>90):
        console.log("Scored is Excellent");      
        break;

        case  (score>80):
        console.log("Scored is super good");
        break;

        case  (score>70):
        console.log("Scored is fine");
        break;
    
        default:
            console.log("Have to try again");
            break;
    }


}

calculateGrade(90);