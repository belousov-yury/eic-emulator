import React, {useEffect, useRef, useState} from "react";
import './ManagementPlan.css'
import CurrentTimeLine from "./CurrentTimeLine";
import Marking from "./Marking";
import PlanItem from "./PlanItem";
import anchorLogo from '../../assets/svg/anchorSVG.svg'
import unAnchorLogo from '../../assets/svg/unancherLogo.svg'

function ManagementPlan() {
  const containerRef = useRef(null)
  const currentTimeLineRef = useRef(null)

  let [direct, setDirect] = useState(null)
  let [currentTime, setCurrentTime] = useState(new Date().getHours() + new Date().getMinutes() / 60 + new Date().getSeconds() / 60 / 60)

  const [timer, setTimer] = useState('');
  const [activeTimer, setActiveTimer] = useState(false)


  useEffect(() => {
    window.addEventListener('resize', updateDirect)
    const timeInterval = setInterval(() => {
      const date = new Date()
      const time = date.getHours() + date.getMinutes() / 60 + date.getSeconds() / 60 / 60
      setCurrentTime(time)
    }, 1000)

    return () => {
      window.removeEventListener('resize', updateDirect)
      clearInterval(timeInterval)
      stopTimer()
    }
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    updateDirect()
    scrollToCurrentLine()
    // eslint-disable-next-line
  }, [direct])


  const updateDirect = () => {
    if (containerRef?.current?.clientHeight) {
      const newDir = getDirect()
      if (newDir !== direct) {
        setDirect(newDir)
        scrollToCurrentLine()
      }
    }
  }
  const getDirect = () => containerRef.current.clientHeight > containerRef.current.clientWidth ? 'top' : 'left'

  const scrollToCurrentLine = () => {
    if (currentTimeLineRef.current) {
      if (getDirect() === 'top') {
        const height = containerRef.current.scrollHeight
        const coef = 100 / 24 * currentTime
        containerRef.current.scrollTop = height * coef / 100 - 200
      } else {
        const width = containerRef.current.scrollWidth
        const coef = 100 / 24 * currentTime
        containerRef.current.scrollLeft = width * coef / 100 - 250
      }
    }
  }

  const disableBodyScroll = () => {
    if (getDirect() === 'left') {
      window.document.body.style.overflow = 'hidden'
    }
  }

  const enableBodyScroll = () => {
    window.document.body.style.overflow = 'visible'
  }
  const horizontalScroll = (e) => {
    stopTimer()
    if (getDirect() === 'left') {
      containerRef.current.scrollLeft += e.deltaY
    }
  }

  const startTimer = () => {
    scrollToCurrentLine()
    const newTimer = setInterval(() => {
      scrollToCurrentLine()
    }, 5000)
    setTimer(newTimer)
    setActiveTimer(true)
  }

  const stopTimer = () => {
    clearInterval(timer)
    setActiveTimer(false)
  }

  const updateTimerState = () => {
    if (activeTimer) {
      stopTimer()
    } else {
      startTimer()
    }
  }

  return (
    <fieldset ref={containerRef} className={'management-plan'}
              onWheel={e => {
                horizontalScroll(e)
                disableBodyScroll()
              }}
              onMouseLeave={enableBodyScroll}
    >
      <legend onClick={updateTimerState}>
        Суточный план
        <button className={'management-plan__anchor-button'}>
          {
            activeTimer
              ? <img src={ unAnchorLogo} alt="" />
              : <img src={ anchorLogo } alt="" />
          }
        </button>
      </legend>

      <div className="management-plan__container">
        <Marking direct={direct}/>
        <CurrentTimeLine direct={direct} currentTime={currentTime} customRef={currentTimeLineRef}/>
        <PlanItem name='Какой-то сеанс' duration='180' start='13.20' direct={direct}/>
        <PlanItem name='Какой-то сеанс' duration='1100' start='14.20' direct={direct}/>
        <PlanItem name='Какой-то сеанс' duration='2500' start='15.20' direct={direct}/>
      </div>
    </fieldset>
  )
}

export default ManagementPlan