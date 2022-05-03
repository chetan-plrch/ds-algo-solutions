function getFirstUnique(arr) {
    let queue = [];
    let m1 = new Map();
    for(let i = 0; i < arr.length; i++) {
        queue.push(arr[i]);
        if(m1.get(arr[i])) {
            m1.set(arr[i], m1.get(arr[i]) + 1)
        } else {
            m1.set(arr[i], 1)
        }

        let freq = m1.get(queue[0]);
        while(freq > 1) {
            queue.shift();
            freq = m1.get(queue[0]);
        }

        console.log(queue[0] ? queue[0]: -1);
    }
}

getFirstUnique(['a', 'b', 'c', 'b', 'a', 'c']);