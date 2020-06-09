<template>
  <transition name="slide-up">
    <div class="setting-wrapper" v-show="menuVisible && settingVisible === 2">
      <div class="setting-process">
        <div class="read-time-wrapper">
          <span class="read-time-text">111</span>
          <span class="icon-forward"></span>
        </div>
        <div class="process-wrapper">
          <div class="progress-icon-wrapper">
            <span class="icon-back" @click="prevSection()"></span>
          </div>
          <input type="range"
                 class="progress"
                 max="100"
                 step="1"
                 @change="onProgressChange($event.target.value)"
                 @input="onProgressInput($event.target.value)"
                 :value="progress"
                 :disabled="!bookAvailable"
                 ref="progress"
          >
          <div class="progress-icon-wrapper">
            <span class="icon-forward" @click="nextSection()"></span>
          </div>
        </div>
        <div class="text-wrapper">
          <span>{{bookAvailable ? progress + '%' : '加载中...'}}</span>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { ebookMixin } from '../../utils/mixin'

export default {
  mixins: [ebookMixin],
  methods: {
    // 松手后调用的方法
    onProgressChange (value) {

    },
    // 拖动过程中调用的方法
    onProgressInput (value) {
      console.log(value)
    },
    prevSection () {

    },
    nextSection () {

    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
@import "../../assets/styles/global";
.setting-wrapper {
  position: absolute;
  bottom: px2rem(48);
  left: 0;
  width: 100%;
  z-index: 109;
  height: px2rem(90);
  box-shadow: 0 px2rem(-8) px2rem(8) rgba(0, 0, 0, .15);
  .setting-process {
    position: relative;
    width: 100%;
    height: 100%;
    .read-time-wrapper {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: px2rem(40);
      @include center;
      font-size: px2rem(12);
    }
    .process-wrapper {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      @include center;
      padding: px2rem(15);
      box-sizing: border-box;
      .progress {
        flex: 1;
        width: 100%;
        -webkit-appearance: none;
        height: px2rem(2);
        background: -webkit-linear-gradient(#5d6268, #5d6268) no-repeat, #b4b5b7;
        background-size:0 100%;
        margin: 0 px2rem(10);
        &:focus {
          outline: none;
        }
        &::-webkit-slider-thumb {
          -webkit-appearance: none;
          height: px2rem(20);
          width: px2rem(20);
          border-radius: 50%;
          background: #ceced0;
          box-shadow: 0 px2rem(4) px2rem(6) 0 rgba(0, 0, 0, .15);
          border: none;
        }
      }
      .progress-icon-wrapper {
        flex: 0 0 px2rem(22);
        font-size: px2rem(22);
        @include center;
      }
    }
    .text-wrapper {
      position: absolute;
      left: 0;
      bottom: px2rem(5);
      width: 100%;
      font-size: px2rem(12);
      padding: 0 px2rem(15);
      box-sizing: border-box;
      @include center;
    }
  }
}
</style>