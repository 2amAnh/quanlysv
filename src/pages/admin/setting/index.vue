<template>
    đây là trang quản lý setting
</template>
<script>
   import { useMenu } from '../../../store/use-menu';
   export default {
    setup(){
        useMenu().onSelectedKeys(["admin-setting"]);
    },
   }
</script>