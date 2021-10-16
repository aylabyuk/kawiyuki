import React from 'react'
import { motion, Transition } from 'framer-motion'

export interface HamburgerProps {
  isOpen?: boolean
  onClick: () => void
}

export const Hamburger: React.FC<HamburgerProps> = ({
  isOpen = false,
  onClick,
}) => {
  const width = 16
  const height = 16
  const transition: Transition = { type: 'spring', stiffness: 260, damping: 20 }

  const variant = isOpen ? 'opened' : 'closed'

  const top = {
    closed: {
      rotate: 0,
      translateY: 0,
    },
    opened: {
      rotate: 45,
      translateY: 2,
    },
  }

  const center = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  }

  const bottom = {
    closed: {
      rotate: 0,
      translateY: 0,
    },
    opened: {
      rotate: -45,
      translateY: -2,
    },
  }

  const lineProps = {
    vectorEffect: 'non-scaling-stroke',
    initial: 'closed',
    animate: variant,
    transition,
  }

  const unitHeight = 4
  const unitWidth = (unitHeight * width) / height

  return (
    <button onClick={onClick}>
      <motion.svg
        viewBox={`0 0 ${unitWidth} ${unitHeight}`}
        overflow="visible"
        preserveAspectRatio="none"
        width={width}
        height={height}
        transition={transition}
        strokeLinecap="round"
        strokeWidth={6}
        className="stroke-current text-rose-600"
      >
        <motion.line
          x1="0"
          x2={unitWidth}
          y1="0"
          y2="0"
          variants={top}
          {...lineProps}
        />
        <motion.line
          x1="0"
          x2={unitWidth}
          y1="2"
          y2="2"
          variants={center}
          {...lineProps}
        />
        <motion.line
          x1="0"
          x2={unitWidth}
          y1="4"
          y2="4"
          variants={bottom}
          {...lineProps}
        />
      </motion.svg>
    </button>
  )
}

export default Hamburger
