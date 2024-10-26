import classNames from 'classnames/bind'
import styles from './Heading.module.scss'

import Section from '@shared/Section'

const cx = classNames.bind(styles)

function Heading() {
  return (
    <Section>
      <div className={cx('txt-date')}>23.08.12</div>
      <div className={cx('tx-day')}>SATURDAY</div>
    </Section>
  )
}

export default Heading
