import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";


test("Should render header component with login button", () => {
    render(<BrowserRouter><Provider store={appStore}>
        <Header />
    </Provider>
    </BrowserRouter>);

    const getbtn = screen.getByRole("button", { name: "Login" });

    expect(getbtn).toBeInTheDocument();
})

it("Should render cart items", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider></BrowserRouter>
    );

    const cart = screen.getByText("Cart-0");
    expect(cart).toBeInTheDocument();
})

it("Should render login button to logout onclick", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider></BrowserRouter>
    );
    const loginbtn = screen.getByRole("button", { name: "Login" });
    fireEvent.click(loginbtn);
    const logoutbtn = screen.getByRole("button", { name: "Logout" });
    expect(logoutbtn).toBeInTheDocument();
})