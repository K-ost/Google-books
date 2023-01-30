
export type industryId = {
  type: string
  identifier: string
}

export type BookType = {
  kind: string
  id: string
  etag: string
  selfLink: string
  volumeInfo: {
    title: string
    subtitle: string
    authors: string[]
    publisher: string
    publishedDate: number
    description: string
    industryIdentifiers: industryId[]
    readingModes: {
      text: boolean
      image: boolean
    }
    pageCount: number
    printType: string
    categories: string[]
    averageRating: number
    ratingsCount: number
    maturityRating: string
    allowAnonLogging: boolean
    contentVersion: string
    panelizationSummary: {
      containsEpubBubbles: boolean
      containsImageBubbles: boolean
    }
    imageLinks: {
      smallThumbnail: string
      thumbnail: string
      medium?: string
      large?: string
      extraLarge?: string
    }
    language: string
    previewLink: string
    infoLink: string
    canonicalVolumeLink: string
  }
  saleInfo: {
    country: string
    saleability: string
    isEbook: boolean
    retailPrice?: {
      amount: number
      currencyCode: string
    },
  }
  accessInfo: {
    country: string
    viewability: string
    embeddable: boolean
    publicDomain: boolean
    textToSpeechPermission: string
    epub: {
      isAvailable: boolean
    }
    pdf: {
      isAvailable: boolean
      acsTokenLink: string
    }
    webReaderLink: string
    accessViewStatus: string
    quoteSharingAllowed: boolean
  }
  searchInfo: {
    textSnippet: string
  }
}
