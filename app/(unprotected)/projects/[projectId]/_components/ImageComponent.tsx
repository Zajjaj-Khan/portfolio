import React from 'react'
import Image from 'next/image'

interface ImageCompProps{
    imageUrl:any;
}

export default function ImageComponent({imageUrl}:ImageCompProps) {
  return (
    <Image
    priority
    src={imageUrl}
    width={750}
    height={400}
    alt="Picture of the project"
    className='rounded-lg'
  />
  )
}
