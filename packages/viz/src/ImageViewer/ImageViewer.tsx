import React from 'react'

export interface ImageViewerProps {
    testProp: string
}

export const ImageViewer = ({testProp}: ImageViewerProps) => {
  return (
    <div>ImageViewer {testProp}</div>
  )
}
