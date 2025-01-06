import React from 'react';
import { Table } from 'antd';

const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
  {
    key: '3',
    name: 'sanjeev',
    age: 42,
    address: '10 Downing Street',
  },
  {
    key: '4',
    name: 'Himanshu',
    age: 42,
    address: '10 Downing Street',
  },
  {
    key: '5',
    name: 'Pavan',
    age: 42,
    address: '10 Downing Street',
  },
    {
      key: '6',
      name: 'Kashyap',
      age: 42,
      address: '10 Downing Street',
    },
      {
        key: '7',
        name: 'Ajay',
        age: 42,
        address: '10 Downing Street',
      },
      {
        key: '8',
        name: 'Ajay',
        age: 42,
        address: '10 Downing Street', 
      }
  

];

const columns = [
  {
    title : 'User Id',
    dataIndex : 'DataIndex',
    key : 'userid'
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  
  {
    title : 'Orders',
    dataIndex : 'orders',
    key : 'order'
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];

const TopUser = () => {
  return(
   <>
   <h2 style={{textAlign : "left" , fontWeight : '700' , margin : '2%'}}>Top Users</h2>
   <Table dataSource={dataSource} columns={columns} pagination={{ pageSize: 4}} />
   </>
  );
};

export default TopUser;
