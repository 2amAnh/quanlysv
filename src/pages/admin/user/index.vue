<template>
    <a-card title="Tài Khoản" style="width: 100%">
        <div class="row mb-3">
            <div class="col-12 d-flex justify-content-end">
                <a-button type="primary">
                    <router-link :to="{name:'admin-user-create'}">
                        <font-awesome-icon icon="plus" />
                    </router-link>
                    
                </a-button>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <a-table :dataSource="users" :columns="columns" :scroll="{ x: 576 }">
                    <template #bodyCell="{ column, index, record }">
                        <template v-if="column.key === 'index'">
                            <span>{{ index + 1 }}</span>
                        </template>

                        <template v-if="column.key === 'status'">
                            <span v-if="record.status_id==1 " class="text-primary">{{ record.status }}</span>
                            <span v-else-if="record.status_id==2 " class="text-danger">{{ record.status }}</span>
                        </template>
                        <template v-if="column.key === 'action'">
                            <router-link :to="{name: 'admin-user-edit', params:{id: record.id }}">
                                <a-button type="primary" class="me-0 me-sm-2 mb-2 mb-sm-0">
                                    <font-awesome-icon icon="pen-to-square" />{{ record.id }}
                                </a-button>
                            </router-link>
                            <a-button  @click="destroy(record.id)">
                                <font-awesome-icon icon="trash" style="border: none" />
                            </a-button>
                        </template>
                    </template>
                </a-table>
            </div>
        </div>
    </a-card>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { useMenu } from '../../../store/use-menu';
export default defineComponent({
    setup() {
        useMenu().onSelectedKeys(["admin-user"]);

        const users = ref([]);
        const columns = [
            {
                title: "stt",
                key: "index",
            },
            {
                title: "avatar",
                key: "avatar",
            },
            {
                title: "Họ và tên",
                dataIndex: "name",
                key: "name",
            },
            {
                title: "Tài khoản",
                dataIndex: "usename",
                key: "usename",
            },
            {
                title: "Phòng ban",
                dataIndex: "department",
                key: "department",
            },
            {
                title: "Trạng thái",
                dataIndex: "status",
                key: "status",

            }, {
                title: "vai trò",
                key: "roles",
                responsive: ["sm"],
                //repon giup an tren dthoai
            },
            {
                title: "công cụ",
                key: "action",
                fixed: "right",
                //fixed giup giu cho dung yen khi di chuyen 
            },
        ];

        const getUser = () => {
            axios
                .get('http://127.0.0.1:8000/api/users')
                .then(function (response) {
                    users.value = response.data;
                })
                .catch(function (error) {
                    console.log(error);
                });

        };
        getUser();
        const destroy =(id)=>{
            alert('Bạn có muốn xóa : ${id}')
        }

        return {
            users,
            columns,
            destroy
        }
    },
});
</script>;