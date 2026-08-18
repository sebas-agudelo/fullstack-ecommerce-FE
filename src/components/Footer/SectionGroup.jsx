import { Link } from "react-router-dom";

export const SectionGroup = ({ header, links }) => {
    return (
        <div className="mb-6 md:mb-0">
            <h3 className="text-[16px] font-extrabold heading mb-3">{header}</h3>
            {links.map((link) => (
                <Link to={`${link.to}`} className="text-sm block py-1 lg:hover:text-purple-900">{link.link}</Link>
            ))}
        </div>
    )
}