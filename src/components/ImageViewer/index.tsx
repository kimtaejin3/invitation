import { Swiper, SwiperSlide } from 'swiper/react'

import classNames from 'classnames/bind'

import styles from './ImageViewer.module.scss'

import 'swiper/css'

import './swiper.css'

const cx = classNames.bind(styles)

function ImageViewer({
  images,
  open = false,
  selectedIdx,
}: {
  images: string[]
  open: boolean
  selectedIdx: number
}) {
  if (open === false) {
    return null
  }

  return (
    <div className={cx('dimmed')}>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        loop
        initialSlide={selectedIdx}
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
