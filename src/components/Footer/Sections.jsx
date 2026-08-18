import { SectionGroup } from "./SectionGroup";

export const Sections = () => {
    return (
        <>
            <SectionGroup
                header={"Genvägar"}
                links={[
                    { link: "Konto", to: "/" },
                    { link: "Orderhistorik", to: "/" },
                    { link: "Metrico Club", to: "/" },
                ]}
            />

            <SectionGroup
                header={"Om Metrico"}
                links={[
                    { link: "Vilka är vi?", to: "/" },
                    { link: "Press", to: "/" },
                    { link: "Lediga tjänster", to: "/" },
                ]}
            />

            <SectionGroup
                header={"Kundtjänst"}
                links={[
                    { link: "Spåra din leverans", to: "/" },
                    { link: "Support via fjärrhjälp", to: "/" },
                    { link: "Ångerrätt", to: "/" },
                    { link: "Kontakta oss", to: "/" }
                ]}
            />
        </>
    )
}