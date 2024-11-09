import { parseISO, format } from 'date-fns'

import { ko } from 'date-fns/locale'

import styles from './Calendar.module.scss'
import classNames from 'classnames/bind'
import Section from '../shared/Section'

import 'react-day-picker/style.css'
import { DayPicker } from 'react-day-picker'

const cx = classNames.bind(styles)

const css = `
  .rdp-month_caption, .rdp-nav {
    display: none;
  }

  .rdp-day_button {
    cursor: default;
  }

  .rdp-selected .rdp-day_button {
    background: var(--red);
    color: white;
    border: 0;
  }
`

function Calendar({ date }: { date: string }) {
  const weddingDate = parseISO(date)

  return (
    <Section
      title={
        <div className={cx('wrap-header')}>
          <span className={cx('txt-date')}>
            {format(weddingDate, 'yyyy.MM.dd')}
          </span>
          <span className={cx('txt-time')}>
            {format(weddingDate, 'aaa h시 eeee', { locale: ko })}
          </span>
        </div>
      }
    >
      <div className={cx('wrap-calendar')}>
        <style>{css}</style>
        <DayPicker
          locale={ko}
          mode="single"
          // classNames={{ root: cx('my-calendar') }}
          className={cx('calendar')}
          month={weddingDate}
          selected={weddingDate}
          formatters={{ formatCaption: () => '' }}
        />
      </div>
    </Section>
  )
}

export default Calendar
