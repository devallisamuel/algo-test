function isMonotonic(array: number[]) {
  let isNonDecreasing = true;
  let isNonIncreasing = true;
  for (let i = 1; i < array.length; i++) {
    if (array[i] < array[i - 1]) isNonDecreasing = false;
    if (array[i] > array[i - 1]) isNonIncreasing = false;
  }

  return isNonDecreasing || isNonIncreasing;
}

function rotate(nums: number[], k: number): void {
    
    if(nums.length === 1) return;
    
    const collector: number[] = [];
    let count = 0;
    let extent = k % nums.length;

    while(count < extent) {
        count++;
        let temp= nums.pop()!;
        collector.unshift(temp);
    }

    count = extent;

    while(count > 0) {
         count--;
        let temp = collector.pop()!;
        nums.unshift(temp);
    }
};

