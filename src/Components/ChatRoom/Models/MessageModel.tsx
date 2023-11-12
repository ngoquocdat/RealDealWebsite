export type Message = {
  id: string,
  roomId: string,
  type?: string,
  isAgency: boolean
  title: string,
  text?: string,
  date: string,
  avatar: string,
  fileUrls?: { name: string, url: string }[],
  imageUrls?: { name: string, url: string }[]
}

