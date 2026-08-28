import { IoIosArrowDown } from "react-icons/io";

export const ProductInfoSection = ({ sections, setSections, product }) => {
    const toggleSection = (section) => {
        setSections((prev) => ({
            ...prev,
            [section]: !prev[section],
        }))
    }

    const propertyLabels = {
        Battery_Time: "Batteri tid",
        Hard_Disk: "Hårddisk",
        Sound: "Ljud",
        Frequency_Response: "Frekvensgång",
        Type: "Typ",
        Connection_Type: "Anslutningstyp",
        Screen_Size: "Skärmstorlek",
        Resolution: "Upplösning",
        Power_Output: "Effektuttag",
        Function: "Funktion",
        weight: "Vikt",
        EAN_code: "EAN-kod"
    };

    return (
        <div className="w-full">
            <div className="py-8 border-y"
                id="description"
            >
                <div className="px-4 lg:px-10">
                    <h2
                        onClick={() => toggleSection("description")}
                        className="font-bold flex justify-between items-center">Produktbeskrivning
                        <IoIosArrowDown />
                    </h2>
                    {
                        sections.description && (
                            <div className="mt-8">
                                <h1>{product?.data?.title}</h1>
                                <p>{product?.data?.description}</p>
                            </div>
                        )
                    }
                </div>
            </div>

            <div className="py-8 border-y"
                id="specifications"
            >
                <div className="px-4 lg:px-10">
                    <h2
                        className="font-bold flex justify-between items-center"
                        onClick={() => toggleSection("specs")}
                    >Teknisk specifikation
                        <IoIosArrowDown />
                    </h2>

                    {sections.specs &&
                        (
                            <div className="mt-8">
                                {product?.data?.product_properties_values?.map((v) => (
                                    <p className="py-2">
                                        <span className="font-extrabold">{propertyLabels[v?.products_properties?.name] || v?.products_properties?.name}</span>
                                        : {v?.value}

                                    </p>
                                ))}
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}