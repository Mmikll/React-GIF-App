import { getGifs } from "../../src/helpers/getGifs"

describe(' getGifs() helper test', () => {

    test('should return an array of objects', async () => {
    
        const gifs = await getGifs();

        expect(gifs[0]).toEqual({
                id: expect.any( String ),
                title: expect.any( String ),
                url: expect.any( String )
            
        })

        expect(gifs.length).toBeGreaterThan(0)
    })
    





})
