/* eslint-disable react/prop-types */
import { useRef } from "react";
import styled, { css } from "styled-components";

export const Button = ({ children, variant, onClick, variants, type }) => {
	const audioRef = useRef(new Audio());

	const toggleAudio = (e) => {
		audioRef.current.play();
		onClick();
		e.preventDefault();
	};

	return (
		<StyledButton
			variant={variant}
			variants={variants}
			onClick={toggleAudio}
			type={type}>
			{children}
		</StyledButton>
	);
};

const Button_Styled = {
	outlined: {
		default: "#ffff",
		active: "#0052bc",
	},
	Warning: {
		default: "#F37705",
		active: "#CF6300",
		hover: "#FF912B",
	},
	contained: {
		default: "#217cf3",
		active: "rgb(9, 94, 205)",
		hover: "#4e87d2",
	},

	Danger: {
		default: "#ff0000",
		active: "#C20BOB",
		hover: "#FF912B",
	},
};

const Button_border = {
	outlined: {
		default: "1px solid #0052bc",
		active: "#0052bc",
		hover: "3px solid #0052bc",
	},
	contained: {
		default: "none",
	},
	Warning: {
		default: "none",
	},
	Danger: {
		default: "none",
	},
};
const Button_color = {
	outlined: {
		default: "#0052bc",
		active: "#ffff",
		hover: " #0052bc",
	},
	contained: {
		default: "#ffffff",
		active: "#0052BC",
		hover: "#4C94F0",
	},
	Warning: {
		default: "#ffffff",
		active: "#CF6300",
		hover: "#ffffff",
	},
	Danger: {
		default: "#ffffff",
		active: "#C20OBB",
		hover: "#E54343",
	},
};

function getVariant(prop) {
	const initVatiant = Button_Styled[prop.variant];

	return css`
		background-color: ${initVatiant.default};
		&:hover {
			background-color: ${initVatiant.hover};
		}
		&:active {
			background-color: ${initVatiant.active};
		}
	`;
}
function getVariantButton(prop) {
	const initVatiantBorder = Button_border[prop.variant];
	return css`
		border: ${initVatiantBorder.default};
		&:hover {
			border: ${initVatiantBorder.hover};
		}
		&:active {
			border: ${initVatiantBorder.active};
		}
	`;
}
function getVariantColor(prop) {
	const initVatiantaColor = Button_color[prop.variant];

	return css`
		color: ${initVatiantaColor.default};
		&:hover {
			color: ${initVatiantaColor.hover};
		}
		&:active {
			color: ${initVatiantaColor.active};
		}
	`;
}

const StyledButton = styled.button`
	${getVariantButton}
	${getVariant}
  ${getVariantColor}
  padding: 10px 30px;
	border-radius: 5px;
	font-size: 25px;
`;
