import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.form `
    
    width: 500px;
    h3{
        margin-bottom: 25px;
    }
    input{
        width:60%;
        margin: 15px 0;
        padding: 12px 10px;
        font-size: 12px;
        font-weight: bold;
    }
    textarea{
        width:100%;
        height: 340px;
        margin: 15px 0;
        padding: 20px;
        font-weight: bold;
    }

`

const Form = props =>{
    return <StyledForm onSubmit={props.submitHandler}>
        <h3>{props.header}</h3>
        <input name='title' type='text' placeholder='Note Title' value={props.state.title} onChange={props.changeHandler}></input>
        <textarea name='textBody' placeholder='Note Content' value={props.state.textBody} onChange={props.changeHandler}></textarea>
        <button type='submit' className='button'>Save</button>
    </StyledForm>
}


export default Form