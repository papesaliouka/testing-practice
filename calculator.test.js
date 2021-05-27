import calculator from './calculator'

test('add', ()=>{
    expect(calculator.add(1,2)).toBe(3)
})

test('substract',()=>{
    expect(calculator.substract(2,1)).toBe(1)
})

test('divide',()=>{
    expect(calculator.divide(2,2)).toBe(1)
})

test('multiply',()=>{
    expect(calculator.multiply(2,2)).toBe(4)
})
