export type AboutUs = {
    id: string,
    header: string,
    title: string,
    text?: string,
    fileUrls?: { name: string, url: string }[],
    imageUrls?: { name: string, url: string }[]
  }