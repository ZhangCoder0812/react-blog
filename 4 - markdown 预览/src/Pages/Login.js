import React , { useState} from  'react'
import { Card , Input , Button , Spin } from 'antd'
import { UserOutlined,UnlockOutlined } from '@ant-design/icons';
import '../static/css/Login.css'


function Login() {

    const [userName , setUserName] = useState('')
    const [password , setPassword] = useState('')
    const [isLogin  , setIsLogin]  = useState(false)
    const checkLogin =()=>{
        setIsLogin(true)
        setTimeout(()=>{
            setIsLogin(false)
        },1000)
    }
    return (
        <div className='login-div'>

            <Spin tip='Loading...' spinning={isLogin}>
                <Card title="博客后台管理系统" bordered={true}  style={{ width: 400 }}>
                    <Input
                        id='userName'
                        size='large'
                        placeholder="Enter your userName"
                        prefix={<UserOutlined/>}
                        onChange={(e)=>{setUserName(e.target.value)}}
                    />
                    <br/><br/>
                    <Input.Password
                        id='password'
                        size='large'
                        placeholder="Enter your password"
                        prefix={<UnlockOutlined />}
                        onChange={(e)=>{setPassword(e.target.value)}}
                    />
                    <br/><br/>
                    <Button type='primary' size='large' block onClick={checkLogin}>login in</Button>
                </Card>
            </Spin>

        </div>
    )
}

export default Login
