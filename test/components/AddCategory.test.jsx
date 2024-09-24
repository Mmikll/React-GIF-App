import { render, screen, fireEvent } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe(' <AddCategory /> component test', () => {
    
    const inputValue = 'saitama'

    test('should change the value of the text', () => {
        const onNewCategory = jest.fn()
        render( <AddCategory onNewCategory = { onNewCategory } />)

        const input = screen.getByRole('textbox')
                                //no pillo nadaite como se supone que yo adivine a dond va esto y que ponerles
        fireEvent.input( input, { target : {value : inputValue} } )

        expect(input.value).toBe('saitama')

        //screen.debug()

    })
    

    test('should call onNewCategory if input has value', () => {
        const onNewCategory = jest.fn()
        render( <AddCategory onNewCategory = { onNewCategory } />)

        const input = screen.getByRole('textbox');

        const form = screen.getByRole('form');

        fireEvent.input( input, { target : {value : inputValue} } )
        fireEvent.submit( form )

        expect(input.value).toBe('')

        expect(onNewCategory).toHaveBeenCalledWith('saitama')
        //screen.debug()
    })
    

    test('should not call onNewCategory if input does not have value', () => {
        const onNewCategory = jest.fn()
        render( <AddCategory onNewCategory = { onNewCategory } />)

        const input = screen.getByRole('textbox');

        const form = screen.getByRole('form')

        //fireEvent.input( input, { target : {value : ''} } ) viene vacio por defecto

        fireEvent.submit( form )
        screen.debug()

        expect(onNewCategory).toHaveBeenCalledTimes(0)
    
    })
})
