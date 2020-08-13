//debug
function vvv() {
    var i = 0
    var j = 1
    var k = test_loop()
    var a = 3
    var b = {"aaa":1}
    b['ccc'] = 2
    var c = b
    Logger.log(c)
    Logger.log(c.toString())
}

function test_loop() {
    for (var i = 0; i < 5; i++){
        Logger.log(i)
    }
    return i
}

function doPost(e) {
  var debug = 1;

  if (debug == 1) {
    var estringa = JSON.parse(
      '{"update_id":498276484,"message":{"message_id":3527,"from":{"id":207014603,"is_bot":false,"first_name":"永格天","last_name":"(則天)","username":"we684123","language_code":"zh-hans"},"chat":{"id":207014603,"first_name":"永格天","last_name":"(則天)","username":"we684123","type":"private"},"date":1596277764,"text":"請問有人在看 “臥牛真人” 的新書 “地球人實在是太兇猛了” 嗎？ 雖然他 修真四萬年 寫的很好  但這新書我才看4章就差點被毒死了 想問一下是不是真的目前整本都毒的...."}}',
    );
  } else {
    var estringa = JSON.parse(e.postData.contents);
  }

  var payload = identificar(estringa);
  var data = {
    "method": "post",
    "payload": payload,
  };
  /* 這段會用可以解開註解
    var d = new Date();
    var SpreadSheet = SpreadsheetApp.openById("1n6iAtxDLhT_ILzpez6vQ4U0l8w9IRXrUAYS6ZPOgaMM");
    var Sheet = SpreadSheet.getSheetByName("紀錄收到的訊息");
    var LastRow = Sheet.getLastRow();
    Sheet.getRange(LastRow+1, 1).setValue(d);  
    Sheet.getRange(LastRow+1, 2).setValue(estringa);
    //*/
  UrlFetchApp.fetch(
    "https://api.telegram.org/bot307523974:AAEL6zPfp-nFsQPYHf3-X1J8xKtGZCBg4C4/",
    data,
  );
}

function identificar(e) {
  if (e.message.text) {
    var mensaje = {
      "method": "sendMessage",
      "chat_id": String(e.message.chat.id),
      "text": e.message.text,
    };
  } else if (e.message.sticker) {
    var mensaje = {
      "method": "sendSticker",
      "chat_id": String(e.message.chat.id),
      "sticker": e.message.sticker.file_id,
    };
  } else {
    var mensaje = {
      "method": "sendMessage",
      "chat_id": String(e.message.chat.id),
      "text": "Try other stuff",
    };
  }
  console.log(String(e.message.chat.id));
  return mensaje;
}
//==========================================
