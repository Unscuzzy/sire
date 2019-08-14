/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import styled from 'styled-components'
import React from 'react'

export const Label = props => {
  const { htmlFor, ...otherProps } = props

  return <label htmlFor={htmlFor} {...otherProps} />
}

export const Form = styled.form`
  width: 600px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin: auto;
`

export const Input = styled.input`
  width: 270px;
  border: 1px solid #ccc;
  background-color: #fff;
  padding: 10px;
`

export const Textarea = styled.textarea`
  width: 580px;
  border: 1px solid #ccc;
  background-color: #fff;
  padding: 10px;
`
