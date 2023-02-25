<template>đây là trang quản lý Roles </template>
<script>
   import { useMenu } from '../../../store/use-menu';
   export default {
    setup(){
        useMenu().onSelectedKeys(["admin-roles"]);
    },
   }
</script>