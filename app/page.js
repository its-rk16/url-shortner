import Image from "next/image";
import { Geist} from "next/font/google";
import Link from "next/link";


// import Poppins from "next/font/google";

// const poppins = Poppins({
//   variable: "--font-poppins",
//   subsets: ["latin"],
// });
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className="bg-purple-100 ">
     <section className="grid grid-cols-2 h-[50vh]">
      <div className=" flex flex-col gap-4 items-center justify-center p-8">
        <p className={`font-extrabold text-3xl ${geistSans.className}`}> 
 The best URL Shortner.
        </p>
        <p>
          We are the most straight-forward URL shortner of the world.
          Most of the URL Shortner will track you and ask you to give
          your details.We understand your needs and hence we have created
          this URL Shortner for you.
        </p>
        <div className='flex  gap-3'>
         <Link href="/shorten"><button className='bg-purple-400 shadow-xl px-1 rounded-lg py-1 font-bold'>Try Now</button></Link>
         <Link href="/github"><button className='bg-purple-400 shadow-xl px-1 rounded-lg py-1 font-bold'>GitHub</button></Link>
        </div>
      </div>
      <div className=" flex justify-start relative">
       <Image alt="Office image"  src={"/vector.jpg"} fill={true} className="mix-blend-darken"/>
      </div>

     </section>
    </main>
  );
}
