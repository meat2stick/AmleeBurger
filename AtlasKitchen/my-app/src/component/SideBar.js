import { Menu } from 'antd';

function SideBar({ data }) {

    return (
        <div className='fixed lg:visible invisible'>
            <Menu
                style={{ width: 256 }}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
            >
                <Menu.ItemGroup key="g1ASD" title="Menu">
                    {
                        data['sections'].sort((a, b) => a.displayOrder - b.displayOrder).map((section, index) => {

                            if (section['subSections'].length > 0) {
                                var subS = section['subSections'].map((subSection, index) => {
                                    return (
                                        subSection["label"]
                                    )
                                });
                                var tempS = <Menu.Item key={"#" + section["label"].replace(' ', '_')+"Link"} id={section["label"].replace(' ', '_') + "Link"}>
                                    <a key={"#" + section["label"].replace(' ', '_')+"LinkChild"} href={"#" + section["label"].replace(' ', '_')}>
                                        {section["label"]}
                                    </a>
                                </Menu.Item>

                                var tempSub = subS.map(subName => {
                                    return (
                                        <Menu.Item key={"#" + subName.replace(' ', '_')+"SubLink"} id={subName.replace(' ', '_') + "SubLink"}>
                                            <a key={"#" + subName.replace(' ', '_')+"SubLinkChild"} className='pl-4' href={"#" + subName.replace(' ', '_') + "Sub"}>
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
                                    <Menu.Item key={"#" + section["label"].replace(' ', '_')+"Link"} id={section["label"].replace(' ', '_') + "Link"}>
                                        <a key={"#" + section["label"].replace(' ', '_')+"LinkChild"} href={"#" + section["label"].replace(' ', '_')}>
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