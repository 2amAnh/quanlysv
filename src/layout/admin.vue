<template>
    <aheader />
    <div class="contianter-fluid mt-3">
        <div class="row">
            <div class="col-sm-3 d-none d-sm-flex">
                <a-list bordered style=" width: 100%">
                <amenu/>
                    <template #header>
                        <div>Bang dieu khien</div>
                    </template>
                    
                </a-list>
            </div>
            <div class=" col-sm-9">
                <router-view></router-view>
            </div>
        </div>
    </div>

</template>
<script>
import aheader from '../components/aheader.vue';
import amenu from '../components/amenu.vue';
export default {
    components: {
        amenu,
        aheader
    }
}
</script>
