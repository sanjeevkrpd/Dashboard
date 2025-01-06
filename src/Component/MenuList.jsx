
import React from 'react';
import { Menu } from 'antd';
import { DashboardOutlined, HomeOutlined, LogoutOutlined, OrderedListOutlined, ProfileOutlined } from '@ant-design/icons';
import './Menu.css';

const MenuList = ({ navigate ,collapsed }) => {
  return (
    <Menu
      style={{
        // width: '250px', 
        backgroundColor: '#fff',
        marginTop: '20px', 
      }}
      onClick={({ key }) => {
        navigate(key);
      }}
      items={[
        { label: 'Home', icon: <HomeOutlined />, key: '/' },
        { label: 'Dashboard', icon: <DashboardOutlined />, key: '/dashboard' },
        { label: 'List', icon: <OrderedListOutlined />, key: '/user' },
        { label: 'Users', icon: <ProfileOutlined />, key: '/profile' },
        { label: 'Signout', icon: <LogoutOutlined />, key: '/signout' },
        { label: 'Login', icon: <LogoutOutlined />, key: '/login' },
      ]}
    />
  );
};

export default MenuList;