export type MessageType = {
  id: string,
  type?: string,
  title: string,
  text?: string,
  date: number,
  avatar: string,
  fileUrls?: { name: string, url: string }[],
  imageUrls?: { name: string, url: string }[]
  position?: 'left' | 'right'
}