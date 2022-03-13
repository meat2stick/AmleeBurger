import { Menu } from 'antd';
import { useEffect } from 'react';

function SideBar({ data }) {

    const handleClick = (e) => {
        console.log('click ', e);
    };

    useEffect(() => {
        console.log(data);
    }, []);

    return (
        <div className='fixed lg:visible invisible'>
            <Menu
                onClick={handleClick}
                style={{ width: 256 }}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
            >
                <Menu.ItemGroup key="g1" title="Menu">
                    {
                        data['sections'].sort((a, b) => a.displayOrder - b.displayOrder).map((section, index) => {

                            if (section['subSections'].length > 0) {
                                var subS = section['subSections'].map((subSection, index) => {
                                    return (
                                        subSection["label"]
                                    )
                                });
                                var tempS = <Menu.Item key={index} id={section["label"].replace(' ', '_') + "Link"}>
                                    <a href={"#" + section["label"].replace(' ', '_')}>
                                        {section["label"]}
                                    </a>
                                </Menu.Item>

                                var tempSub = subS.map(subName => {
                                    return (
                                        <Menu.Item id={subName.replace(' ', '_') + "SubLink"}>
                                            <a className='pl-4' href={"#" + subName.replace(' ', '_') + "Sub"}>
                                                {subName}
                                            </a>
                                        </Menu.Item>
                                    )
                                })
                                return (
                                    <>
                                        {tempS}
                                        {tempSub}
                                    </>
                                )
                            } else {
                                return (
                                    <Menu.Item key={index} id={section["label"].replace(' ', '_') + "Link"}>
                                        <a href={"#" + section["label"].replace(' ', '_')}>
                                            {section["label"]}
                                        </a>
                                    </Menu.Item>
                                )
                            }
                        })

                    }
                </Menu.ItemGroup>
            </Menu>
        </div>
    )
}

export default SideBar;