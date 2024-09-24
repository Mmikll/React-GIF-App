import { GifItem } from "../../src/components/GifItem"
import { render, screen} from "@testing-library/react"
describe('GifItem Test', () => {
    const title = "titulo"
    const url = "https://localhost/image.jpg"

    test('should be the same as the snapshot', () => {
        
        const {container} = render( <GifItem title={title} url={url} />)

        expect(container).toMatchSnapshot()
    })
    
    test('should return the same URL and Alt', () => {
    
        render( <GifItem title={title} url={url} />)

        const {src, alt} = screen.getByRole('img')

        expect(src).toBe(url)

        expect(alt).toBe(title)

    })
    

    test('should return a text in h1', () => {
        
        render( <GifItem title={title} url={url} />)

        expect(screen.getByText('titulo')).toBeTruthy()

    })
    

})
