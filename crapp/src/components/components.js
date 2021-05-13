import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { onChange, onSuccess } from "../actions/actions";

const MovieDiv = styled.div`
    h2 {
        color: red;
    }
`

export const Movies = (props) => {


    const handleSubmit = (e) => {
        e.preventDefault();
        props.onChange();
    }

    return (
        <MovieDiv>
            <h2>Title: {props.title}</h2>
            <button onClick={handleSubmit}>Show Movie</button>
        </MovieDiv>
    )
}

const mapStateToProps = (state) => {
    return{
        title: state.title
    };
};


export default connect(mapStateToProps, { onChange, onSuccess })(Movies);