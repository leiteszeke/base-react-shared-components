// Dependencies
import styled from "styled-components/primitives";

export const Touchable = styled.Touchable`

`;

export const Wrapper = styled.View`
	background: red;
	border-radius: 4px;
	height: 30px;
	text-align: center;
	width: 100px;

	&:hover {
		background: transparent;
		border: 1px solid red;
	}
`;

export const Label = styled.Text`
	color: white;
	font-size: 16px;
	font-weight: bold;
	line-height: 30px;
	text-transform: uppercase;

	&:hover {
		color: red;
	}
`;