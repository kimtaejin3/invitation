import React, { useEffect, useState } from 'react'

import classNames from 'classnames/bind'
import styles from './App.module.scss'

const cx = classNames.bind(styles)

function App() {
  const [wedding, setWedding] = useState(null)

  useEffect(() => {
    fetch('http://localhost:8888/wedding')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setWedding(data)
      })
  }, [])

  return <div className={cx('container')}>{JSON.stringify(wedding)}</div>
}

export default App
