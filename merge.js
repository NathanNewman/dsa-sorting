function merge(array1, array2) {
    const results = [];
    let i = 0;
    let j = 0;
    while(i < array1.length && j < array2.length) {
        if(array1[i] < array2[j]) {
            results.push(array1[i]);
            i++;
        } else {
            results.push(array2[j]);
            j++;
        }
    }
    while(i < array1.length) {
        results.push(array1[i]);
        i++;
    }
    while(j < array2.length) {
        results.push(array2[j]);
        j++;
    }
    return results;
}

function mergeSort(array) {
    //Base case
    if(array.length <= 1) return array;

    //Normal case
    const mid = Math.floor(array.length / 2);
    const left = mergeSort(array.slice(0, mid));
    const right = mergeSort(array.slice(mid));
    return merge(left, right);
}

module.exports = { merge, mergeSort};