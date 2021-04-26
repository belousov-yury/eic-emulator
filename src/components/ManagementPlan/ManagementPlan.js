import React, {useEffect, useRef, useState} from "react";
import './ManagementPlan.css'
import CurrentTimeLine from "./CurrentTimeLine";
import Marking from "./Marking";

function ManagementPlan() {
  const containerRef = useRef(null)
  const currentTimeLineRef = useRef(null)

  let [direct, setDirect] = useState('top')
  let [currentTime, setCurrentTime] = useState(new Date().getHours() + new Date().getMinutes() / 60 + new Date().getSeconds() / 60 / 60)
  let timeInterval

  useEffect(() => {
    startTimer()
    updateDirect()
    window.addEventListener('resize', updateDirect)

    return () => {
      stopTimer()
      window.removeEventListener('resize', updateDirect)
    }
  })

  useEffect(() => {
    scrollToCurrentLine()
  }, [])

  function startTimer() {
    timeInterval = setInterval(() => {
      const date = new Date()
      const time = date.getHours() + date.getMinutes() / 60 + date.getSeconds() / 60 / 60
      setCurrentTime(time)
    }, 1000)
  }

  function stopTimer() {
    clearInterval(timeInterval)
  }

  const updateDirect = () => {
    if (containerRef?.current?.clientHeight) {
      const newDir = containerRef.current.clientHeight > containerRef.current.clientWidth ? 'top' : 'left'

      setDirect(containerRef.current.clientHeight > containerRef.current.clientWidth ? 'top' : 'left')
      if(newDir !== direct) scrollToCurrentLine()

    }
  }

  const scrollToCurrentLine = () => {
    console.log('kek')
    if (currentTimeLineRef.current) {
      currentTimeLineRef.current.scrollIntoView({inline: "center"})
      if(direct ==='top') {
        containerRef.current.scrollTop = containerRef.current.scrollTop - 200
      } else {
        containerRef.current.scrollLeft = containerRef.current.scrollLeft + 200
      }
    }
  }

  return (
    <fieldset ref={containerRef} className={'management-plan'}>
      <legend onClick={scrollToCurrentLine}>
        Суточный план
        <button>lll</button>
      </legend>
      <div className="management-plan__container">
        <Marking direct={direct}/>
        <CurrentTimeLine direct={direct} currentTime={currentTime} customRef={currentTimeLineRef}/>
      </div>
    </fieldset>
  )
}

export default ManagementPlan