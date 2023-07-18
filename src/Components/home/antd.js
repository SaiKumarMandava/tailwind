import { Button, Form, Input, Select, Space, Tooltip, Typography } from 'antd';
const { Option } = Select;
const onFinish = (values) => {
  console.log('Received values of form: ', values);
};
const App = () => (
  <div className=' flex justify-center  p-4  '>
    
    <Form  className='flex flex-col flex-wrap border p-4'

    name="complex-form"
    onFinish={onFinish}
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
  >
    <space>
 
         <h1 className=' text-xl text-center  mb-6 font-extrabold font-mono'>Register Form</h1>
    </space>
    <Form.Item label="Username " className=' font-semibold'>
      <Space >
        <Form.Item 
          name="username" 
          
          rules={[
            {
              required: true,
              message: 'Username is required',
            },
          ]}
        >
          <Input
            style={{
              width: 280,
            }}
            placeholder="Please input"
          />
        </Form.Item>
       
      </Space>
    </Form.Item>
    
    <Form.Item label="Address" className=' font-semibold'>
      <Space.Compact>
        <Form.Item
          name={['address', 'province']}
          noStyle
          rules={[
            {
              required: true,
              message: 'Province is required',
            },
          ]}
        >
          <Select placeholder="Select province">
            <Option value="Zhejiang">Zhejiang</Option>
            <Option value="Jiangsu">Jiangsu</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name={['address', 'street']}
          noStyle
          rules={[
            {
              required: true,
              message: 'Street is required',
            },
          ]}
        >
          <Input
            // style={{
            //   width: '60%',
            // }}
            noStyle
            placeholder="Input street"
          />
        </Form.Item>
      </Space.Compact>
    </Form.Item>
    <Form.Item
      label="BirthDate" className=' font-semibold'
      style={{
        marginBottom: 0,
      }}
    >
      <Form.Item
        name="year"
        rules={[
          {
            required: true,
          },
        ]}
        style={{
          display: 'inline-block',
          width: 'calc(50% - 8px)',
        }}
      >
        <Input placeholder="Input birth year" />
      </Form.Item>
      <Form.Item
        name="month"
        rules={[
          {
            required: true,
          },
        ]}
        style={{
          display: 'inline-block',
          width: 'calc(50% - 8px)',
          margin: '0 8px',
        }}
      >
        <Input placeholder="Input birth month" />
      </Form.Item>
    </Form.Item>
    <Form.Item label=" " colon={false}>
      <Button type="primary" htmlType="submit" className=' bg-slate-800 text-white hover:bg-zinc-50 hover:text-black'>
        Submit
      </Button>
    </Form.Item>
  </Form>
  </div>
);
export default App;