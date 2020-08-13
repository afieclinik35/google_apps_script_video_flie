|                            code                           |     Rhino    |  V8 |
| :-------------------------------------------------------: | :----------: | :-: |
|              Logger.log("%d + %d = %d",1,2,3)             |       ✘      |  ✔  |
| Logger.log(Utilities.formatString("%d + %d = %d", 1,2,3)) |       ✔      |  ✔  |
|                    console.log("%d ",2)                   | 等同Logger.log |  ✔  |
|                    console.info("info")                   | 等同Logger.log |  ✔  |
|                   console.error("error")                  | 等同Logger.log |  ✔  |
|                    console.warn("warn")                   | 等同Logger.log |  ✔  |
|   console.time('label_2')<br>console.timeEnd('label_1')   | 等同Logger.log |  ✔  |

|    特性   | Logger | console |
| :-------: | :----: | :-----: |
|    及時   |   ✔    |    ✘    |
|  GCP log  |    ✘   |    ✔    |

<!--  ||||  -->
