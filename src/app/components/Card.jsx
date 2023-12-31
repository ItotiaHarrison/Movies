import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai';

export default function Card({ result }) {
    console.log(result);
    return (
        <div className='cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 group'>
            <Link href={`/movie/${result.id}`}>
                <Image src={`https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster_path}`}
                    width={500}
                    height={300}
                    alt='image is not available'
                    className='sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200'
                    style={{
                        maxWidth: "100%",
                        height: "auto",
                    }}
                    placeholder='blur'
                    blurDataURL='/spinner.svg'
                ></Image>

                <div className="">
                    <AiOutlineHeart className='hover:text-red-700 text-lg' />
                </div>

                <div className="p-2">
                    <h2 className='truncate text-lg font-bold mt-2'>{result.title || result.name}</h2>
                    <p className='line-clamp-2 text-md my-5'>{result.overview}</p>

                    <p className='flex items-center'>
                        Release Date: {result.release_date || result.first_air_date}
                    </p>


                </div>
            </Link>
        </div>
    )
}
