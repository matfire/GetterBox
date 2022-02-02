import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='w-full h-full flex flex-col lg:justify-center items-center'>
      
      <div className='text-center'>
        <h1 className='text-2xl font-bold'>GetterBox</h1>
        <p>the one-stop solution to aggregate your movie data</p>
        <div className='flex justify-evenly mt-2'>
          <Link href="/signin" passHref>
            <button className="btn btn-primary">
            Sign In
            </button>
          </Link>
          <Link href="/signup" passHref>
            <button className="btn btn-secondary">
            Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
