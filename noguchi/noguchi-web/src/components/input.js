import React, {useState} from "react";
import { Input, Card, Space, Button ,Avatar} from 'antd';
import "antd/dist/antd.css";
import './components.css'
import {UserOutlined,LockOutlined,KeyOutlined} from '@ant-design/icons';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'




const FormInput = ({
    name,
    type,
    placeholder,
    onChange,
    className,
    value,
    error,
    children,
    label,
    prefix,
    ...props
  }) => {
    
    return (
      <React.Fragment>
      
        <Input
          id={name}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          className={className}
          style={error=='' ? {border:'1-x solid black'}: {border: 'solid 1px red'}}
        />
        { error && <p>{ error }</p>}
      </React.Fragment>
    )
  }
  
  FormInput.defaultProps = {
    type: "text",
    className: ""
  }
  
  FormInput.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['text', 'number', 'password']),
    className: PropTypes.string,
    value: PropTypes.any,
    onChange: PropTypes.func.isRequired
  }

export default FormInput;