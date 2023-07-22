let fs=require("fs")
fs.mkdirSync("vishnu")
fs.writeFileSync("vishnu/breakfast.txt",'today i had dos with chutny')

fs.appendFileSync('vishnu/breakFast.txt','for luch make chiken briyany ready')
 let data=fs.readFileSync('vishnu/breakFast.txt','utf-8')
 console.log(data)
//  fs.unlinkSync('jayshree/del.txt')
// fs.rmdirSync('del')