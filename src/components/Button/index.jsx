// Dependencies
import React from 'react';
// Styled
import { Touchable, Wrapper, Label } from './style';

const Button = ({ label }) => (
	<Touchable onClick={ () => alert('Hola') }>
		<Wrapper>
			<Label>{ label }</Label>
		</Wrapper>
	</Touchable>
);

export default Button;