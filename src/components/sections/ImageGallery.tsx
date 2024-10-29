import classNames from 'classnames/bind'
import Section from '../shared/Section'
import styles from './ImageGallery.module.scss'

const cx = classNames.bind(styles)

function ImageGallery({ images }: { images: string[] }) {
  return (
    <Section title="사진첩">
      <ul>
        {images.map((src, idx) => (
          <li key={idx}>
            <img src={src} alt="사진첩 이미지" />
          </li>
        ))}
      </ul>
    </Section>
  )
}

export default ImageGallery
