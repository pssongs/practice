function fibs(n) {
  if (n == 1) {
    return [0]
  }
  if (n == 2 ){
    return [0,1]
  } 
  const arr = fibs(n-1)
  return [...arr,arr[n-2]+arr[n-3]]
}

