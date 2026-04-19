const memoizedFn=(fn)=>{
  const cache={}
  
  return function(...args){
     const argsToString=JSON.stringify(args)
     if(cache[argsToString]){
       console.log('cache')
       return cache[argsToString]
     }
     else{
       console.log('calculation')
       const res=fn.apply(this,args)
       cache[argsToString]=res
       return res
     }

  }
  
}


const addNum=(a,b,c)=>{
  return a+b+c
}

const memoizedAddition=memoizedFn(addNum)

console.log(memoizedAddition(1,2,3))
console.log(memoizedAddition(1,2,3))


