import './Header.css';
import Navbar from '../Navbar/Navbar';
import { Row, Col } from 'react-bootstrap';


function Header (){
    return(
   
            <Row>
                <Col md={12} sm={12} lg={12} xl={12} xxl={12} >
                   
                <div className="header-container">
                <Navbar /> 
                <div className='header-logo'>
                        <img src="https://i.postimg.cc/mrh8P9Qh/SUPER-MARKET-1.png" alt="" />
                    </div>
            
                </div>
        </Col>
        </Row>
        

        
        )
    }
    
    export default Header;