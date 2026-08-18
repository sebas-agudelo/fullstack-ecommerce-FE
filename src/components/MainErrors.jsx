import { IoWarningOutline } from "react-icons/io5";

export const MainErrors = ({ errors }) => {
    return (
        <>
            {errors && (
                <div className="mb-6 flex justify-start items-center gap-2">
                    <div>
                        <IoWarningOutline className="text-[28px] text-red-600" />
                    </div>

                    <p className="text-red-600">{errors}</p>
                </div>
            )}
        </>
    )
}