import { Link } from 'react-router-dom';

export const PromoBanner = () => {
    return (
        <div className="bg-black">
            <div className="relative">
                <div className="w-full h-[326px] md:h-[396px] overflow-hidden opacity-50">
                    <img
                        className="w-full h-full object-cover object-[92%_62%]"
                        src="Gemini_Generated_Image_svobxzsvobxzsvob.png" alt="" />
                </div>
                <div className="absolute top-[50%] -translate-y-[50%] left-[25%] -translate-x-[25%] md:left-[5%] md:-translate-x-[5%]">
                    <h3 className="leading-[1.2] heading text-white text-2xl md:text-[50px] mb-2 font-extrabold xl:w-[550px]">HITTA RÄTT ELEKTRONIK FÖR DIN LIVSSTIL</h3>
                    <h3 className="text-white text-sm mb-16 pr-10">Allt du behöver för arbete, underhållning och ett smartare hem</h3>
                    <Link className="text-white w-auto py-2 px-6 border rounded-xl lg:hover:border-purple-900" to={`/products`}>Maxa din upplevelse</Link>
                </div>
            </div>
        </div>
    )
}