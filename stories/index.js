// Dependencies
import React from "react";
import { storiesOf } from "@storybook/react";
// Components
import { Button } from "../src/components";

storiesOf("Button", module)
	.add("with text", () => (
		<Button label="Text" />
	))