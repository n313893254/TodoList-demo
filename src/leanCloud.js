import AV from 'leancloud-storage'

var APP_ID = '1HFk15qgrkcry6Xjq8BSCLHu-gzGzoHsz';
var APP_KEY = 'oCdUooAairIUrKxIACARN2po';
AV.init({
  appId: APP_ID,
  appKey: APP_KEY
})

export default AV

export function signUp(username, password, successFn, errorFn) {
  var user = new AV.User();
  user.setUsername(username);
  user.setPassword(password);
  user.signUp().then(function (loginUser) {
    let user = getUserFromAVUser(loginUser);
    successFn.call(null, user)
  }, function (error) {
    errorFn.call(null, error)
  })

  return undefined;
}

function getUserFromAVUser(AVUser) {
  return {
    id: AVUser.id,
    ...AVUser.attributes
  }
}
