import React from 'react';
import InputWrap from "../components/EditUser/InputWrap"

export const inputField = ({input}) => {

    return (
        <InputWrap {
            ...input
        }/>
    )
}