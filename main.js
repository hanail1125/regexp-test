let str = `
010-1234-5679.
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
http://localhost:1234
동해물과_백두산이 마르고 닳도록
`

// const regexp = new RegExp('the', 'gi')
// const regexp = /the/gi
// console.log(regexp.test(str))
// str = str.replace(regexp, 'AAA')
// console.log(str)

console.log(
  str.match(/(?<=@).{1,}/g, '')
);
