import React from 'react'
import cx from 'classnames'

import {Logo} from './Logo'

export type PageTitleProps = {
  subtitle?: string
  className?: string
}

export function PageTitle(props: PageTitleProps): JSX.Element {
  const {subtitle, className} = props

  return (
    <div className={cx('dib', className)}>
      {/* <Logo className="pl1 mr3 v-btm brand" /> */}
      <h1 className="dib mv0 f3 lh-title normal">
        {/* tracespace */}
        {/* 精工互联PCB预览 */}
        {/* {subtitle && <span className="b">{` ${subtitle}`}</span>} */}
      </h1>
    </div>
  )
}
