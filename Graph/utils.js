const A = 0;
const B = 1;
const C = 2;
const D = 3;
const E = 4;
const F = 5;
const G = 6;
const H = 7;
const I = 8;
const J = 9;
const K = 10;
const L = 11;
const M = 12;
const N = 13;

// Adjacency matrix
const aMatrix1 = [
  // A  B  C  D  E  F  G  H  I  J
  [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], // A
  [0, 0, 1, 1, 1, 0, 0, 0, 0, 0], // B
  [1, 1, 0, 0, 0, 0, 0, 0, 0, 0], // C
  [0, 1, 0, 0, 0, 1, 1, 0, 0, 0], // D
  [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], // E
  [0, 0, 0, 1, 0, 0, 0, 0, 1, 1], // F
  [0, 0, 0, 1, 0, 0, 0, 1, 0, 0], // G
  [0, 0, 0, 0, 0, 0, 1, 0, 0, 0], // H
  [0, 0, 0, 0, 0, 1, 0, 0, 0, 0], // I
  [0, 0, 0, 0, 0, 1, 0, 0, 0, 0], // J
]

// Adjacency list
const aList1 = [
  [[C, 1]],                   //A
  [[C, 1], [E, 1], [D, 1]],     //B
  [[A, 1], [B, 1]],              //C
  [[B, 1], [G, 1], [F, 1]],        //D
  [[B, 1]],                       //E
  [[D, 1], [I, 1], [J, 1]],   //F
  [[D, 1], [H, 1]],   //G
  [[G, 1]],   //H
  [[F, 1]],   //I
  [[F, 1]]    //J
];

// Edge list
const eList1 = [
  [A, C, 1],
  [C, B, 1],
  [B, E, 1],
  [B, D, 1],
  [B, C, 1],
  [D, G, 1],
  [D, F, 1],
  [G, H, 1],
  [F, I, 1],
  [F, J, 1]
];

const problem1 = {
  aMatrix: aMatrix1,
  aList: aList1,
  eList: eList1
}

// Adjacency list
const aList2 = [
  [[B, 1], [E,1]],                //A
  [[A, 1], [E, 1]],               //B
  [[H, 1], [F, 1]],               //C
  [[G, 1]],                       //D
  [[A, 1], [B, 1]],               //E
  [[C, 1], [G, 1]],               //F
  [[D, 1], [F, 1]],               //G
  [[C, 1]],                       //H
  [[L, 1]],                       //I
  [[M, 1],[N,1]],                 //J
  [[L, 1]],                       //K
  [[I, 1],[K,1]],                 //L
  [[J, 1]],                       //M
  [[J, 1]]                        //N
];

const problem2 = {
  aList: aList2,
}

module.exports = {
  A, B, C, D, E, F, G, H, I, J, K, L, M, N,
  problem1, problem2
}