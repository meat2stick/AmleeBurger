import Section from "./Section";
import { React, useEffect, useState } from 'react';
import ApiData from '../ApiData.txt';
import SideBar from "./SideBar";

function Menu() {
    const [isDataLoaded, setDataIsLoaded] = useState(false);
    const [data, setData] = useState([]);
    const apiArr = [ApiData, "https://cors-anywhere.herokuapp.com/https://atlas-fe-menu.atlas-kitchen.workers.dev/menu"]
    const API = apiArr[0];

    useEffect(async () => {
        console.log("useEffect Invoked")
        const response = await fetch(API);
        const res = await response.text();
        const result = JSON.parse(res);
        setData(result);
        setDataIsLoaded(true);
    }, []);

    useEffect(() => {
        console.log(data);
    }, [data]);

    return (
        <div className="grid max-w-screen-xl grid-cols-1  px-3 mx-auto mb-12  lg:grid-flow-col-dense lg:grid-cols-4">
            <div className="lg:col-start-1 lg:col-span-1 relative pt-6">
                {
                    isDataLoaded?<SideBar data={data} />:<></>
                }
            </div>
            <div className="lg:col-start-2 lg:col-span-3">
                {
                    isDataLoaded ? data['sections'].sort((a, b) => a.displayOrder - b.displayOrder).map((section, index) => {
                        return (
                            <div key={'Section' + index} id={section["label"].replace(' ', '_')}>
                                <Section section={section} />
                            </div>
                        )
                    }) : <div>Loading</div>
                }
            </div>
        </div>
    );

}


export default Menu;
