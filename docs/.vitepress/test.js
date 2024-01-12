const fs = require('fs')
const path = require('node:path')
function getItem(name) {
  const dir = path.resolve(__dirname, `../interview/${name}`)
  const files = fs.readdirSync(dir).map(file => {
    const name = path.basename(file, '.md')
    return { text: name, link: name }
  })
  console.log(files)
}

getItem('html')