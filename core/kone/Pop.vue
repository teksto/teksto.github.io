<template>
  <div class='Pop-kone' :lang="len">
    <span>{{tt}}</span>

    <div class="pop-ujo">

      <div class="pop-exc--add">📌</div>

      <div class="pop-kor">
        <div class="pop-kor--big">{{tt}}</div>
        <div v-if="jugDet" class="pop-kor--enh">
          <div class="pop-row">
            <ruby>{{djDet.K}}<rt>四角码</rt></ruby>
            <ruby>{{djDet.Rx}}<rt>萱拼</rt></ruby>
            <ruby>{{djDet.U}}<rt>Unicode</rt></ruby>
          </div>
          <div class="pop-row">
            <b>拟音：</b>
            <span>
              <p><span v-for="izp in djDet.P">{{izp}}</span></p>
              <p><span v-for="izf in djDet.F">{{izf}}</span></p>
            </span>
          </div>
          <div class="pop-row">
            <b>释义：</b>
            <span>
              <p><span v-for="izm in djDet.M1">{{izm}}</span></p>
            </span>
          </div>
          <div class="pop-row">{{djDet.E}}</div>
        </div>
        <label @click="jugDet=!jugDet, findNur(tt)">…</label>
      </div>

      <div class="pop-hron"></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
defineProps(['len','tt'])

let jugDet= ref(false)
let djDet= ref([])

import Fuse from 'fuse.js'
import { TangutDict as Dz } from '../mate/daj/Tangut_dict_v21'
const fuseNur= new Fuse(Dz, {
  threshold: .1,
  keys: ['U']
})
function findNur(e){
  const uid= e.codePointAt().toString(16)
  djDet.value= fuseNur.search(uid)[0].item;
  // console.log(99,  djDet.value)
}
</script>

<style scoped lang='scss'>
.Pop-kone{
  position: relative;
  display: inline-block;
  span{
    margin: .3rem .1rem;
  }
  .pop-ujo{
    top: 0;
    left: 50%;
    position: absolute;

    z-index: 990;
    opacity: .1;
    transform: translate(-50%, -50%) scale(0);
    transition: transform 500ms, opacity 300ms;

    .pop-kor{
      box-shadow: 0 0 .9rem var(--dark);
      background-color: var(--dark);
      border-radius: .3rem;
      color: var(--white);
      max-width: 300px;
      padding: .6rem;
      font-size: .9rem;
      line-height: 1.2rem;
      text-align: center;

      // overflow: auto;
      // &::-webkit-scrollbar{display: none;}

      label{
        cursor: pointer;
        color: var(--dark-lw);
      }
      .pop-kor--big{
        font-size: 3rem;
        line-height: 3rem;
        margin-top: .9rem;
      }
      .pop-kor--enh{
        margin: .3rem auto;
        color: var(--dark-ls);
      }
    }
    // .pop-det{}
  }

  *:focus + .pop-ujo,
  &:hover .pop-ujo{
    display: block;
    opacity: 1;
    transform: translate(-50%, -101%) scale(1);
  }
  cursor: default;
}

.pop-row{
  text-align: left;
  // white-space: nowrap;
  display: flex;
  ruby{
    flex: 1 0 auto;
    padding: .15rem;
  }
  b, span{flex: 1 0 auto;}
  span > p{margin: 0;}
}
.pop-hron{
  width: 0;
  height: 0;
  border-left: .3rem solid transparent;
  border-right: .3rem solid transparent;
  border-top: .6rem solid var(--dark);
  margin: auto;
  margin-top: -.1rem;
}
.pop-exc--add{
  position: absolute;
  right: -.5rem;
  top: -.5rem;
  padding: .15rem;
  font-size: .9rem;
  line-height: 1.2rem;
  border-radius: 1rem;
  border: 1px solid var(--gray);
  background-color: var(--bng);
  &:hover{background-color: var(--white);}
  transition: background-color 800ms;
}
</style>