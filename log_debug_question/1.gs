function myfunction1() {
    var t = 1
  //  Logger.log(t)
  //  Logger.log("這裡被執行了")
    Logger.log("%d + %d = %d",1,2,3)
    // 用 V8 跟 Rhino 
  }
  //============================================
  
  function myfunction2() {
    Logger.log("有%d個%4s，共%.2f公克")
    Logger.log(Utilities.formatString("有%d個%4s，共%.2f公克", 5, '鉛筆', 25.5321))
  }
  // %d %s 表示法來源
  // http://www.cplusplus.com/reference/cstdio/printf/
  //============================================
  
  
  
  
  
  // 延伸方案
  function myfunction3() {
    Logger.log("{0} + {0} = {1}".format(1,2))
  }
  
  
  String.prototype.format = function() {
    var txt = this.toString();
    for (var i = 0; i < arguments.length; i++) {
      var exp = getStringFormatPlaceHolderRegEx(i);
      arguments[i] = String(arguments[i]).replace(/\$/gm,'♒☯◈∭')
      txt = txt.replace(exp, (arguments[i] == null ? "" : arguments[i]));
      txt = txt.replace(/♒☯◈∭/gm,'$')
    }
    return cleanStringFormatResult(txt);
  }
  //讓輸入的字串可以包含{}
  function getStringFormatPlaceHolderRegEx(placeHolderIndex) {
    return new RegExp('({)?\\{' + placeHolderIndex + '\\}(?!})', 'gm')
  }
  //當format格式有多餘的position時，就不會將多餘的position輸出
  //ex:
  // var fullName = 'Hello. My name is {0} {1} {2}.'.format('firstName', 'lastName');
  // 輸出的 fullName 為 'firstName lastName', 而不會是 'firstName lastName {2}'
  function cleanStringFormatResult(txt) {
    if (txt == null) return "";
    return txt.replace(getStringFormatPlaceHolderRegEx("\\d+"), "");
  }