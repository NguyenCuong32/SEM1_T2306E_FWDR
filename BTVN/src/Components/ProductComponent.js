import React, { useState } from 'react';
import { Button, Form, Input, InputNumber, Popconfirm, Row, Table, Typography, } from 'antd';
import { DeleteOutlined, EditOutlined, PlusCircleOutlined } from '@ant-design/icons';

const EditableCell = ({
	editing,
	dataIndex,
	title,
	inputType,
	record,
	index,
	children,
	...restProps
}) => {
	const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
	return (
		<td {...restProps}>
			{editing ? (
				<Form.Item
					name={dataIndex}
					style={{
						margin: 0,
					}}
					rules={[
						{
							required: true,
							message: `Please Input ${title}!`,
						},
					]}
				>
					{inputNode}
				</Form.Item>
			) : (
				children
			)}
		</td>
	);
};
const ProductComponent = ({ listData }) => {
	const [form] = Form.useForm();
	const [data, setData] = useState(listData);
	const [editingKey, setEditingKey] = useState('');
	const isEditing = (record) => record.key === editingKey;
	const editItem = (record) => {
		form.setFieldsValue({
			name: '',
			age: '',
			address: '',
			...record,
		});
		setEditingKey(record.key);
	};
	const deleteItem = (record) => {
		const newData = data.filter((item) => item.key !== record.key);
		setData(newData);
	};
	const addItem = () => {
		const newData = {
			key: data.length + 1,
			name: 'Nguyen Van C',
			sex: 'Nam',
			dateOfBirth: '01/01/2000',
			salary: 1000000,
		};
		setData([...data, newData]);
	};
	const cancel = () => {
		setEditingKey('');
	};
	const save = async (key) => {
		try {
			const row = await form.validateFields();
			const newData = [...data];
			const index = newData.findIndex((item) => key === item.key);
			if (index > -1) {
				const item = newData[index];
				newData.splice(index, 1, {
					...item,
					...row,
				});
				setData(newData);
				setEditingKey('');
			} else {
				newData.push(row);
				setData(newData);
				setEditingKey('');
			}
		} catch (errInfo) {
			console.log('Validate Failed:', errInfo);
		}
	};
	const columns = [
		{ title: 'Họ tên', dataIndex: 'name', key: 'name', editable: true, },
		{ title: 'Giới tính', dataIndex: 'sex', key: 'sex', },
		{ title: 'Ngày sinh', dataIndex: 'dateOfBirth', key: 'dateOfBirth', },
		{ title: 'Tiền lương (VND)', dataIndex: 'salary', key: 'salary', editable: true, },
		{
			title: 'Thao tác',
			dataIndex: 'operation',
			render: (_, record) => {
				const editable = isEditing(record);
				return editable ? (
					<span>
						<Typography.Link
							onClick={() => save(record.key)}
							style={{
								marginRight: 8,
							}}
						>
							Save
						</Typography.Link>
						<Popconfirm title="Sure to cancel?" onConfirm={cancel}>
							<a>Cancel</a>
						</Popconfirm>
					</span>
				) : (
					<Row>
						<Typography.Link disabled={editingKey !== ''} onClick={() => editItem(record)}>
							<EditOutlined />
						</Typography.Link>
						&nbsp;&nbsp;
						<Typography.Link disabled={editingKey !== ''} onClick={() => deleteItem(record)}>
							<DeleteOutlined style={{ color: 'red' }} />
						</Typography.Link>
					</Row>
				);
			},
		},
	]
	const mergedColumns = columns.map((col) => {
		if (!col.editable) {
			return col;
		}
		return {
			...col,
			onCell: (record) => ({
				record,
				inputType: col.dataIndex === 'salary' ? 'number' : 'text',
				dataIndex: col.dataIndex,
				title: col.title,
				editing: isEditing(record),
			}),
		};
	});
	return (
		<Form form={form} component={false}>
			<h2>Bảng lương</h2>
			<Button onClick={addItem} type='primary'><PlusCircleOutlined /> ADD</Button>
			<Table
				components={{
					body: {
						cell: EditableCell,
					},
				}}
				bordered
				dataSource={data}
				columns={mergedColumns}
				rowClassName="editable-row"
				pagination={{
					onChange: cancel,
				}}
			/>

		</Form>
	);
};
export default ProductComponent;

