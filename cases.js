const fact = n => {
    if (n === 1) return 1;
    return n * fact(n - 1);
}

const permutation = (n, r) => fact(n) / fact(n - r);
const combination = (n, r) => permutation(n, r) / fact(r);
const multiPermutation = (n, r) => n ** r;
const multiCombination = (n, r) => combination(n + r - 1, r);

module.exports = {
    permutation,
    combination,
    multiPermutation,
    multiCombination
};