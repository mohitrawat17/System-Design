import { create } from 'zustand'
import { persist } from 'zustand/middleware'


 const countStore=(set)=>({
    count:0,
    increaseCount:()=>set((state)=>({count:state.count+1})),
    decreaseCount: () => set((state) => ({ count: state.count - 1 })),
})

// for adding data in local storage as well (optional)

//  const useCountStore=create(
//     persist(
//         countStore,
//         {name:"count"}
//     )
//  )

 const useCountStore=create(countStore)

 export default useCountStore