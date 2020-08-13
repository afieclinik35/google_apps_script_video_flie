//Better Logger
function t2() {
  console.log("---------------------");
  var logger = new BetterLogger.BetterLogger();
  var levels = logger.levels;
  logger.set_level(logger.levels.WARNING);
  console.log(logger.get_config());

  // 這是第2種
  // this 2
  logger.emergency("這是測試 EMERGENCY =====");
  logger.alert("這是測試 ALERT =====");
  logger.critical("這是測試 CRITICAL =====");
  logger.error("這是測試 ERROR =====");
  logger.warning("這是測試 WARNING =====");
  logger.info("這是測試 INFO =====");
  logger.debug("這是測試 DEBUG =====");
  logger.notice("這是測試 NOTICE =====");
}

function myFunction6() {
  var logger = new BetterLogger.BetterLogger();
  var levels = logger.levels;
  logger.set_level(levels.DEBUG);

  logger.set_sheet_id("1wHezplTjXYvM1SlYX2gLQ4BF_eEX8eACjv96JZv28Pg");
  logger.set_use_sheet(true);
  logger.set_sheet_page_name("log_2020/08/06");
  logger.set_use_mail(true);
  logger.application = "log-debug-question";

  logger.emergency("這是測試 DEBUG =====");
  console.log("end");
}
