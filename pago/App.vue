<template>
  <div id='Navigado'>
    <RouterLink to="/">
      <img src="./mater/cabbage.png" class="logo">
    </RouterLink>
    <span>✦</span>
    <RouterLink class="nl" active-class="el" to="/">主頁</RouterLink>
    <RouterLink class="nl" active-class="el" to="/serci">檢索</RouterLink>
    <RouterLink class="nl" active-class="el" to="/pri">關於</RouterLink>
  </div>

  <div id="Vojo">
    <RouterView />
  </div>
</template>

<script setup>
import { ref } from 'vue'

// 切换明暗主题操作。
let ligDark= ref(false)
function LKM(se){
  if(ligDark.value){
    document.documentElement.style.setProperty("--background", "var(--white)")
    document.documentElement.style.setProperty("--color", "#2c2c5")
  }else{
    document.documentElement.style.setProperty("--background", "#232C23")
    document.documentElement.style.setProperty("--color", "var(--white)")
  }
  ligDark.value=!ligDark
}
</script>

<style scoped lang='scss'>
#Navigado{
  writing-mode: tb-rl;
  cursor: default;

  position: fixed;
  left: 0;
  top: 0;
  .logo{
    margin: .15rem;
    width: 1.5rem;
  }
  span{
    color: var(--main-sk2);
  }
  a{color: var(--main-sk2);}
  .nl{
    padding: .3rem .1rem;
    border-radius: .3rem;
    &:hover{
      color: var(--main);
      background-color: var(--main-sk3);
    }
    transition: all 800ms;
  }
}
#Vojo{
  margin-left: 1.8rem;
}

.el{
  color: var(--white)!important;
  background-color: var(--main-sk2);
}
</style>

<style lang="scss">
body{
  margin: 0 auto;
  background-color: var(--background);
  color: var(--color);
  font-size: .9rem;
  line-height: 1.2rem;
}

a{
  text-decoration: none;
  color: var(--link);
  &:hover{
    color: var(--link-sup);
    // background-color: var(--main-sk3);
  }
  transition: background 500ms, color 500ms;
}

dialog{
  border-radius: .3rem;
  border: .3rem solid var(--main-sk2);
  box-shadow: 0 0 1.5rem var(--dark);
  padding: .6rem .3rem .3rem;

  .Ujo{
    color: var(--color);
    font-size: 1rem;
    line-height: 1.2rem;
    .G{
      font-size: 30vh;
      line-height: 33vh;
    }
    @media screen and (max-width: 900px) {
      .G{
        font-size: 9rem;
        line-height: 9.9rem;
      }
      max-width: 80vw;
      font-size: .9rem;
    }
    // max-height: 75vh;
  }

  .into{
    margin-left: .9rem;
  }
  .into-ti{
    font-weight: bold;
  }
  .into-sup{
    color: var(--color-sup);
  }

  .bl{
    display: inline-block;
    padding: .3rem .6rem;
    margin: .1rem;
    color: var(--main);
    border-radius: .3rem;
    background-color: var(--main-sk3);
    cursor: default;
  }
  .borderz{
    background-color: transparent!important;
    border: 1px solid var(--main-sk2);
  }

  // &::backdrop{}
  // &:modal{position: fixed;}

  button{
    appearance: none;
    border-style: none;
    outline: transparent;
    background: transparent;
    background-color: var(--main-sk1);
    padding: .3rem .6rem;
    border-radius: .2rem;
    border: .2rem solid var(--main-sk2);
    &:hover{
      border-color: var(--main-sup);
      background-color: var(--main);
    }
    color: var(--white);
  }
  .close{
    position: absolute;
    right: 0;
    top: 0;
    margin: -1rem;
  }
  .bngup{
    text-align: right;
  }
}
</style>