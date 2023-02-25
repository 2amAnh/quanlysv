<template>
    <a-menu v-model:openKeys="openKeys" v-model:selectedKeys="selectedKeys" mode="inline">
        <a-menu-item key="admin-user">
           <router-link :to="{name:'admin-user'}">
            <span>
                <UserOutlined class="me-1"/> Tai khoan</span>
           </router-link>
        </a-menu-item>

        <a-menu-item key="admin-roles">
           <router-link :to="{name:'admin-roles'}">
            <span><TeamOutlined class="me-1" /> Vai tro</span>
           </router-link>
        </a-menu-item>

        <a-menu-item key="admin-setting">
           <router-link :to="{name:'admin-setting'}">
            <span><SettingOutlined class="me-1" /> cai dat</span>
           </router-link>
        </a-menu-item>
    </a-menu>
</template>
<script>
import { storeToRefs } from 'pinia'
import { UserOutlined , TeamOutlined ,SettingOutlined } from '@ant-design/icons-vue';
import { defineComponent} from 'vue';
import { useMenu } from '../store/use-menu';
export default defineComponent({
    components: {
        UserOutlined,
        TeamOutlined,
        SettingOutlined,
    },
    setup() {
        const store =useMenu();
        

        
        return {
         ...storeToRefs(store)
        };
    },
});
</script>