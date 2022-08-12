export type Movie = {
  title: string
  isBookmarked: boolean
  isTrending: boolean
  rating: string
  year: number
  thumbnail: Thumbnail
  category: string
}

export type Thumbnail = {
  regular: Regular
  trending?: Trending
}

export type Regular = {
  small: string
  medium?: string
  large: string
}

export type Trending = {
  small: string
  large: string
}