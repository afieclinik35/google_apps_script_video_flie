function myFunction4() {
  console.time("label_1");

  console.log("%d ", 2);
  console.info("info");
  console.error("error");
  console.warn("warn");

  console.time("label_2");
  console.timeEnd("label_1");
  console.timeEnd("label_2");
  // 連結GCP專案
}

// 看Atom!
