import capitalize, {reverseString, calculator} from './capitalize'

test(' takes a string and returns that string with the first character capitalized', ()=>{
    expect(capitalize('something')).toBe('Something')
});
