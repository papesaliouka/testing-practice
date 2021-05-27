import arrayAnalysis from './arrayAnalysis'

let arr= [1,2,3,4,5,6]
test('arrayAnalysis', ()=>{
    expect(arrayAnalysis(arr)).toEqual({
        average: Math.floor(3.5),
        min: 1,
        max:6,
        length: 6
    })
})