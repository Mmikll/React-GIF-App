import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

jest.mock('../../src/hooks/useFetchGifs')


describe('<GifGrid/> component test', () => {

    const category = 'one-punch'

    test('should show loading when the page is loading', () =>{

        useFetchGifs.mockReturnValue({
            isLoading: true,
            images: []
        })

        render(<GifGrid category = { category } />)

        expect( screen.getByText('Cargando...'))

        expect( screen.getByText(category))

        //screen.debug()
    })

    test('should show images after useFetchGif is loaded', () => {
    
        const gifs = [
            {
                id: 'abc',
                title: 'saitama',
                url: 'https://localhost/saitama.jpg'
            },
            {
                id: 'abcd',
                title: 'one-punch',
                url: 'https://localhost/onepunch.jpg'
            },
            
        ]

        useFetchGifs.mockReturnValue({
            isLoading: false,
            images: gifs
        })

        render(<GifGrid category = { category } />)

        expect( screen.getAllByRole('img').length).toBe(2)

    })
    
})
