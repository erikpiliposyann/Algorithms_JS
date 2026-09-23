const selectionSort = (arr) => {
    const len = arr.length;

    for (let i = 0; i < len - 1; ++i) {
        let min = i;

        for (let j = i + 1; j < len; ++j) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }

        if (min !== i) {
            [arr[min], arr[i]] = [arr[i], arr[min]];
        }
    }

    return arr;
};
