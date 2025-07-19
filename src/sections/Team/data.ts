export type Member = {
  id: number
  name: string
  photo: string
  role: string
}

export const team: Member[] = [
  {
    id: 0,
    name: 'Mary',
    photo:
      'https://avatars.cloudflare.steamstatic.com/fd2a252d715374be242bbade81e44b0bf3b30de7_full.jpg',
    role: 'Secretary',
  },
  {
    id: 2,
    name: 'Marjan',
    photo:
      'https://ih1.redbubble.net/image.4234177095.1180/flat,750x,075,f-pad,750x1000,f8f8f8.jpg',
    role: 'Secretary',
  },
  {
    id: 3,
    name: 'Olha',
    photo: 'https://i.pinimg.com/originals/04/f2/fd/04f2fd610c442bb2c4960cf90ff43898.jpg',
    role: 'Secretary',
  },
]
