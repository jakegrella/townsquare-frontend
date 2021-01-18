// CSS MIXINS THAT WILL BE REUSED ACROSS THE APP

// import React from "react";
// import styled, { css } from "styled-components";
import { css } from 'styled-components';

// VARIABLES

const fontSizeForm = css`
	font-size: 1.75rem;
`;

const buttonColor = css`
	background: #52d5ac;
`;

// MIXINS

// FORM WRAPPED MIXIN

export const wrappedMixin = css`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 50vw;
	margin: 0 auto;
	header,
	.form {
		padding: 1rem 0;
	}
`;

// FORM MIXIN

export const formMixin = css`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	label {
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		font-size: ${fontSizeForm};
		margin: 0.5rem;
		span {
			flex-grow: 1;
		}
		input,
		select {
			font-size: ${fontSizeForm};
			padding: 0.75rem;
			margin-left: 1rem;
			flex-grow: 2;
			border-style: 0.75px solid #ffffff;
		}
	}
	.errorMessage {
		color: red;
		font-weight: bold;
		display: flex;
		justify-content: center;
	}
	textarea {
		margin-top: 0.5rem;
		width: 100%;
		font-size: ${fontSizeForm};
		padding: 0.75rem;
	}
	.tos {
		font-size: 1rem;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		span {
			width: 50%;
		}
	}
	.button {
		display: flex;
		flex-direction: row;
		justify-content: center;
		margin: 0.5rem;
		button {
			font-size: ${fontSizeForm};
			border: none;
			border-radius: 5px;
			padding: 0.5rem;
			background: ${buttonColor};
		}
	}
`;
