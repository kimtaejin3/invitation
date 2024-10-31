import { Swiper, SwiperSlide } from 'swiper/react'

import classNames from 'classnames/bind'

import styles from './ImageViewer.module.scss'

import 'swiper/css'

const cx = classNames.bind(styles)

function ImageViewer({ images }: { images: string[] }) {
  return (
    <div className={cx('dimmed')}>
      <Swiper
        style={{ height: '100%' }}
        spaceBetween={20}
        slidesPerView={1}
        loop
        initialSlide={0}
      >
        {images.map((src, idx) => (
          <SwiperSlide key={idx}>
            <img className={cx('img')} src={src} alt="이미지 뷰어" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default ImageViewer
