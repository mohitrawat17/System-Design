import React, { useEffect, useState } from "react";

const ImageSlider = () => {
  const dummyImages = [
    "https://imgs.search.brave.com/x2RMjs-ld7AwlRtkNyWDW-3TECgsoXHZlbqSrwObyDU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9waWNz/dW0ucGhvdG9zLzY0/MC80ODAvP2ltYWdl/PTEwMDI.jpeg",
    "https://imgs.search.brave.com/mFX-6-WdUSixxYKJgsb41TfI5cLkq5Cf3PUx775pAfM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/MmZqZXVuM3BnZTRk/MS5qcGVnP3dpZHRo/PTY0MCZjcm9wPXNt/YXJ0JmF1dG89d2Vi/cCZzPWFjMTA0YjMx/ZGYxYTQxY2Y1M2Fh/M2VkMWNmYmEyM2E0/YWQ3ZjExOTg",
    "https://imgs.search.brave.com/90e6HNOmkIB4qWRBMh9MWAAu80yw_EXpYJQkyDXUIlQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZnJlZWltYWdl/cy5jb20vaW1hZ2Vz/L2xhcmdlLXByZXZp/ZXdzL2Y0OC9yYW5k/b20tcGljcy0xLTEz/MjQyODcuanBnP2Zt/dA",
    "https://imgs.search.brave.com/pmydF8L42ReClfs6QIBPwQ-XmwJS0eP1mJUADLMuLfE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZnJlZWltYWdl/cy5jb20vaW1hZ2Vz/L2xhcmdlLXByZXZp/ZXdzLzYxMC9yYW5k/b20tMTU3NDM5MS5q/cGc_Zm10",
  ];

  const [imgIndex, setImgIndex] = useState(0);
console.log(imgIndex);

  const handleNavigation=(direction)=>{
        if(direction){
          // NEXT
          // if(imgIndex<dummyImages.length-1){
          //   setImgIndex(prev=>prev+=1)
          //   console.log('if');
          // }
          // else{
          //   setImgIndex(0)
          //   console.log('else');
          // }
          setImgIndex(prev=>(prev+1)%dummyImages.length)
        }
        else{
          // PREV
          if(imgIndex===0){
            setImgIndex(dummyImages.length-1)
          }
          else{
            setImgIndex(prev=>prev-=1)
          }
        }
  }



  useEffect(()=>{
    const interval=setInterval(()=>handleNavigation(true),3000)


    return ()=>{
      clearInterval(interval)
    }

  },[])

  return (
    <div style={{margin:"100px 0"}} className="center">
      <div className="center">
        <button onClick={()=>handleNavigation(0)}>Prev</button>
        <img src={dummyImages[imgIndex]} style={{margin:"0 20px",height:"300px",width:"400px"}}/>
        <button onClick={()=>handleNavigation(1)}>Next</button>
      </div>
    </div>
  );
};

export default ImageSlider;
