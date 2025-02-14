import { CharStatus } from '../../lib/statuses'
import classnames from 'classnames'
import { REVEAL_TIME_MS } from '../../constants/settings'

type Props = {
  value?: string
  status?: CharStatus
  isRevealing?: boolean
  isCompleted?: boolean
  position?: number
}

export const Cell = ({
  value,
  status,
  isRevealing,
  isCompleted,
  position = 0,
}: Props) => {
  const isFilled = value && !isCompleted
  const shouldReveal = isRevealing && isCompleted
  const animationDelay = `${position * REVEAL_TIME_MS}ms`

  const classes = classnames(
    'w-14 h-14 border-solid border-2 flex items-center justify-center mx-0.5 text-4xl font-bold rounded',
    {
      'bg-black border-black dark:bg-black text-white dark:text-white dark:border-white':
        !status,
      'border-black dark:border-slate-100': value && !status,
      'absent shadowed dark:border-solid dark:border-4 bg-black text-slate-700 border-black dark:bg-black dark:text-white dark:border-black':
        status === 'absent',
      'correct shadowed dark:border-solid dark:border-4 bg-black text-blue-500 border-black dark:bg-blue-500 dark:text-white dark:border-white':
        status === 'correct',
      'present shadowed dark:border-dashed dark:border-4 bg-black text-orange-500 border-black dark:bg-orange-500 dark:text-white dark:border-white':
        status === 'present',
      'cell-fill-animation': isFilled,
      'cell-reveal': shouldReveal,
    }
  )

  return (
    <div className={classes} style={{ animationDelay }}>
      <div className="letter-container" style={{ animationDelay }}>
        {value}
      </div>
    </div>
  )
}
