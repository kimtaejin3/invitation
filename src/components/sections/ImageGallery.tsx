import classNames from 'classnames/bind'
import { useState } from 'react'
import ImageViewer from '../ImageViewer'
import Section from '../shared/Section'
import styles from './ImageGallery.module.scss'

const cx = classNames.bind(styles)

function ImageGallery({ images }: { images: string[] }) {
  const [selectedIdx, setSelectedIdx] = useState(-1)

  const open = selectedIdx !== -1

  const handleSelectedImage = (idx: number) => {
    setSelectedIdx(idx)
  }

  return (
    <>
      <Section title="사진첩">
        <ul className={cx('wrap-images')}>
          {images.map((src, idx) => (
            <li
              className={cx('wrap-image')}
              key={idx}
              onClick={() => {
                handleSelectedImage(idx)
              }}
            >
              <img src={src} alt="사진첩 이미지" />
            </li>
          ))}
        </ul>
      </Section>
      <ImageViewer images={images} open={open} />
    </>
  )
}

export default ImageGallery
