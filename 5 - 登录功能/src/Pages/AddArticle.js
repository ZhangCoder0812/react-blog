import React , {useState} from 'react'
import '../static/css/AddArticle.css'
import marked from 'marked'
import {Row , Col , Input , Select , Button , DatePicker} from "antd";

const {Option} = Select
const {TextArea} =Input

function AddArticle (){

    const [articleId,setArticleId] = useState(0)  // 文章的ID，如果是0说明是新增加，如果不是0，说明是修改
    const [articleTitle,setArticleTitle] = useState('')   //文章标题
    const [articleContent , setArticleContent] = useState('')  //markdown的编辑内容
    const [markdownContent, setMarkdownContent] = useState('预览内容') //html内容
    const [introducemd,setIntroducemd] = useState()            //简介的markdown内容
    const [introducehtml,setIntroducehtml] = useState('等待编辑') //简介的html内容
    const [showDate,setShowDate] = useState()   //发布日期
    const [updateDate,setUpdateDate] = useState() //修改日志的日期
    const [typeInfo ,setTypeInfo] = useState([]) // 文章类别信息
    const [selectedType,setSelectType] = useState(1) //选择的文章类别

    // 设置marked的参数
    marked.setOptions({
        renderer: new marked.Renderer(),
        gfm: true, //允许 Git Hub标准的markdown.
        tables: true, //允许支持表格语法（该选项要求 gfm 为true）
        breaks: true, //允许回车换行（该选项要求 gfm 为true）
        pedantic: false, //不纠正原始模型任何的不良行为和错误（默认为false）
        sanitize: false, //对输出进行过滤（清理），将忽略任何已经输入的html代码（标签）
        smartLists: true, //使用比原生markdown更时髦的列表
        smartypants: false //使用更为时髦的标点
    });

    const changeContent=(e)=>{
        setArticleContent(e.target.value)
        let html = marked(e.target.value) // 获取文本域中的值进行marked转化 赋值给markdown
        setMarkdownContent(html)
    }

    const changeIntroduce = (e) => {
        setIntroducemd(e.target.value)
        let html = marked(e.target.value)
        setIntroducehtml(html)
    }

    return (
        <div>
             <Row gutter={5}>
                 <Col span={18}>
                    <Row gutter={10}>
                        <Col span={20}>
                            <Input placeholder='博客标题' size='large' />
                        </Col>
                        <Col span={4}>
                            &nbsp;
                            <Select defaultValue='1' size='large'>
                                <Option value='1'>视屏教程</Option>
                            </Select>
                        </Col>
                    </Row>
                     <br/>
                     <Row gutter={10}>
                         <Col span={12}>
                             <TextArea onChange={changeContent} className='markdown-content' rows={30} placeholder='文章内容'>

                             </TextArea>
                         </Col>
                         <Col span={12}>
                            <div className='show-html' dangerouslySetInnerHTML={{__html:markdownContent}}>
                            </div>
                         </Col>
                     </Row>
                 </Col>
                 <Col span={6}>
                     <Row >
                         <Col span={24}>
                             <Button  size='large'>暂存文章</Button>&nbsp;&nbsp;
                             <Button type='primary' size='large'>发布文章</Button>
                             <br/>
                         </Col>
                         <Col span={24}>
                             <br/>
                             <TextArea onChange={changeIntroduce} rows={4} placeholder='文章简介'>

                             </TextArea>
                             <br/>
                             <br/>
                             <div className='introduce-html' dangerouslySetInnerHTML={{__html:introducehtml}}>

                             </div>
                         </Col>
                         <Col span={12}>
                              <div className='date-select'>
                                  <DatePicker placeholder='发布日期' size='large' ></DatePicker>
                              </div>
                         </Col>
                     </Row>
                 </Col>
             </Row>
        </div>
    )

}

export default AddArticle
