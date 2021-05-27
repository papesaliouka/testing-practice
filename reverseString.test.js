import reverseString from './reverseString'

test('takes a string and returns it reversed', ()=>{
    expect(reverseString('hello')).toBe('olleh')
})