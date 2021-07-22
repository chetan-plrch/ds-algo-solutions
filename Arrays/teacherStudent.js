const scores = [5, 10, 11, 12]

function rewards() {
    if(scores && scores.length === 1) {
        return 1;
    }

    let d = [];
    let r = new Array(scores.length);
    let l = scores.length;

    for(let i = 0; i < scores.length; i++) {
        {
            if(i === 0) {
                // At start
                if(scores[i] < scores[i+1]) {
                    r[0] = 1;
                }
            } else if(i > 0 && i < l) {
                // In between
                if(scores[i-1] > scores[i]) {
                    r[i] = 1;
                }
            } else {
                // Last
                if((scores[i] < scores[i+1]) && (scores[i] < scores[i-1])) {
                    r[i] = 1;
                }
            }
        }

        {
            
        }
    }

    console.log('R', r);
}

console.log(rewards());