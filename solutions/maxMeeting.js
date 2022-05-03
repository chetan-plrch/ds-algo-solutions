let start = [1, 3, 0, 5, 8, 5];
let end = [2, 4, 6, 7, 9, 9];

function countMeeting() {
    let allot = new Array(start.length);

    for(let i = 0; i < start.length; i++) {
        let occupied = false;
        let sTime = start[i];
        let eTime = end[i];

        for(let k = sTime; k <= eTime; k++) {
            if(allot[k] === 1) {
                occupied = true;
                break;
            }
        }

        if(!occupied) {
            for(let l = sTime; l <= eTime; l++) {
                allot[l] = 1;
            }
            console.log('Meeting at ', sTime, ' to ', eTime);
        }
    }
}


countMeeting();