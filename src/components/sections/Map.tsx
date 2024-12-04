import { Location } from '@/models/wedding'
import classNames from 'classnames/bind'
import { useEffect, useRef } from 'react'
import Section from '../shared/Section'
import styles from './Map.module.scss'

const cx = classNames.bind(styles)

declare global {
  interface Window {
    kakao: any
  }
}

function Map({ location }: { location: Location }) {
  const container = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const script = document.createElement('script')
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=3d1f167ea7620dd6011dc554c4784b83`
    script.async = true
    document.head.appendChild(script)

    script.onload = () => {
      window.kakao.maps.load(() => {
        const position = new window.kakao.maps.LatLng(location.lat, location.lng)
        const options = {
          center: position,
          level: 3,
        }

        const marker = new window.kakao.maps.Marker({
          position,
        })

        const map = new window.kakao.maps.Map(container.current, options)
        marker.setMap(map)
      })
    }
  }, [location])

  return <Section className={cx('map')}>
      <div className={cx('map-container')}>
        <div ref={container}></div>
      </div>
    </Section>
  
}

export default Map