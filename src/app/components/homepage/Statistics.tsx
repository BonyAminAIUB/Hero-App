const Statistics = () => {
    return (
        <div className='bg-linear-to-r from-purple-600 to-purple-500 py-12 text-center text-white'>
            <h2 className='font-bold text-3xl'>Trusted By Millions, Built For You</h2>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-190 mx-auto mt-8'>

                <div>
                    <p className='text-sm text-white/70'>Total Downloads</p>
                    <h3 className='font-bold text-4xl mt-2'>29.6M</h3>
                    <p className='text-xs text-white/70 mt-2'>21% More Than Last Month</p>
                </div>

                <div>
                    <p className='text-sm text-white/70'>Total Reviews</p>
                    <h3 className='font-bold text-4xl mt-2'>906K</h3>
                    <p className='text-xs text-white/70 mt-2'>46% More Than Last Month</p>
                </div>

                <div>
                    <p className='text-sm text-white/70'>Active Apps</p>
                    <h3 className='font-bold text-4xl mt-2'>132+</h3>
                    <p className='text-xs text-white/70 mt-2'>31 More Will Launch</p>
                </div>

            </div>
        </div>
    );
};

export default Statistics;