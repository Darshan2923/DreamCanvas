import React, { useState } from 'react'

import { Loader, Card, Formfield } from '../components'

const RenderCards = ({ data, title }) => {
    if (data?.length > 0) {
        return data.map((post) => <Card key={post._id} {...post} />)
    }
    return (
        <h2 className="mt-5 font-bold text-[#6449ff] text-xl uppercase">{title}</h2>
    )
}

const Home = () => {

    const [loading, setLoading] = useState(false);
    const [allPosts, setAllPosts] = useState(null);
    const [searchText, setSetText] = useState('')

    return (
        <section className='max-w-7xl mx-auto'>
            <div>
                <h1 className='font-extrabold text-[#222328] text-[32px]'>
                    The Showcase of Creativity
                </h1>
                <p className="mt-2 text-[#666e75] text-[16px] max-w-[500px]">
                    Explore captivating, visually striking DALL-E AI-generated images.
                </p>
            </div>

            <div className="mt-16">
                <Formfield />
            </div>

            <div className="mt-10">
                {loading ? (
                    <div className="flex justify-center items-center">
                        <Loader />
                    </div>
                ) : (
                    <>
                        {searchText && (
                            <h2 className="font-medium text-[#666e75] text-xl mb-3">
                                Showing Results for <span>{searchText}</span>
                            </h2>
                        )}
                        <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3">
                            {searchText ? (
                                <RenderCards
                                    data={[]}
                                    title="No results found"
                                />
                            ) : (
                                <RenderCards
                                    data={[]}
                                    title="No Posts Found"
                                />
                            )}
                        </div>
                    </>
                )}
            </div>
        </section>
    )
}

export default Home