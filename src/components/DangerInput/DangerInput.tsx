import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Dangerbar from '../DangerBar/DangerBar';



const DangerInput = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue (Number(event.target.value));
    }

  return (
    <div className='m-3 w-50'>
        <h2>Ejemplo 1</h2>

        <Form.Range value = {value} onChange = {handleChange}/>

        <Dangerbar value= {value}/>

    </div>
  )
}

export default DangerInput
