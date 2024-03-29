import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ThemeContext, ThemeContextType } from '../App.tsx'
import Comics from '../components/Comics';
import { BASE_URL, NO_IMAGE_URL } from './Constants.ts';
import { Details } from '../types/types.ts';

export default function Detail() {
    const { id } = useParams();
    const [details, setDetails] = useState<Details[]>([]);
    const theme = useContext<ThemeContextType>(ThemeContext);
    const proxy = `${BASE_URL}v1/public/characters/${id}`;
    const getDetails = async () => {
        const json = await (
            await fetch(`${proxy}`)).json();
        setDetails(json.data.results.filter((v: Details) => v.thumbnail.path !== NO_IMAGE_URL));
    }
    useEffect(() => {
        getDetails();
    }, [])

    return (
        <div className='w-full flex flex-col items-center mb-10 '>
            {details.length === 0 ? <span>Loading...</span> :
                details.map(detail =>
                    <div key={detail.id} className='w-full flex bg-amber-500 '>
                        <div className='w-1/2 pl-10 z-[5]' >
                            <h2 className='text-6xl md:text-8xl lg:text-9xl  font-bold text-red-700 mt-5'>{detail.name}</h2>
                            <span className={`text-lg  ${theme === 'dark' ? 'text-zinc-100' : 'text-zinc-700'}`}>{detail.description ? detail.description : "No Description"}</span>
                        </div>
                        <div className='w-1/2 '>
                            <img src={`${detail?.thumbnail.path}.${detail?.thumbnail.extension}`}
                                className='w-full min-w-[200px] max-w-4xl' />
                        </div>
                    </div>)
            }
            <Comics />
        </div>
    );
}

