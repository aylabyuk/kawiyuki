export interface ImageFormat {
  ext: string
  url: string
  hash: string
  mime: string
  name: string
  path?: string
  size: number
  width: number
  height: number
}

export interface ImageFormats {
  large: ImageFormat
  small: ImageFormat
  medium: ImageFormat
  thumbnail: ImageFormat
}
