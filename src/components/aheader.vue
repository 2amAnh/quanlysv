<template>
    <div class="containter-fuild">
        <div class="row text-black " style="background-color:aqua ; paddding:4rem">
             <div class="col-1 d-flex d-sm-none align-items-center justify-content-center">
                <span @click="showDrawer">
                    <font-awesome-icon icon="align-justify" />
                </span>
             </div>
             <div class="col-10 col-sm-9 d-flex  align-items-center justify-content-sm-star">
                <img src="../assets/logo.svg" alt="logo" height="32" width="34" class="ms-3 me-3">
                <span class="d-none d-sm-flex">Quản trị</span>
             </div>
            <div class="col-sm-3 d-none d-sm-flex align-items-center justify-content-sm-end">
                <span>Admin</span>
            </div>
             <div class="col-1 d-flex d-sm-none align-items-center justify-content-center">
                <span @click="showDraweruser">
                    <font-awesome-icon icon="user" /></span>
             </div>
        </div>
    </div>

    <a-drawer
    v-model:visible="visible"
    
    title="Danh muc"
    placement="left"
  >
    <amenu/>
  </a-drawer>
  <a-drawer
    v-model:visible="visible_user"
    
    title="admin"
    placement="right"
  >
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </a-drawer>
</template>

<script>
import { defineComponent, ref } from 'vue';
import amenu from './amenu.vue';
export default defineComponent({
    components: {
        amenu
    },
    setup() {
        const visible = ref(false);
        const visible_user = ref(false);
        const showDrawer = () => {
            visible.value = true;
        };
        const showDraweruser = () => {
            visible_user.value = true;
        };
        return {
            visible,
            visible_user,
            showDrawer,
            showDraweruser,
        };
    },
    
});
</script>