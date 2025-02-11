import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div>
        
        <p>
        Welcome to BitLink, your go-to solution for shortening long URLs into manageable,
        easy-to-share links. Our app is designed to help you streamline your online presence by 
        converting lengthy web addresses into concise, memorable links that are perfect for sharing 
        on social media, emails, and other platforms. With BitLink, you can track link performance,
        manage your shortened URLs, and ensure your links are always up-to-date. Join us in making
        the web a more efficient place, one short link at a time.
      </p>
      <Image alt="bg image" src={"/bg1.png"}  width={200} height={200}/>
    </div>
  )
}

export default About
