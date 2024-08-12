import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
                Want to learn about online banking 
            </h2>
            <p className='text-gray-500 my-2'>
                Checkout these resources 
            </p>
            <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
                <a href="https://www.youtube.com/watch?v=fTTGALaRZoc" target='_blank' rel='noopener noreferrer'>
                    Go to vdo
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img src="https://cdn.gobankingrates.com/wp-content/uploads/2017/03/online-banking-shutterstock_373056046.jpg" />
        </div>
    </div>
  )
}