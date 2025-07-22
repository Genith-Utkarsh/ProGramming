

export function VideoCard(props){
    return <div className="p-3">
        {/* Thumbnail */}
        <img   src ={props.thumbImg}  className='rounded-xl' />

        <div className='grid grid-cols-12 pt-2'>
            <div className='col-span-1 '>
                    <img  className = "w-16 h-16 rounded-full"   src={props.logo} />
            </div>

            <div className='col-span-11 text-white'>
                    <div>
                        {props.title}
                    </div>
                    <div className='col-span-11 text-base text-gray-400'>
                        {props.channelName}
                    </div>
                    <div className='col-span-11 text-base text-gray-400'>
                        {props.views} | {props.timestamp}
                    </div>
            </div>

        </div>
    </div>
}





