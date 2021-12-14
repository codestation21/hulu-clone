import Image from 'next/image';
import { ThumbUpIcon } from '@heroicons/react/outline';
import { forwardRef } from 'react'

const Thumbnail = forwardRef(({ result }, ref) => {
    const image_url = "https://image.tmdb.org/t/p/original"
    return (
        <div ref={ref} className="group cursor-pointer p-2 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
            <Image
                layout='responsive'
                src={`${image_url}${result.backdrop_path || result.poster_path}` || `${image_url}${result.poster_path}`}
                height={1080}
                width={1920}
            />
            <div>
                <p className="truncate max-w-m">{result.overview}</p>
                <h2 className="mt-1 text-xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
                    {result.title || result.original_title}
                </h2>
                <p className="flex items-center opacity-0 group-hover:opacity-100">
                    {result.media_type && `${result.media_type} *`} {" "} {result.release_date || result.first_air_date} * {" "}
                    <ThumbUpIcon className="h-5 mx-2" /> {result.vote_count}
                </p>
            </div>
        </div>
    )
});

export default Thumbnail;
