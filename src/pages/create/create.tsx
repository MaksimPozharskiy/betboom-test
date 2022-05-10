import {
  Alert, Button, Form, Input,
} from 'antd';
import React, { useState } from 'react';
import Api from '../../utils/Api';
import styles from './create.module.scss';

function CreatePage() : JSX.Element | null {
  const [isAlertActive, setIsAlertActive] = useState(false);
  const [form] = Form.useForm();

  const handleSubmit = (data: { name: string }) => {
    Api.createPlayer(data.name)
      // eslint-disable-next-line no-console
      .then((res) => console.log('Success:', res));
    form.resetFields();
    setIsAlertActive(true);
  };

  return (
    <div className={styles.formWrap}>
      {isAlertActive && <Alert message="Player added" type="success" />}
      <Form className={styles.form} name="createPlayerForm" onFinish={handleSubmit} form={form}>
        <Form.Item
          name="name"
          rules={[
            {
              required: true,
              message: 'Please input player name!',
            },
          ]}
        >
          <Input style={{ width: 200 }} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default CreatePage;
