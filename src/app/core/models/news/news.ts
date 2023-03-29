export enum MediaFormats {
  JUMBO = 'Super Jumbo',
  THREEBYTWO = 'threeByTwoSmallAt2X',
  THUMB = 'Large Thumbnail'
}

export interface NewsRequest {
  num_results: number,
  results: any[],
}

export interface NewsItem {
  title: string,
  abstract: string,
  url: string,
  publishedData: string,
  multimedia: NewsMedia[],
}

export interface NewsMedia {
  url: string,
  format: string,
  height: string,
  width: string
}
