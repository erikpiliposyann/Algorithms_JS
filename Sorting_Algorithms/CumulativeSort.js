const countingSort = (arr) => {
    const max = Math.max(...arr);
    const min = Math.min(...arr);

    const range = max - min + 1;
    const countArray = new Array(range).fill(0);

    for (let i = 0; i < arr.length; ++i) {
        countArray[arr[i] - min]++;
    }

    for (let i = 1; i < countArray.length; ++i) {
        countArray[i] += countArray[i - 1];
    }

    const result = new Array(arr.length);

    for (let i = arr.length - 1; i >= 0; --i) {
        const value = arr[i];
        const countIndex = value - min;
        const position = countArray[countIndex] - 1;

        result[position] = value;
        countArray[countIndex]--;
    }

    return result;
};
