import { CiCircleCheck } from "react-icons/ci";
import { MdOutlineSettingsBackupRestore } from "react-icons/md";
import { LiaShippingFastSolid } from "react-icons/lia";
import { IoMdCheckmark } from "react-icons/io";

export const Shipping = () => {
    const items = [
        { icon: LiaShippingFastSolid, text: "Snabb leverans" },
        { icon: IoMdCheckmark, text: "Alltid fri frakt" },
        { icon: MdOutlineSettingsBackupRestore, text: "Gratis retur" },
        { icon: CiCircleCheck, text: "100% nöjd kund garanti" },
    ];
    return (
        <div className="flex flex-col justify-center md:flex-row md:justify-evenly px-4 py-4 md:py-8 bg-purple-950 text-white">
            {items.map((item) => (
                <div key={item.text} className="flex md:flex-col md:justify-center items-center gap-4 md:gap-0 mb-2">
                    <item.icon className="text-xl md:text-3xl md:mb-4" />
                    <p className="font-medium text-xs md:text-sm">{item.text}</p>
                </div>
            ))}
        </div>
    )
}