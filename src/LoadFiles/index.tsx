import React from 'react'

import {useAppState} from '../state'
import {Icon, Fade} from '../ui'
import {FileEvent} from '../types'
import FileInput from './FileInput'
import UrlInput from './UrlInput'

const UPLOAD_MESSAGE = '上传你的Gerber或者拖拽文件来渲染您的主板'
const UPLOAD_SUBMESSAGE = '支持ZIP文件'
const URL_MESSAGE = '或者输入zip的网络地址'

const WRAPPER_STYLE = 'absolute absolute--center near-black tc'
const MESSAGE_STYLE = 'mt3 mb0 f4 lh-copy'
const SUBMESSAGE_STYLE = 'f5 fw3'

export type LoadFilesProps = {
  handleFiles: (event: FileEvent) => void
  handleUrl: (url: string) => void
}

export default function LoadFiles(props: LoadFilesProps): JSX.Element {
  const {mode, loading} = useAppState()

  return (
    <>
      <Fade in={loading}>
        <Icon
          className={`${WRAPPER_STYLE} f1 brand`}
          name="spinner"
          faProps={{pulse: true}}
        />
      </Fade>
      <Fade in={!mode && !loading}>
        <div className={WRAPPER_STYLE}>
          <FileInput handleFiles={props.handleFiles}>
            <p className={MESSAGE_STYLE}>
              {UPLOAD_MESSAGE}
              <br />
              <span className={SUBMESSAGE_STYLE}>({UPLOAD_SUBMESSAGE})</span>
            </p>
          </FileInput>
          <UrlInput handleUrl={props.handleUrl}>{URL_MESSAGE}</UrlInput>
        </div>
      </Fade>
    </>
  )
}
