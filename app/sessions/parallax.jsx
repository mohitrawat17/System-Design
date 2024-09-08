import React, { useRef } from 'react'
import Image1 from '../../public/img1.jpg'
import Image2 from '../../public/img2.jpg'
import Image3 from '../../public/img3.jpg'
import { Parallax } from 'react-parallax'
const ParallaxComp = () => {
    const ref=useRef()
  return (
    <div>
      {/* Parallax Section 1 */}
      <div style={{ height: 500, backgroundColor: "#f1f1f1" }}>
        <h2 style={{ textAlign: "center", paddingTop: "200px" }}>Content Section</h2>
      </div>
      <Parallax bgImage={Image1} strength={300}>
        <div style={{ height: 500 }}>
          <h1 style={{ color: "white", textAlign: "center", paddingTop: "200px" }}>Parallax Effect 1</h1>
        </div>
      </Parallax>

      <div style={{ height: 500, backgroundColor: "#f1f1f1" }}>
        <h2 style={{ textAlign: "center", paddingTop: "200px" }}>Content Section</h2>
      </div>

      {/* Parallax Section 2 */}
      <Parallax bgImage={Image2} strength={200}>
        <div style={{ height: 500 }}>
          <h1 style={{ color: "white", textAlign: "center", paddingTop: "200px" }}>Parallax Effect 2</h1>
        </div>
      </Parallax>

      <div style={{ height: 500, backgroundColor: "#f1f1f1" }}>
        <h2 style={{ textAlign: "center", paddingTop: "200px" }}>Another Content Section</h2>
      </div>
    </div>
  )
}

export default ParallaxComp
