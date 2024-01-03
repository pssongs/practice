function mergeSort(list){
  if(list.length === 1) return list

  const mid = Math.trunc(list.length/ 2)

  const lefthand = mergeSort(list.slice(0,mid))
  const righthand = mergeSort(list.slice(mid))

  const subList = [];

  ((l,r) => {
    let i = 0,
      j = 0

    while(i < l.length && j < r.length) {
      l[i] < r[j] ? subList.push(l[i++]) : subList.push(r[j++]);
    }

    while(i < l.length){
      subList.push(l[i++])
    }

    while(j < r.length){
      subList.push(r[j++])
    }
  })(lefthand,righthand);

  return subList
}


console.log(mergeSort([2,1,5,8,4,0]))