<template>
  <form @submit.prevent="createUser()">
    <a-card title="Tao moi tai khoan" style="width: 100%">
        <div class="row">
            <div class="col-12 col-sm-4">
                <div class="row">
                    <div class="col-12 d-flex justify-content-center mb-3">
                        <a-avatar shape="square" :size="200">
                            <template #icon>
                                <img src="../../../assets/anh.jpg.jpg" alt="Avatar">
                            </template>
                        </a-avatar>
                    </div>
                    <div class="col-12 d-flex justify-content-center">
                        <a-button type="primary">
                            <font-awesome-icon icon="plus" class="me-2" />
                            <span> Chọn ảnh</span>
                        </a-button>
                    </div>
                </div>
            </div>
            <div class="col-12 col-sm-8">
                <div class="row mb-3">
                    <div class="col-12 col-sm-3 text-start text-sm-end">
                        <lable>
                            <span class="text-danger">*</span>
                            <span
                            :class="{
                                'text-danger': errors.status_id
                            }">Tình Trạng</span>
                        </lable>
                    </div>
                    <div class="col-12 col-sm-5">
                        <a-select 
                        show-search 
                        placeholder="Tình Trạng" 
                        style="width: 100%" 
                        :options="user_status"
                        :filter-option="filterOption"
                        allow-clear
                        v-model:value="status_id"
                        :class="{
                                'select-danger': errors.status_id
                            }"
                          
                    >  </a-select>
                    <div class="w-100"></div>
                    <small v-if="errors.status_id" class="text-danger">{{ errors.status_id[0] }}</small>
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-12 col-sm-3 text-start text-sm-end">
                        <lable>
                            <span class="text-danger">*</span>
                            <span
                            :class="{
                                'text-danger': errors.usename
                            }">Tên tài khoản</span>
                            
                        </lable>
                    </div>
                    <div class="col-12 col-sm-5">
                        <a-input
                         placeholder="Tên tài khoản" 
                        allow-clear
                        v-model:value="usename"
                        :class="{
                                'input-danger': errors.usename
                            }"
                         />
                         <div class="w-100"></div>
                    <small v-if="errors.usename" class="text-danger">{{ errors.usename[0] }}</small>
                    
                    </div>
                    
                </div>
                <div class="row mb-3">
                    <div class="col-12 col-sm-3 text-start text-sm-end">
                        <lable>
                            <span class="text-danger">*</span>
                            <span
                            :class="{
                                'text-danger': errors.name
                            }">Họ và tên</span>
                        </lable>
                    </div>
                    <div class="col-12 col-sm-5">
                        <a-input placeholder="Họ và tên" allow-clear 
                        v-model:value="name"
                        :class="{
                                'input-danger': errors.name
                            }"
                        
                        />
                        <small v-if="errors.name" class="text-danger">{{ errors.name[0] }}</small>
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-12 col-sm-3 text-start text-sm-end">
                        <lable>
                            <span class="text-danger">*</span>
                            <span
                            :class="{
                                'text-danger': errors.email
                            }">Email</span>
                        </lable>
                    </div>
                    <div class="col-12 col-sm-5">
                        <a-input placeholder="Email" allow-clear 
                        v-model:value="email"
                        :class="{
                                'input-danger': errors.email
                            }"
                        />
                        
                            <small v-if="errors.email" class="text-danger">{{ errors.email[0] }}</small>
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-12 col-sm-3 text-start text-sm-end">
                        <lable>
                            <span class="text-danger">*</span>
                            <span
                            :class="{
                                'text-danger': errors.department_id
                            }">Phòng ban</span>
                        </lable>
                    </div>
                    <div class="col-12 col-sm-5">
                        <a-select 
                        show-search 
                        placeholder="Phòng ban" 
                        style="width: 100%" 
                        :options="department"
                        :filter-option="filterOption"
                        allow-clear
                        v-model:value="department_id"
                        :class="{
                                'select-danger': errors.department_id
                            }"

                        ></a-select>
                        <div class="w-100"></div>
                    <small v-if="errors.department_id" class="text-danger">{{ errors.department_id[0] }}</small>
                       
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-12 col-sm-3 text-start text-sm-end">
                        <lable>
                            <span class="text-danger">*</span>
                            <span
                            :class="{
                             'text-danger': errors.password }"   
                         >Mật khẩu</span>
                        </lable>
                    </div>
                    <div class="col-12 col-sm-5">
                        <a-input-password placeholder="Mật khẩu" 
                        allow-clear
                        v-model:value="password" 
                        :class="{
                          'input-danger': errors.password
                                }"
                    />
              
              <div class="w-100"></div>

              <small v-if="errors.password" class="text-danger">{{ errors.password[0] }}</small>
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-12 col-sm-3 text-start text-sm-end">
                        <lable>
                            <span class="text-danger">*</span>
                            <span
                            >Xác nhận mật khẩu</span>
                        </lable>
                    </div>
                    <div class="col-12 col-sm-5">
                        <a-input-password placeholder="Xác nhận mật khẩu" allow-clear
                        v-model:value="password_confirmation" />
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12 d-grid d-sm-flex justify-content-sm-end mx-auto">
                <a-button class="mb-3 mb-sm-0 me-0 me-sm-3">
                    <router-link :to="{ name: 'admin-user' }">
                        <span>Hủy</span>
                    </router-link>
                </a-button>
                <a-button class="text-primary" html-type="submit">
                    Lưu
                </a-button>
            </div>
        </div>
    </a-card>
  </form>
</template>

<script>
import axios, { Axios } from 'axios';
import { message } from 'ant-design-vue';
import {useRouter} from 'vue-router';
import { defineComponent , ref , reactive , toRefs } from 'vue';
import { useMenu } from '../../../store/use-menu';
export default defineComponent({
    setup() {
        useMenu().onSelectedKeys(["admin-user"]);

        const router = useRouter();
        const user_status = ref([]);
        const department = ref([]);
        const users= reactive({
            usename: "",
            name:"",
            email:"",
            password:"",
            password_confirmation:"",
            department_id:[],
            status_id:[]

        });
        const errors=ref({});
        const getUserCreate = () => {
            axios.get("http://127.0.0.1:8000/api/users/create")
                .then((response) => {

                    user_status.value = response.data.user_status;
                    department.value = response.data.department;
                })
                .catch((error) => {
                    console.log(error);
                });


          
        };
        const filterOption = (input, option) => {
      return option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0;
        };
        const createUser= ()=>{
            axios.post("http://127.0.0.1:8000/api/users", users)
            .then((response)=>{ 
                if(response.status==200){
                    message.success('Tạo mới thành công');
                    router.push({name:"admin-user"});
                }

            })
            .catch((error)=>{
                
                errors.value = error.response.data.errors;

            });
        }
        getUserCreate();
            return {
                user_status,
                department,
                errors,
                ...toRefs(users),
                createUser,
                filterOption

            }
    },
});
</script>
<style>
.select-danger{
    border: 1px solid red;
}
.input-danger{
    border-color:  red;
}
</style>
