var kClosest = function(points, K) {
  let result = []
  let distances = []
  var calcDistance = function(side1, side2) {
    let side1Squared = Math.pow(side1, 2)
    let side2Squared = Math.pow(side2, 2)
    return Math.sqrt( (side1Squared + side2Squared) )
  }
    
  for (let i = 0; i < points.length; i++) {
    let currentDistance = calcDistance(points[i][0], points[i][1])
    distances.push({
      id: i,
      points: points[i],
      distance: currentDistance,
    })
  }
  distances.sort((a, b) => (a.distance > b.distance) ? 1 : -1)
  for (let i = 0; i < K; i++) {
    result.push(distances[i].points)
  }
  return result
};