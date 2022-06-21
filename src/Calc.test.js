import { render, screen, fireEvent } from '@testing-library/react';
import Calc from './Calc';

test('renders empty calculator', () => {
    render(<Calc />);
    const button1 = screen.getByText("1");
    const button2 = screen.getByText("2");
    const button3 = screen.getByText("3");
    const button4 = screen.getByText("4");
    const button5 = screen.getByText("5");
    const button6 = screen.getByText("6");
    const button7 = screen.getByText("7");
    const button8 = screen.getByText("8");
    const button9 = screen.getByText("9");
    const button0 = screen.getAllByText("0");
    const buttonDot = screen.getByText(".");
    const buttonSci = screen.getByText("Sci");
    const buttonClear = screen.getByText("C");
    const buttonPlus = screen.getByText("+");
    const buttonMinus = screen.getByText("-");
    const buttonMultiply = screen.getByText("*");
    const buttonDivide = screen.getByText("/");
    const buttonEqual = screen.getByText("=");
    expect(button1).toBeInTheDocument();
    expect(button2).toBeInTheDocument();
    expect(button3).toBeInTheDocument();
    expect(button4).toBeInTheDocument();
    expect(button5).toBeInTheDocument();
    expect(button6).toBeInTheDocument();
    expect(button7).toBeInTheDocument();
    expect(button8).toBeInTheDocument();
    expect(button9).toBeInTheDocument();
    expect(button0).toHaveLength(2); // the button and the result on top
    expect(buttonDot).toBeInTheDocument();
    expect(buttonSci).toBeInTheDocument();
    expect(buttonClear).toBeInTheDocument();
    expect(buttonPlus).toBeInTheDocument();
    expect(buttonMinus).toBeInTheDocument();
    expect(buttonMultiply).toBeInTheDocument();
    expect(buttonDivide).toBeInTheDocument();
    expect(buttonEqual).toBeInTheDocument();
});

describe('calc can sum', () => {
    it('can do simple sums', () => {
        render(<Calc />);
        const button1 = screen.getByText("1");
        const button2 = screen.getByText("2");
        const buttonPlus = screen.getByText("+");
        const buttonEqual = screen.getByText("=");

        fireEvent.click(button1)
        fireEvent.click(button1)
        fireEvent.click(buttonPlus)
        fireEvent.click(button2)
        fireEvent.click(button2)
        fireEvent.click(buttonEqual)

        expect(screen.getByText("33")).toBeInTheDocument();
    });
    it('can do decimal sums', () => {
        render(<Calc />);
        const button1 = screen.getByText("1");
        const button2 = screen.getByText("2");
        const buttonPlus = screen.getByText("+");
        const buttonDot = screen.getByText(".");
        const buttonEqual = screen.getByText("=");

        fireEvent.click(button1)
        fireEvent.click(buttonDot)
        fireEvent.click(button1)
        fireEvent.click(buttonPlus)
        fireEvent.click(button2)
        fireEvent.click(button2)
        fireEvent.click(buttonEqual)

        expect(screen.getByText("23.1")).toBeInTheDocument();
    });
});

describe('calc can substract', () => {
    it('can do simple substractions', () => {
        render(<Calc />);
        const button1 = screen.getByText("1");
        const button2 = screen.getByText("2");
        const buttonMinus = screen.getByText("-");
        const buttonEqual = screen.getByText("=");

        fireEvent.click(button2)
        fireEvent.click(button2)
        fireEvent.click(buttonMinus)
        fireEvent.click(button1)
        fireEvent.click(button1)
        fireEvent.click(buttonEqual)

        expect(screen.getByText("11")).toBeInTheDocument();
    });
    it('can do decimal substractions', () => {
        render(<Calc />);
        const button1 = screen.getByText("1");
        const button2 = screen.getByText("2");
        const buttonMinus = screen.getByText("-");
        const buttonDot = screen.getByText(".");
        const buttonEqual = screen.getByText("=");

        fireEvent.click(button2)
        fireEvent.click(button2)
        fireEvent.click(buttonMinus)
        fireEvent.click(button1)
        fireEvent.click(buttonDot)
        fireEvent.click(button1)
        fireEvent.click(buttonEqual)

        expect(screen.getByText("20.9")).toBeInTheDocument();
    });
});

describe('calc can multiply', () => {
    it('can do simple multiplications', () => {
        render(<Calc />);
        const button2 = screen.getByText("2");
        const buttonMultiply = screen.getByText("*");
        const buttonEqual = screen.getByText("=");

        fireEvent.click(button2)
        fireEvent.click(button2)
        fireEvent.click(buttonMultiply)
        fireEvent.click(button2)
        fireEvent.click(buttonEqual)

        expect(screen.getByText("44")).toBeInTheDocument();
    });
    it('can do decimal substractions', () => {
        render(<Calc />);
        const button2 = screen.getByText("2");
        const buttonMultiply = screen.getByText("*");
        const buttonDot = screen.getByText(".");
        const buttonEqual = screen.getByText("=");

        fireEvent.click(button2)
        fireEvent.click(buttonDot)
        fireEvent.click(button2)
        fireEvent.click(buttonMultiply)
        fireEvent.click(button2)
        fireEvent.click(buttonEqual)

        expect(screen.getByText("4.4")).toBeInTheDocument();
    });
});


describe('calc can divide', () => {
    it('can do simple division', () => {
        render(<Calc />);
        const button2 = screen.getByText("2");
        const buttonDivide = screen.getByText("/");
        const buttonEqual = screen.getByText("=");

        fireEvent.click(button2)
        fireEvent.click(button2)
        fireEvent.click(buttonDivide)
        fireEvent.click(button2)
        fireEvent.click(buttonEqual)

        expect(screen.getByText("11")).toBeInTheDocument();
    });
    it('can do decimal division', () => {
        render(<Calc />);
        const button2 = screen.getByText("2");
        const buttonDivide = screen.getByText("/");
        const buttonDot = screen.getByText(".");
        const buttonEqual = screen.getByText("=");

        fireEvent.click(button2)
        fireEvent.click(button2)
        fireEvent.click(buttonDivide)
        fireEvent.click(button2)
        fireEvent.click(buttonDot)
        fireEvent.click(button2)
        fireEvent.click(buttonEqual)

        expect(screen.getByText("10")).toBeInTheDocument();
    });
});