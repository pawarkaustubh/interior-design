import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function EmptyState() {
  return (
    <div className='flex flex-col items-center mt-10'>
      <Image src={'/placeholder.png'} alt="Placeholder Image" width={200} height={200} priority />
      <h2 className='text-lg font-medium text-gray-600 mt-5'>Start designing your room with AI!</h2>
      <Link href={'/dashboard/create-new'}>
        <Button className='mt-5 px-5 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg'>+ Redesign Room</Button>
      </Link>
    </div>
  )
}

export default EmptyState
