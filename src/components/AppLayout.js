import React from "react";
import { Layout } from "antd";

function AppLayout(props) {
  const { Header, Content, Footer } = Layout;

  return (
    <Layout>
      <Layout>
        <Header
          className="site-layout-sub-header-background"
          style={{ padding: 0 }}
        />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            {props.children}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Covid-19 Statistics ©2020 Created by{" "}
          <a
            href="http://devwills.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Devwills
          </a>
        </Footer>
      </Layout>
    </Layout>
  );
}


export default AppLayout;
