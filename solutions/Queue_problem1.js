const Queue = require('./QueueUsingStack')
const Stack = require('./stackUsingArray')

const values = [10, 12, 19, 26, 27, 31, 33, 35, 42, 44]
const q1 = new Queue()
values.forEach((value) => {
    q1.enqueue(value)
})

const s1 = new Stack(q1.size)
for(let i = 0; i < values.length; i++) {
    s1.push(q1.dequeue())
}

for(let i = 0; i < values.length; i++) {
    q1.enqueue(s1.pop())
}

q1.display()