import image from '../../public/image.png';
import logo from '../../public/logo.png'

export function VideoCard(){
    return <div>
        {/* Thumbnail */}
        <img   src ={image}  className='rounded-xl' />

        <div className='grid grid-cols-12 pt-2'>
            <div className='col-span-1 '>
                    <img  className = "w-16 h-16 rounded-full"   src={logo} />
            </div>

            <div className='col-span-11 text-white'>
                    <div>
                        My hero Academia |
                        Official Trailer 2025 by StreamRoll
                    </div>
                    <div className='col-span-11 text-base text-gray-400'>
                        StreamRoll
                    </div>
                    <div className='col-span-11 text-base text-gray-400'>
                        100mn | 1 day ago
                    </div>
            </div>

        </div>
    </div>
}


// import image.png from public folder


