import React , { useState} from  'react'
import { Card , Input , Button , Spin ,message } from 'antd'
import { UserOutlined,UnlockOutlined } from '@ant-design/icons';
import '../static/css/Login.css'

function Login(props) {

    const [userName , setUserName] = useState('')
    const [password , setPassword] = useState('')
    const [isLogin  , setIsLogin]  = useState(false)
    const checkLogin =()=>{
        setIsLogin(true)
        setTimeout(()=>{
            setIsLogin(false)
        },1000)

        if(!userName){
            message.error('请输入用户名！')
            return false
        }else if(!password){
            message.error('请输入密码！')
            return false
        }

        if(userName=='admin' && password=='123456'){
            message.success('登录成功！')
            props.history.replace('/index')
        }else {
            message.error('用户名或密码错误！')
        }

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
