import Section from "./Section";
import { React } from 'react';

function SubSection({ subSection }) {

    return (
        <div>
            {
                subSection.map((section, index) => {
                    return (
                        <div key={'Section' + index} id={section["label"].replace(' ', '_') + "Sub"}>
                            <Section section={section} isSubSection={true} />
                        </div>
                    )
                })
            }
        </div>
    );
}

export default SubSection;