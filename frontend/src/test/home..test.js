import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "../landing_page/home/Hero.js";
import Awards from "../landing_page/home/Awards.js";
import Education from "../landing_page/home/Education.js";
import Pricing from "../landing_page/home/Pricing.js";
import Stats from "../landing_page/home/Stats.js";

describe("Testing Home Component", () => {
    test('Testing Hero Section', () => {
        render(<Hero/>);
        const heading = screen.getByText("Invest in everything");
        const para = screen.getByText("Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more");
        const img = screen.getByRole('img');
        const button = screen.getByText(/Sign up for free/i);
        expect(heading).toBeInTheDocument();
        expect(para).toBeInTheDocument();
        expect(img).toHaveAttribute('src', '/media/images/homeHero.png');
        expect(img).toHaveAttribute("alt", "Hero")
        expect(button).toBeInTheDocument();
    });
    test('Testing Awards Section', () => {
        render(<Awards/>);
        const img1 = screen.getByAltText("Large brokerage");
        expect(img1).toHaveAttribute("src", "/media/images/largestBroker.svg");
        const img2 = screen.getByAltText("Newspapers")
        expect(img2).toHaveAttribute("src", "/media/images/pressLogos.png");
    });
    test('Testing Education Section', () => {
        render(<Education/>);
        const img = screen.getByRole('img');
        const h1 = screen.getByText("Free and open market education");
        expect(img).toHaveAttribute("src", "/media/images/education.svg");
        expect(img).toHaveAttribute("alt", "Large brokerage");
        expect(h1).toBeInTheDocument();
    });
    test('Testing Pricing Section', () => {
        render(<Pricing/>);
        const h2 = screen.getByText("Unbeatable pricing");
        const p = screen.getByText(/We pioneered to concept of discount broking/i);
        const p2 = screen.getByText(/Free equity delivery/i);
        const p3 = screen.getByText("Intraday and F&O");
        expect(h2).toBeInTheDocument();
        expect(p).toBeInTheDocument();
        expect(p2).toBeInTheDocument();
        expect(p3).toBeInTheDocument();
    });
    test('Testing Stats Section', () => {
        render(<Stats/>);
        const heading1 = screen.getByText("Trust with confidence");
        const heading2 = screen.getByText("Customer-first always");
        const img1 = screen.getByAltText("Ecostystem");
        const img2 = screen.getByAltText("Newspapers");
        expect(heading1).toBeInTheDocument();
        expect(heading2).toBeInTheDocument();
        expect(img1).toHaveAttribute("src", "/media/images/ecosystem.png");
        expect(img2).toHaveAttribute("src", "/media/images/pressLogos.png");
    });
});