import React, { useState } from 'react';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { message, Upload, Card, Avatar, Row, Col, Button } from 'antd';

const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
};
const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
};
const UserInfomation = () => {
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState();
    const handleChange = (info) => {
        if (info.file.status === 'uploading') {
            setLoading(true);
            return;
        }
        if (info.file.status === 'done') {
            getBase64(info.file.originFileObj, (url) => {
                setLoading(false);
                setImageUrl(url);
            });
        }
    };
    const customRequest = ({ onSuccess }) => {
        onSuccess("oke");
    };
    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div
                style={{
                    marginTop: 8,
                }}
            >
                Upload
            </div>
        </div>
    );
    return (
        <Card>
            <Row>
                <Col span={8} offset={2}>
                    <Upload
                        name="avatar"
                        listType="picture-circle"
                        className="avatar-uploader"
                        showUploadList={false}
                        beforeUpload={beforeUpload}
                        customRequest={customRequest}
                        onChange={handleChange}
                    >
                        {imageUrl ? (
                            <Avatar shape='circle' size={200} src={imageUrl} />
                        ) : (
                            uploadButton
                        )}
                    </Upload>
                </Col>
                <Col span={14} style={{ margin: 'auto' }}>
                    <Row style={{ margin: '10px', fontSize: '30px' }}>
                        <Col span={6}>
                            <strong style={{ fontSize: '16px' }}>Fullname</strong>
                        </Col>
                        <Col span={12}>
                            <i style={{ fontSize: '16px' }}>Nguyen Van A</i>
                        </Col>
                    </Row>
                    <Row style={{ margin: '10px' }}>
                        <Col span={6}>
                            <strong style={{ fontSize: '16px' }}>Role</strong>
                        </Col>
                        <Col span={12}>
                            <i style={{ fontSize: '16px' }}>Admin</i>
                        </Col>
                    </Row>
                    <Row style={{ margin: '10px' }}>
                        <Col span={6}>
                            <strong style={{ fontSize: '16px' }}>Lastest login</strong>
                        </Col>
                        <Col span={12}>
                            <i style={{ fontSize: '16px' }}>10/10/2023 10:00</i>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row style={{ marginTop: '20px',alignItems:'end' }}>
                <Col span={12}>
                    <strong>Address: No 8, Ton That Thuyet</strong>
                </Col>
                <Col span={12} style={{ display: 'flex', justifyContent: 'end', alignItems: 'center' }}>
                    <Button type='primary' size='large' style={{ backgroundColor: '#70baa7', margin: '5px' }}>FaceBook</Button>
                    <Button type='primary' size='large' style={{ backgroundColor: '#7078c1', margin: '5px' }}>Zalo</Button>
                </Col>
            </Row>
        </Card>
    );
}

export default UserInfomation;
