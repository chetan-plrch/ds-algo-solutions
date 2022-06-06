const input = {
    str: 'abcdgh',
    str2: 'abedfhr'
}
/**
 * abcdgh, abedfhr
 * {0, 0}
 * a === a, count = 1
 * {1, 1}
 * b === b, count = 2
 * {2, 2}
 * c !== e, count = 2
 * {2, 3}, {3, 2}
 * ->   c !== d, count = 2
 *      {2, 4}, {3, 3}
 * ->   d !== e, count = 2
 *      {3, 3}, {4, 2}
 */

// Answer = abdh = 4
/**
 * Rough notes:
 * 1. bchedi
 * 2. habidi
 */

const lcs = (str, str2) => {
    const h1 = constructHashmap(0, str, '', { count: 0 });
    constructHashmap(0, str2, '', h1);

    return h1.count;
}

const constructHashmap = (idx, str, sub, hashMap) => {
    if(sub) hashMap.count = Math.max(hashMap.count, sub.length);
    if(idx === str.length) return;

    constructHashmap(idx + 1, str, sub + str[idx], hashMap);
    constructHashmap(idx + 1, str, sub, hashMap);

    return hashMap;
}

console.log(lcs(input.str, input.str2));

const lcsRecursive = (str, str2, m, n) => {
    if (n === str.length || m === str2.length) return 0;

    if(str.charAt(m) === str2.charAt(n))
        return 1 + lcsRecursive(str, str2, m + 1, n + 1);
    else {
        return Math.max(
            lcsRecursive(str, str2, m + 1, n),
            lcsRecursive(str, str2, m, n + 1)
        );
    }
}

console.log(lcsRecursive(input.str, input.str2, 0, 0));

