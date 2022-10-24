function solution(angle) {    
    if (angle < 90) {
        return 1;
    } else if(angle === 90) {
        return 2;
    } else if(angle <180) {
        return 3;
    } else {
        return 4;
    }
}

// function solution(angle) {    
//     if(0 < angle < 90) {
//         result = 1;
//     } else if(angle = 90) {
//         result = 2;
//     } else if(90 < angle <180) {
//         result = 3;
//     } else {
//         result = 4;
//     }
//     console.log(angle);
// }


// if(0 < i < 90) {
//     let a = 1;
// } else if(i = 90) {
//     let a = 2;
// } else if(90 < i <180) {
//     let a = 3;
// } else {
//     let a = 4;
// }

// console.log(a);