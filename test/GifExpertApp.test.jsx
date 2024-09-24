import { GifExpertApp } from "../src/GifExpertApp";
import { render, screen, fireEvent,} from "@testing-library/react";


describe(' <GifExpetApp /> component test', () => {

    test('should ', () => {
        render(<GifExpertApp />);

        expect(screen.getByText('One Punch')).toBeTruthy();

        const input = screen.getByRole('textbox'); 
        const form = screen.getByRole('form');     
        

        fireEvent.input(input, { target: { value: 'Dragon Ball' } });
        

        fireEvent.submit(form);
        

        expect(screen.getByText('Dragon Ball')).toBeTruthy();

        screen.debug()

    })
    



})
