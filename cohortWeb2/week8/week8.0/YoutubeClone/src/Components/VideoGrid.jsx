import image from '../../public/image.png';
import logo from '../../public/logo.png'
import { VideoCard } from './VideoCard';


// Videoas data

const VIDEOS = [{
        thumbImg : image,
        logo : logo,
        title : "1.My hero Acdemia | Officail Trialer 2025",
        channelName :  "StreamRoll",
        views : "100mn",
        timestamp :  "1 day ago",
},
{
        thumbImg : image,
        logo : logo,
        title : "2.My hero Acdemia | Officail Trialer 2025",
        channelName :  "StreamRoll",
        views : "100mn",
        timestamp :  "1 day ago",
},
{
        thumbImg : image,
        logo : logo,
        title : "3.My hero Acdemia | Officail Trialer 2025",
        channelName :  "StreamRoll",
        views : "100mn",
        timestamp :  "1 day ago",
},
{
        thumbImg : image,
        logo : logo,
        title : "4.My hero Acdemia | Officail Trialer 2025",
        channelName :  "StreamRoll",
        views : "100mn",
        timestamp :  "1 day ago",
},
{
        thumbImg : image,
        logo : logo,
        title : "5.My hero Acdemia | Officail Trialer 2025",
        channelName :  "StreamRoll",
        views : "100mn",
        timestamp :  "1 day ago",
},
{
        thumbImg : image,
        logo : logo,
        title : "6.My hero Acdemia | Officail Trialer 2025",
        channelName :  "StreamRoll",
        views : "100mn",
        timestamp :  "1 day ago",
},
{
        thumbImg : image,
        logo : logo,
        title : "7.My hero Acdemia | Officail Trialer 2025",
        channelName :  "StreamRoll",
        views : "100mn",
        timestamp :  "1 day ago",
},
{
        thumbImg : image,
        logo : logo,
        title : "8.My hero Acdemia | Officail Trialer 2025",
        channelName :  "StreamRoll",
        views : "100mn",
        timestamp :  "1 day ago",
}]



export function VideoGrid(){
    return <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
        {VIDEOS.map(video => {
            return <VideoCard    
                
                    thumbImg =  {video.thumbImg}
                    logo = {video.logo}
                    title = {video.title}
                    channelName =   {video.channelName}
                    views = {video.views}
                    timestamp  =   {video.timestamp}

            />
        })}
    </div>
}

