const cheerio = require('cheerio')

let $ = cheerio.load(
  '<div><p><img src="http://www.baidu.com"/><img src="http://www.baidu1.com"/></p></div>'
)
//将html字符串转化为类dom结构，之后就可以通过jq的语法选择其中元素
console.log(
  $('img').each((index, el) => {
    console.log($(el).attr('src'))
  })
)
