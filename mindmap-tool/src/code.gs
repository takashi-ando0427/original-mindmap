function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
      .setTitle('Slack階層化マインドマップ')
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
      .addMetaTag('viewport', 'width=device-width, initial-scale=1.0');
}

// GAS内部のプロパティに保存する
function saveMindMapData(jsonString) {
  const props = PropertiesService.getScriptProperties();
  props.setProperty('MINDMAP_DATA', jsonString);
  return true;
}

// GAS内部のプロパティから読み込む
function loadMindMapData() {
  const props = PropertiesService.getScriptProperties();
  const data = props.getProperty('MINDMAP_DATA');
  return data || ""; // データがなければ空文字を返す
}
