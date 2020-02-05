//请求网站数据
const http = require('https')
const fs = require('fs')
let url = 'https://www.baidu.com/'
http
  .get(url, res => {
    const { statusCode } = res
    const contentType = res.headers['content-type']
    console.log(statusCode, contentType)

    let err = null
    if (statusCode !== 200) {
      err = new Error('请求错误')
    }

    if (err) {
      //重置缓存
      res.resume()
      return false
    }

    //数据分段，只要接受数据就会触发data事件
    let rawData = ''
    res.on('data', chunk => {
      rawData += chunk.toString('utf8')
    })
    res.on('end', () => {
      //将请求的数据保存到本地
      fs.writeFileSync('./baidu.html', rawData)
    })
  })
  .on('error', err => {
    console.log(err)
  })
