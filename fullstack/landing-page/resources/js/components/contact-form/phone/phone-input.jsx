import React, { Component } from "react";

class PhoneInput extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: props.name,
            value: props.value,
            focused: false,
        };
    }
}