import React, { useRef } from 'react'
import useHover from '../hooks/useHover'

export const Hover = () => {
    const ref = useRef();
    const isHovering = useHover(ref);
  return (
    <div ref={ref} style={{height: 200, width: 200, background: !isHovering ? "red" : 'green', marginTop: 50}}>
    </div>
  )
}
