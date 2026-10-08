import bannerImg from '@/assets/hero.png';
import Image from 'next/image';

const Banner = () => {
    return (
        <div className='space-y-5 pt-8 bg-gray-100 rounded-lg shadow-md text-center'>
            <h2 className='font-bold text-4xl'>We Build <br /> <span className='text-purple-500'>Productive</span> Apps</h2>
            <p className='text-gray-500 max-w-190 mx-auto'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            <div className='flex justify-center items-center gap-2'>
                <button className="btn btn-success">Google Play</button>
                <button className="btn btn-primary">App Store</button>
            </div>
            <Image src={bannerImg} alt='Hero image' className='w-160 h-auto mx-auto'></Image>
        </div>
    );
};

export default Banner;