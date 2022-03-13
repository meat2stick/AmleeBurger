import Item from "./Item";
import { React } from 'react';
import { Typography } from "antd";
import SubSection from "./SubSection";
const { Title } = Typography;

function Section({ section, isSubSection }) {
    const itemData = section['items'];
    const itemSorted = itemData.sort((a, b) => a.displayOrder - b.displayOrder).map((item, index) => {
        return (
            <Item
                key={'Item' + index}
                title={item.label}
                description={item.description}
                imgSrc={item.imageUrl}
                price={item.unitPriceFractional}
                currency={item.currency}
                itemStock={item.itemStock}
                sectionDisabled={section['disabled']}
            />
        )
    });
    const handleSubSection = () => {
        if (isSubSection == null || isSubSection == false) {
            if (section['subSections'].length > 0) {
                return (
                    <SubSection subSection={section['subSections']} />
                )
            }
        }
    }

    return (
        <div className="flex flex-col ">
            <div className="flex flex-row">
                <div className="flex flex-col m-2">
                    <Title level={2} className="font-Urbanist font-black justify-center pt-2">{section['label']}</Title>
                    {section['description'].length > 0 ? <p className="text-xl font-Urbanist font-semibold pb-5 ">{section['description']}</p> : <></>}
                    {section['disabled'] ? <p className="text-xl font-Urbanist font-semibold pb-5 text-red-500 ">{section['disabledReason']}</p> : <></>}
                </div>
            </div>
            <div className="grid grid-cols-2 m-2 sm:grid-cols-2 lg:grid-cols-3 md:grid-cols-2 lg:gap-3 md:gap-2 sm:gap-2 gap-2 ">
                {
                    itemSorted
                }
            </div>
            <>
                {handleSubSection()}
            </>

        </div>
    );
}
export default Section;