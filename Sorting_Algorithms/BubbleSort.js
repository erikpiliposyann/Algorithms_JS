const bubbleSort = (arr) => {
    const len = arr.length;

    for (let i = 0; i < len - 1; ++i) {
        let flag = false;

        for (let j = 0; j < len - 1 - i; ++j) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                flag = true;
            }
        }

        if (!flag) {
            return arr;
        }
    }

    return arr;
};
