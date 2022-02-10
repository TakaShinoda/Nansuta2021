import React, { VFC, useEffect, useState, useRef } from 'react'
// import BIRDS from 'vanta/dist/vanta.birds.min'
import CLOUDS from 'vanta/dist/vanta.clouds.min'

// import Head from 'next/head'
import * as THREE from 'three'

// WebGLで動作（Three.jsとp5.jsのラッパー）

export const Vanta: VFC = () => {
//   useEffect(() => {
//     const threeScript: HTMLElement = document.createElement('script')
//     threeScript.setAttribute('id', 'threeScript')
//     threeScript.setAttribute(
//       'src',
//       'https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js'
//     )
//     console.log(
//       document.getElementsByTagName('head')[0].appendChild(threeScript)
//     )
//     document.getElementsByTagName('head')[0].appendChild(threeScript)
//     return () => {
//       if (threeScript) {
//         threeScript.remove()
//       }
//     }
//   }, [])

  const [vantaEffect, setVantaEffect] = useState(0)
  const myRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        CLOUDS({
          el: myRef.current,
          THREE

          // mouseControls: true,
          // touchControls: true,
          // gyroControls: false,
          // minHeight: 200.0,
          // minWidth: 200.0,
          // scale: 1.0,
          // scaleMobile: 1.0,
          // backgroundColor: 0x6680a4,
          // color1: 0x3b7582,
          // color2: 0x4aff,
          // birdSize: 1.5,
          // wingSpan: 25.0,
          // speedLimit: 3.0,
          // separation: 90.0,
          // alignment: 0.0,
          // cohesion: 100.0,
          // quantity: 4.0,
          // backgroundAlpha: 0.0,

        //   mouseControls: true,
        //   touchControls: true,
        //   gyroControls: false,
        //   minHeight: 200.0,
        //   minWidth: 200.0,
        })
      )
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  return (
    <>
      {/* <Head>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"></script>
      </Head> */}

      <div style={{ minHeight: '100vh' }} ref={myRef}></div>
    </>
  )
}
