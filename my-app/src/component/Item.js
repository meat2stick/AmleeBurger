import { Card } from 'antd';
import parse from 'html-react-parser';
import { useState } from 'react';
import { Row, Button, Modal, Typography } from "antd";
import InputCount from './InputCount';
const { Meta } = Card;
const { Title } = Typography;

function Item({ title, description, imgSrc, price, currency, itemStock, sectionDisabled }) {
  const nullImgSrc = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png";
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleClick = () => { showModal(); }
  const showModal = () => { setIsModalVisible(true); }
  const handleOk = () => { setIsModalVisible(false); }
  const handleCancel = () => { setIsModalVisible(false); }

  return (
    <div>
      <div>
        <Card
          onClick={handleClick}
          style={{ opacity: (itemStock.quantityLeft > 0 && !sectionDisabled) ? 1 : 0.7, overflow: 'hidden' }}
          className="rounded-sm w-auto "
          cover={
            <div className='overflow-hidden'>
              <img
                alt="example"
                src={
                  imgSrc == null ? nullImgSrc : imgSrc
                }
                className="p-1 w-96 h-64 hover:scale-125 transition duration-500"
              />
            </div>
          }
          hoverable={true}
          actions={[
            <div>
              <Row justify='space-between'>
                <div className='pl-6 flex flex-col justify-center font-Urbanist font-regular text-gray-400' >
                  {currency + ' ' + (price / 100).toFixed(2)}
                </div>
                <div className='pr-2 font-Urbanist font-regular flex flex-row'>
                  {itemStock.quantityLeft > 0 ? <></> : <div className='font-Urbanist font-regular text-red-500 flex flex-col justify-center pr-2'>*Out of Stock</div>}
                  {itemStock.quantityLeft > 0 && !sectionDisabled ? <Button type="primary" danger>Add</Button> : <Button type="primary" disabled danger>Add</Button>}
                </div>
              </Row>
            </div>
          ]}
        >
          <Meta
            title={
              <div className='font-Urbanist font-medium'>
                {title}
              </div>
            }
            description={
              <div className='h-12 line-clamp-2 font-Urbanist font-regular text-gray-400'>
                {description != null ? parse(description) : ''}
              </div>
            }
          />
        </Card>
      </div>

      <div>
        <Modal
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={null}
          width={768}
          bodyStyle={{ height: "" }}
        >
          <div className='flex flex-col sm:flex-row sm:h-auto h-screen'>
            <img
              alt="example"
              src={
                imgSrc == null ? nullImgSrc : imgSrc
              }
              className="p-2 w-96 h-96"

            />
            <div className='flex flex-col justify-between w-full sm:h-auto h-full bg-orange-50 bg-opacity-50'>
              <div className='px-6 pt-3 sm:p-6'>
                <Title level={2}>
                  <div className='font-Urbanist font-medium'>
                    {title}
                  </div>
                </Title>
                <Title level={5}>
                  <div className='font-Urbanist lg:line-clamp-20 md:line-clamp-20 sm:line-clamp-20 line-clamp-11 font-light sm:text-base sm:h-auto h-full'>
                    {description != null ? parse(description) : ''}
                  </div>
                </Title>
              </div>
              <div className='flex flex-col'>
                <div className='flex flex-row justify-between pb-2 px-6 '>
                  <div className='font-Urbanist font-regular text-gray-400 pt-2 ' >
                    {currency + ' ' + (price / 100).toFixed(2)}
                  </div>
                  {itemStock.quantityLeft > 0 ? <></> : <div className='font-Urbanist font-light text-red-500 pt-2'>*Out of Stock</div>}
                  {!sectionDisabled ? <></> : <div className='font-Urbanist font-light text-red-500 pt-2'>*Not Available</div>}
                  {itemStock.quantityLeft != 0 && !sectionDisabled ? <InputCount disableField={itemStock.quantityLeft == 0 || sectionDisabled} /> : <></>}
                </div>
                <div className='flex flex-row bg-gray-100 p-2 gap-x-2 '>
                  {
                    itemStock.quantityLeft > 0 && !sectionDisabled ? <Button block type="primary" danger>Add</Button> : <Button block type="primary" disabled danger>Add</Button>
                  }
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div >
    </div>
  );
}

export default Item;