//app.js
//微信小程序账号密码

var refreshFlag = false
const AV = require('./utils/av-weapp-min.js'); 
 
AV.init({
  appId: 'wxc6be225939b7321d', 
  appKey: 'fced819494c8257c5c07ffde98f31dff'
})

//leancloud app账号密码
const AVLeanCloud = require('./utils/av-weapp-min-leancloud.js');
AVLeanCloud.init({
  appId: 'Sm7wY1Mxxb0iJ7X4hrDoKTgn-gzGzoHsz',
  appKey: 'FQori8EQIKVkfEpXKdh7M4a1'
})

App({
  
})