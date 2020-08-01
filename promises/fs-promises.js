import fs from 'fs'

// fs.writeFile('./sdgsdgs/sdg/sdgs/dgsdg/my.txt', 'text kek', () => {})


const myWriteFile = () => {
  var myWriteFilePromise = fs.promises.writeFile('my2.txt', 'text kek2')
  return myWriteFilePromise
}

const a = myWriteFile()
console.log(a)
a.then((result) => {
  console.log(a, result)
}).catch((err) => {
  console.log(a, err)

})
//
// a
//   .then((result) => {
//     console.log('succes2')
//   })
//   .catch(err => {
//     console.error('bad2', err)
//   })
