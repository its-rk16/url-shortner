'use client'
import React,{useState} from 'react'
import Link from 'next/link'


const Shorten = () => {
    const [url, seturl] = useState("")
    const [shorturl, setshorturl] = useState("")
    const [generated, setgenerated] = useState("")

    const generate = () => {
        const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "url": url,
  "shorturl": shorturl
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("/api/generate", requestOptions)
  .then((response) => response.json())
  .then((result) => { 
    seturl("")
    setshorturl("")
    setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
    console.log(result)
    alert(result.message)
    })
  .catch((error) => console.error(error));
    }
    
  return (
    <div className='mx-auto max-w-xl bg-purple-100 my-12 p-6 rounded-lg 
    flex flex-col gap-4'>
      <h1 className='font-semibold text-3xl'>
        Generate your short URLs
      </h1>
      <div className='flex flex-col gap-2'>
        <input type="text"
        value={url}
         placeholder='Enter your URL'
         className='p-2 focus:outline-purple-600 rounded-md'
         onChange={(e) => {seturl(e.target.value)}} />

        <input type="text"
        value={shorturl}
         placeholder='Enter preferred Short URL'
         className='p-2 focus:outline-purple-600 rounded-md'
         onChange={(e) => {setshorturl(e.target.value)}} />

        <button onClick={generate} className='bg-purple-400 shadow-lg px-1 
        rounded-lg py-1 font-bold my-2'>Generate</button>
      </div>
        {generated && <div className='bg-purple-200 p-2 rounded-md'>
            <p>Your short URL is: <Link href={generated} target="_blank" rel="noreferrer">{generated}</Link></p>  
        </div>}
     
    </div>
  )
}

export default Shorten
