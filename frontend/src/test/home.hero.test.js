import React from "react";
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "../landing_page/home/Hero.js";

describe("Hero componenet", () => {
    it('should render the heading', () => {
        render(<Hero/>);
        const heading = screen.getByText("Invest in everything");
        expect(heading).toBeInTheDocument();
    })
});