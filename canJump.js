var jump = function (nums) {
  let n = nums.length;
  let jumps = 0;
  let left = 0;
  let right = 0;

  while (right < n - 1) {
    let max = 0;
    for (let i = left; i <= right; i++) {
      max = Math.max(max, i + nums[i]);
    }
    left = right + 1;
    right = max;
    jumps++;
  }

  return jumps;
};

var jumpp = function (nums) {
  let totalJumps = 0;
  let currentJump = 0;
  let farthestJump = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    farthestJump = Math.max(farthestJump, i + nums[i]);
    if (i === currentJump) {
      totalJumps++;
      currentJump = farthestJump;
    }
  }
  return totalJumps;
};

const num = [2, 3, 1, 1, 4];
