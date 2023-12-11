import React from 'react'

import { Field } from 'formik'
import { Row, Col } from 'reactstrap'

import { Input } from '../../../../../../../Form'

export default ({ name }) =>
  <>
    <Row form>
      <Col>
        <Field
          name={ `${ name }.title` }
          placeholder="AudioRecorder"
          component={ Input }
          className="font-weight-bold"
        />
      </Col>
    </Row>
  </>
