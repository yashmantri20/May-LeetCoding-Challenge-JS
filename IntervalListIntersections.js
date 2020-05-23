var intervalIntersection = function(A, B) {
  let a = 0;
  let b = 0;
  let ans = [];
  while (a < A.length && b < B.length) {
    let low = Math.max(A[a][0], B[b][0]);
    let high = Math.min(A[a][1], B[b][1]);
    if (high >= low) {
      ans.push([low, high]);
    }
    if (A[a][1] < B[b][1]) {
      a++;
    } else {
      b++;
    }
  }
  return ans;
};
