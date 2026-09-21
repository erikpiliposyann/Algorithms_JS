const jumpSearch = (arr, target) => {
    const length = arr.length;

    if (length === 0) return -1;

    const step = Math.floor(Math.sqrt(length));
    let start = 0;
    let end = step;

    while (start < length && arr[Math.min(end, length) - 1] < target) {
        start = end;
        end += step;
    }

    for (let i = start; i < Math.min(end, length); ++i) {
        if (arr[i] === target) {
            return i;
        }
    }

    return -1;
};
