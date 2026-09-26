const countingSort = (arr) => { 
    const max = Math.max(...arr);
    const min = Math.min(...arr);

    const len = max - min + 1;

    const countArray = new Array(len).fill(0);

    for (let i = 0; i < arr.length; ++i) {
        let value = arr[i];
        countArray[value - min]++;
    }

    const result = [];

    for (let i = 0; i < countArray.length; ++i) {
        while (countArray[i] > 0) {
            result.push(i + min);
            countArray[i]--;
        }
    }

    return result;
};
