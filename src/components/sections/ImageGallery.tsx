import classNames from 'classnames/bind'
import ImageViewer from '../ImageViewer'
import Section from '../shared/Section'
import styles from './ImageGallery.module.scss'

const cx = classNames.bind(styles)

function ImageGallery({ images }: { images: string[] }) {
  return (
    <>
      <Section title="사진첩">
        <ul className={cx('wrap-images')}>
          {images.map((src, idx) => (
            <li className={cx('wrap-image')} key={idx}>
              <img src={src} alt="사진첩 이미지" />
            </li>
          ))}
        </ul>
      </Section>
      <ImageViewer images={images} />
    </>
  )
}

export default ImageGallery
