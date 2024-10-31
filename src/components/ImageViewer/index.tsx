import classNames from 'classnames/bind'

import styles from './ImageViewer.module.scss'

const cx = classNames.bind(styles)

function ImageViewer() {
  return <div className={cx('dimmed')}>...</div>
}

export default ImageViewer
