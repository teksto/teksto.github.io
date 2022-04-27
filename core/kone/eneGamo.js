/**
 * 关于搜索内容取值范围的控制。
 * 1、[0x17000, 0x18aff]  西夏文（含部件（未包含补充部分）
 * 2、[0x1b170, 0x1b2ff]  女书
 * 3、[0x18d00, 0x18cff]  契丹小字
 * 4、[0xa840, 0xa87f]    八思巴字母
 * 5、[0x4e00, 0x9fff]    汉字
 * 6、[0x0000, 0x007f]    拉丁字母
 */

export default function ENE(srt){
  // 正则式集。
  // const regTg= /\p{Script=Tangut}+/gu
  // const regNv= /\p{Script=Nushu}+/gu
  // Unicode 字符集名称 http://www.unicode.org/Public/UNIDATA/UnicodeData.txt
  // 契丹、女真 字符集不确定性不考虑，Unicode14补充的西夏文不考虑，西夏文部件部分不考虑。

  // 英文提取。
  if( RegExp(/^[a-zA-Z]/i, "u").test(srt) ){
    return {lang: "en", daj: srt.match(/\s*[a-zA-Z]/gi).join('').split(" ")}
  }
  // 中文提取。
  if( RegExp(/^[\u4e00-\u9fff]/g,'u').test(srt) ){
    return {lang: "zh", daj: srt.match(/[\u4e00-\u9fff]/g)}
  }
  // 八思巴字母。
  if( RegExp(/^[\ua840-\ua87f]/g,'u').test(srt) ){
    return {lang: "ph", daj: srt.match(/[\ua840-\ua87f]/g)}
  }
  // 女书。
  if( RegExp("[\u{1b170}-\u{1b2ff}]","u").test(srt) ){
    return {lang: "nv", daj: srt.match(/[\u{1b170}-\u{1b2ff}]/gu)}
  }
  // 西夏文。
  if( RegExp("[\u{17000}-\u{18aff}]","u").test(srt) ){
    return {lang: "tg", daj: srt.match(/[\u{17000}-\u{18aff}]/gu)}
  }

}