import React, { Component } from 'react';

const Title = (props)=>{
    return(
        <div className = "title">
            <h1>{ props.title }</h1>
        </div>
    );
};

export default Title;