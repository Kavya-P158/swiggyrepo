
import { fireEvent, render, screen } from "@testing-library/react";
import Restocard from "../Restocard";
import MOCKDATA from "../mock/rescardmock.json";
import "@testing-library/jest-dom";


test("It should render resto card with props data", () => {

    render(
        <Restocard resdata={MOCKDATA} />
    );

    const resname = screen.getByText("Leon's - Burgers & Wings (Leon Grill)")
    expect(resname).toBeInTheDocument();
})