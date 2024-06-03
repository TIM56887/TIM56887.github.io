<template>
    <div>
        <h1><slot name="title"></slot></h1>
        <h3>■ 概述</h3>
        <div><slot name="describe"></slot></div>
        <h3>■ 申請資格</h3>
        <div><slot name="describe1"></slot></div>
        <h3>■ 開放進度</h3>
        <div><slot name="describe2"></slot></div>
        <h3>■ 申請字元、多語系規則</h3>
        <div><slot name="describe3"></slot></div>
        <h3>■ 年限</h3>
        <div><slot name="describe4"></slot></div>
        <h3>■ 續用、凍結、贖回、刪除</h3>
        <div><slot name="describe5"></slot></div>
        <h3>■ 轉入續用流程</h3>
        <div><slot name="describe6"></slot></div>
        <h3>■ 轉出流程</h3>
        <div><slot name="describe7"></slot></div>
        <h3>■ 權利轉讓流程</h3>
        <div><slot name="describe8"></slot></div>
        <h1 v-html="contentRef"></h1>
    </div>
</template>

<script setup>
    
</script>

<style lang="scss">

</style>