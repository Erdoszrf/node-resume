let async = require('async')
let superagent = require('superagent')
let header = {
  "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
  "Accept-Encoding": "gzip, deflate",
  "Accept-Language": "zh-CN,zh;q=0.9",
  "Cache-Control": "no-cache",
  "Connection": "keep-alive",
  "Cookie": "JSESSIONID=321A40CFA92D887410488EEF90592BAA; UM_distinctid=1633fb24ca637d-0b696a47e47152-5a442916-1fa400-1633fb24ca7163; _gscu_445557100=25782039gu89t711; _gscu_1413576102=261793483qrgd121; CNZZDATA925240=cnzz_eid%3D2008015031-1525779737-http%253A%252F%252Fwww.nmbys.cn%252F%26ntime%3D1526601576; _gscbrs_445557100=1; JSESSIONID=C0A5B2539E9688EB6327455149EBFB77; _gscs_445557100=26605294hlgg4y20|pv:2",
  "Host": "bd.nmbys.com",
  "Pragma": "no-cache",
  "Referer": "http://bd.nmbys.com/nmrec/client/member",
  "Upgrade-Insecure-Requests": "1",
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.139 Safari/537.36"
}
let urls = []
for(let i = 41982;i<47715;i++){
  urls.push('http://bd.nmbys.com/nmrec/client/printview/'+i)
}
var a = 1
async.mapLimit(urls,20,function(url,callback){
  superagent.get(url).set(header).end(function(err,res){
    if(res){check(res.text,url)}
    callback(null)
  })
  })

  function check(res,url){
    if(res.indexOf('达拉特旗农村信用合作联社')!= -1&&res.indexOf('简历筛选通过')!= -1&&res.indexOf('科技岗')!= -1){
      console.log(url)
    }
  }
