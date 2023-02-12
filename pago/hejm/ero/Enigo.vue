<template>
  <div id='Envo'>
    <input type="text" placeholder="請輸入字、詞、短句。" :value="sval" @keyup.enter="goz($event)" ref="qvl">
    <button @click="goz">
      <img src="@/mater/Cabbage.png">
    </button>
  </div>

  <!--
    输入框操作反馈（输入为长句时检测内容是否为 汉字及蕃、女书字符集，如是en则默认为译音搜索，如是汉字则译意、反切搜索，如是音标则拟音）
    ENTER 最终操作为路由跳转操作（向 serci.page 提供一个object
    {
      q: sval,
      ob: define(all): string, (F,P,En,M)
    }
   -->

  <div id="KB-Dash">
    <!-- Dialog & hidden/view -->
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router';

const qvl=ref(null)

const Po= defineProps({
  sval: [String, Number],
})

const Ex= defineEmits(['update:sval'])


const Rr= useRouter()
function goz(e){
  let ev= e.target.value || qvl.value.value
  // Ex('update:sval', ev)

  // Rr.push({
  //   path: '/q',
  //   query: {
  //     q: 'a1129'
  //   }
  // })

  let t= qvl.value.value
  let rex= new RegExp("[A-Za-z]+")

  // let jug= rex.test(t)
  // let jug= t.replace(/[^A-Za-z]/ig, "")
  // let jug= t.match(/[^\d]/g, "@")
  let jug= t.replace(/[^\d]/g, '@')
  console.log(891, jug)
}
</script>

<style scoped lang='scss'>
#Envo{
  border: 1px solid var(--main-sk3);
  border-radius: .3rem;
  padding: .3rem;
  &:hover{
    border-color: var(--main);
  }

  input,
  button{
    appearance: none;
    border-style: none;
    outline: transparent;
    background: transparent;
    font-size: 1.8rem;
    line-height: 1.8rem;
    font-family: KaiTi;
    padding: .6rem .9rem;
    display: inline-block;
  }
  input{
    &::placeholder{
      color: var(--main-sk2);
    }
    flex: 1 0 auto;
    color: var(--main);
  }
  button{
    border-radius: 0 .2rem .2rem 0;
    background-color: var(--main-sk1);
    img{
      width: 1.8rem;
    }
    &:hover{
      background-color: var(--main-sup);
    }
    &:active{
      background-color: var(--main);
    }
    flex: 0 1 auto;
  }

  min-width: 75vw;
  width: 75vw;
  display: flex;
  margin: 3rem auto 1rem;

  @media screen and (max-width: 1022px){
    min-width: 90vw;
    width: 90vw;
    // margin: auto;
    input,
    button{
      font-size: 1.2rem;
      line-height: 1.2rem;
    }
    button{
      img{width: 1.2rem;}
    }
  }
  background-color: #fff;
}

</style>