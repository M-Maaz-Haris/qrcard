import React from 'react';
import {Row, Col} from 'react-bootstrap';
import styles from './style.module.css';

const Qrcard = () => {
  return (
    <>
      <section className='d-flex align-items-center' style={{height: "100vh"}}>
              <Row className="m-0 w-100">
                 <Col xs={12} md={{span:4, offset:4}} lg={{span:4, offset:4}}>
                   <div className={`bg-white p-3 ${styles.cardWrapper} mx-auto shadow`}>
                      <img src='assets/image-qr-code.png' className={`img-fluid mx-auto d-block ${styles.cardImg}`} alt='Not Found'/>
                      <div className='px-2 pt-3'>
                        <h1 className={`${styles.cardHeading} mb-0`}>Improve Your Front-end Skills by building projects</h1>
                        <p className={`text-muted text-center pt-2`}>Scan the QR code to visit frontend mentor and take your coding skills to next level</p>
                      </div>
                   </div>
                 </Col>
              </Row>
      </section>
    </>
  )
}

export default Qrcard