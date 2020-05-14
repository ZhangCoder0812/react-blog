import React , {useState,useEffect} from 'react'
import {List,Row,Col,Modal,message,Button} from 'antd'
import '../static/css/ArticleList.css'
const {confirm} =Modal

function ArticleList() {

    const [list,setList]=useState([])

    let dataSource=[
        {title:'JavaScript高级程序设计(第3版)',typeName:'视屏教程',time:'2020-05-04',count:'10'},
        {title:'HTML 5与CSS 3权威指南',typeName:'文章教程',time:'2020-05-04',count:'10'},
        {title:'jQuery权威指南',typeName:'文章教程',time:'2020-05-04',count:'10'},
        {title:'Node.js开发指南 ',typeName:'视屏教程',time:'2020-05-04',count:'10'},
    ]

    useEffect(()=>{
        getList(dataSource)
    },[])

    const getList=(dataSource)=>{
        setList(dataSource)
    }

    const delArticle=(article)=>{
        confirm({
            title:'确定删除此文章？',
            content:article.title,
            onOk(){
                getList(dataSource.filter(item=>item.title !== article.title))
                message.success('删除成功！')
            }
        })
    }

    return (
        <div>
              <List
                header={
                    <Row className='list-div'>
                        <Col span={8}>
                            <b>标题</b>
                        </Col>
                        <Col span={4}>
                            <b>类别</b>
                        </Col>
                        <Col span={4}>
                            <b>发布时间</b>
                        </Col>
                        <Col span={4}>
                            <b>浏览量</b>
                        </Col>
                        <Col span={4}>
                            <b>操作</b>
                        </Col>
                    </Row>
                }
                bordered
                dataSource={list}
                renderItem={item=>(
                    <List.Item>
                        <Row className='list-div'>
                            <Col span={8}>
                                {item.title}
                            </Col>
                            <Col span={4}>
                                {item.typeName}
                            </Col>
                            <Col span={4}>
                                {item.time}
                            </Col>
                            <Col span={4}>
                                {item.count}
                            </Col>
                            <Col span={4}>
                                <Button type='primary'>修改</Button>&nbsp;
                                <Button onClick={()=>{delArticle(item)}}>删除</Button>
                            </Col>
                        </Row>
                    </List.Item>
                )}
              >
              </List>
        </div>
    )
}

export default ArticleList
