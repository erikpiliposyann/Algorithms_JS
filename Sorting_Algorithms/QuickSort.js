const quickSort = (arr, low, high) => {
    if (low >= high) {
        return;
    }
    let pivot = arr[high];
    let i = low - 1;
    
    for (let j = low; j < high; ++j) {
        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    const pivotIndex = i + 1;

    quickSort(arr, low, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, high);
    
}
