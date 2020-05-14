import React, {useState} from 'react'
import {Layout, Menu, Breadcrumb} from 'antd';
import {Route, Link, Redirect} from 'react-router-dom'
import '../static/css/Admin.css'
import Index from './Index'
import AddArticle from './AddArticle'
import ArticleList from './ArticleList'
import {DesktopOutlined, PieChartOutlined, UserOutlined,} from '@ant-design/icons';

const {Content, Footer, Sider} = Layout;
const {SubMenu} = Menu;

const basePath = '/admin/'

function AdminIndex() {
    const [collapsed, setCollapsed] = useState(false)

    const onCollapse = collapsed => {
        setCollapsed(collapsed);
    }

    return (
        <Layout style={{minHeight: '100vh'}}>
            <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                <div className="logo"/>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="index" icon={<PieChartOutlined/>}>
                        <Link to={basePath + 'index'}>首页</Link>
                    </Menu.Item>
                    <SubMenu key="articleManage" icon={<UserOutlined/>} title="文章管理">
                        <Menu.Item key="addArticle" icon={<DesktopOutlined/>}>
                            <Link to={basePath + 'addArticle'}>添加文章</Link>
                        </Menu.Item>
                        <Menu.Item key="articleList">
                            <Link to={basePath + 'articleList'}>文章列表</Link>
                        </Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Content style={{margin: '0 16px'}}>
                    <Breadcrumb style={{margin: '16px 0'}}>
                        <Breadcrumb.Item>博客管理系统</Breadcrumb.Item>
                        <Breadcrumb.Item>工作台</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
                        <div>
                            <Route path={basePath + 'index'} component={Index}></Route>
                            <Route path={basePath + 'addArticle'} component={AddArticle}></Route>
                            <Route path={basePath + 'articleList'} component={ArticleList}></Route>
                            <Redirect to={basePath + 'index'}/>
                        </div>
                    </div>
                </Content>
                <Footer style={{textAlign: 'center'}}>www.blog.com</Footer>
            </Layout>
        </Layout>
    )
}

export default AdminIndex
