'use client'

type MoviePlayerProps = {
    videoUrl?: string
}

const MoviePlayer = ({
    videoUrl
}:MoviePlayerProps) => {
    return ( 
        <video 
        autoPlay
        controls
        src={videoUrl}
        className="w-full h-full"
        >
        </video>
     );
}
 
export default MoviePlayer