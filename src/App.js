import './App.css';
import React from 'react';
import { Card, Tabs, Col } from 'antd';
import ProductComponent from './Components/ProductComponent';
import UserInfomation from './Components/UserInfomation';

const listData = [
	{
		key: '1',
		name: 'Nguyen Van A',
		sex: 'Nam',
		dateOfBirth: '01/01/2000',
		salary: 1000000,
	},
	{
		key: '2',
		name: 'Nguyen Thị B',
		sex: 'Nữ',
		dateOfBirth: '01/01/2001',
		salary: 1000000,
	},
	{
		key: '3',
		name: 'Nguyen Van C',
		sex: 'Nam',
		dateOfBirth: '01/10/2000',
		salary: 1000000,
	},
	{
		key: '4',
		name: 'Nguyen Van D',
		sex: 'Nam',
		dateOfBirth: '24/12/1999',
		salary: 1000000,
	},
	{
		key: '5',
		name: 'Nguyen Thị E',
		sex: 'Nữ',
		dateOfBirth: '01/01/2000',
		salary: 1000000,
	},
];
export const defaultPanes = [
	{
		label: `Product`,
		children: <ProductComponent listData={listData} />,
		key: 1,
	},
	{
		label: `User Infomation`,
		children: <UserInfomation />,
		key: 2,
	},
]

const App = () => {
	return (
		<Card>
			<Col span={12} offset={6}>
				<Tabs
					type="card"
					items={defaultPanes}
				/>
			</Col>
		</Card>
	);
}

export default App;