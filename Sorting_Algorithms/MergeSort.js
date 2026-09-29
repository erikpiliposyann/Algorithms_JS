const merge = (arr, left, mid, right) => {
  const result = [];
  let i = left;
  let j = mid + 1;

  while (i <= mid && j <= right) {
    if (arr[i] <= arr[j]) {
      result.push(arr[i]);
      i++;
    } 
    else {
      result.push(arr[j]);
      j++;
    }
  }
  while (i <= mid) {
    result.push(arr[i]);
    i++;
  }
  
  while (j <= right) {
    result.push(arr[j]);
    j++;
  }

  for (let k = 0; k < result.length; k++) {
    arr[left+k] = result[k];
  }
  
}

const mergeSort = (arr, left, right) => {
  if (left >= right) {
    return;
  }

  const mid = Math.floor((left + right) / 2);

  mergeSort(arr, left, mid);
  mergeSort(arr, mid + 1, right);

  merge(arr, left, mid, right);
}
