import contImg from './utils/svgs/contact.svg'
import { Row, Col } from 'antd'
const Contact = () =>  {

    return (
        <div>
             <Row >
            <Col xs={{span:24}} sm={{span:24}} md={{span:12}} lg={{span:0}} >
            <div className="">
              <img src={contImg} className="img-fluid" alt="svg" loading="lazy" />
            </div>
            </Col>
              <Col sm={{span:24}} lg={{span:12}} md={{span:12}}>
                
                

              </Col>
              <Col xs={{span:0}} sm={{span:0}} md={{span:0}} lg={{span:12}} >
              <div className="">
                <img src={contImg} className="img-fluid" alt="svg" loading="lazy" />
              </div>
              </Col>
            </Row>
        </div>
            
    )
}


export default Contact