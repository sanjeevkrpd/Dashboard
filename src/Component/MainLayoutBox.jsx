import React, { useState , useEffect} from "react";
import { Layout } from "antd";


import { useNavigate } from "react-router-dom";
import "../App.css";

import HeaderBox from "./HeaderBox";
import RouteContent from "./RouteContent";

import MenuList from './MenuList'
const MainLayoutBox = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const { Sider, Content } = Layout;

  const expandedWidth = 270;
  const collapsedWidth = 80;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) { 
        setCollapsed(true);
      } else {
        setCollapsed(false);
      }
    };

  
    window.addEventListener('resize', handleResize);

 
    handleResize();

    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        {/* Fixed Sidebar */}
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          collapsedWidth={collapsedWidth}
          width={expandedWidth}
          style={{
            position: "fixed",
            height: "100vh",
            left: 0,
            backgroundColor: "#fff",
            top: 0,
            transition: "width 0.2s",
          }}
        >
          <div
            className="demo-logo-vertical brandStyle"
            style={{ color: collapsed ? "#fff" : "#000" }}
          >
            Mahaagro Mart
          </div>

          {/* Our Route Is Here  */}

          <MenuList navigate={navigate} collapsed={collapsed} />
        </Sider>

        <Layout
          style={{
            marginLeft: collapsed ? 80 : 250,
            transition: "margin-left 0.2s",
            backgroundColor: "#f4f7fe",
          }}
        >
          {/* Header */}
          <HeaderBox collapsed={collapsed} setCollapsed={setCollapsed} />
          <Content
            style={{
              padding: "24px",
              backgroundColor: "#f4f7fe",
              minHeight: "200vh",
              marginLeft: "20px",
            }}
          >
            <RouteContent />
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default MainLayoutBox;
