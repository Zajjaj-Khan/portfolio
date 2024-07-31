import React from 'react'
import Image from 'next/image'

interface ImageCompProps{
    imageUrl:any;
}

export default function ImageComponent({imageUrl}:ImageCompProps) {
  return (
    <Image
    src={imageUrl}
    width={900}
    height={400}
    alt="Picture of the author"
    className='rounded-lg'
  />
  )
}
