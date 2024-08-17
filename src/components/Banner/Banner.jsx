import bg from '../../assets/bg 1.jpg'
const Banner = () => {
    return (
        <div className='mt-3 md:mt-6 lg:mt-10 max-w-7xl mx-auto'>
            <div className='flex justify-center relative'>
                <img src={bg} alt="" className='h-[250px] md:h-[300px] lg:h-[570px] w-full' />
            </div>
            

            <div className='text-center absolute -mt-32 ml-5 md:-mt-32 md:ml-24 lg:-mt-40 lg:ml-72 text-white'>
                <p className='text-2xl font-semibold mb-2'>Everything you need </p>
                <p className='text-4xl  md:text-6xl  lg:text-7xl font-medium md:font-bold'>To Perform your best</p>
            </div>

        </div>
    );
};

export default Banner;