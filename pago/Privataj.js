/**
 * 指定范围随机数。
 * @param {Number} max：默认最大值。
 * @param {Number} min：最小值，默认为0。
 * @returns 随机值。
 */
function hazarda(max=999999999, min=0){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * 处理西夏字典中的词性缩写。
 * @param {String} t: 侍处理字符串。
 * @returns 加工后的字符串。
 */
function parolparto(t){
  let vortoj= {
    n: '名詞',
    v: '動詞',
    l: '漢語借詞',
    t: '譯音',
    a: '形容詞',
    d: '副詞',
    m: '數詞',
    q: '量詞',
    e: '助詞',
    p: '代詞',
    r: '介詞',
    c: '連詞',
    s: '嘆詞'
  }
  return t.replace(/[nvltadmqeprcs]/g, e=> vortoj[e])
}

// 判断字体是否加载。
function jugFontface(nomo='TangutSeri', urolo='url(./static/res/font/NotoSerifTangut-Regular.woff)'){
  if (window.FontFace) {
    var fontFile = new FontFace(nomo, urolo);

    fontFile.load().then(function () {
      console.log('成功');
    }, function (err) {
      console.log('失败：' + err);
    });
  }
}

/**
 * 判断是否超过时间戳。
 * @param {Number} tp：时间戳。
 * @returns 输出float值。
 */
function jugDaily(tp){
  const ol= new Date
  const hi= new Date(tp)

  return ol.getDate() === hi.getDate()? false:true
}

// 临时时间戳。
function TP(e){
  // return new Date().getTime()
  return Date.parse(new Date)
}

export {
  hazarda,
  parolparto,
  TP,
  jugDaily
}