<template>
    <div class="silde-down">
        <div class="title-wrapper">
            <div class="left">
                <span class="icon-back"></span>
            </div>
            <div class="right">
                <div class="icon-wrapper">
                    <span class="icon-shelf"></span>
                </div>
                <div class="icon-wrapper">
                    <span class="icon-cart"></span>
                </div>
                <div class="icon-wrapper">
                    <span class="icon-more"></span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
    }
</script>
<style lang='scss' rel="stylesheet/scss">
    @import '../../assets/styles/global';
    .title-wrapper{
        position: absolute;
        top: 0;
        left: 0;
        z-index: 101;
        display: flex;
        width: 100%;
        height: px2rem(48);
        background: white;
        box-shadow: 0 px2rem(8) px2rem(8) rgba(0, 0, 0, .15);
        font-size: px2rem(20);
        .left{
            @include center;
            flex: 0 0 px2rem(60);
            margin-left: 15px;
        }
        .right{
            flex: 1;
            flex: 1;
            display: flex;
            justify-content: flex-end;
            .icon-wrapper {
                @include center;
                flex: 0 0 px2rem(40);
                .icon-shelf, .icon-cart{
                    font-size: px2rem(22);
                }
            }
        }
    }
</style>
