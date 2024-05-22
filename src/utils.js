function getRolls(n) {
    return Array.from({ length: n }, () => d6());
}

function d6() {
    return Math.floor(Math.random() * 6) + 1;
}

function sum(arr) {
    return arr.reduce((acc, val) => acc + val);
}

export { getRolls, d6, sum };