<!--
 * @Descripttion: 
 * @version: 
 * @Author: shaye
 * @Date: 2023-03-30 09:43:06
 * @LastEditors: shaye
 * @LastEditTime: 2023-03-30 20:26:54
-->
<template>
    <div class="user_container">
        <div class="user_manage">
            <div>
                <el-button :icon="Plus" type="primary" @click="addUser">新增</el-button>
                <el-dialog v-model="dialog_addUser" title="增加用户">
                    <el-form :model="form_addUser" label-position="right" label-width="100px">
                        <el-form-item label="姓名">
                            <el-input v-model="form_addUser.name" />
                        </el-form-item>
                        <el-form-item label="性别">
                            <el-select v-model="form_addUser.sex" placeholder="请输入性别">
                                <el-option label="男" :value="1" />
                                <el-option label="女" :value="0" />
                            </el-select>
                        </el-form-item>
                        <el-form-item label="出生日期">
                            <el-date-picker v-model="form_addUser.birth" type="date" placeholder="请选择出生日期"
                                value-format="YYYY-MM-DD" />
                        </el-form-item>
                        <el-form-item label='年龄'>
                            <el-input disabled v-model="age"></el-input>
                        </el-form-item>
                        <el-form-item label='地址'>
                            <el-input v-model="form_addUser.address"></el-input>
                        </el-form-item>
                    </el-form>
                    <template #footer>
                        <span class="dialog-footer">
                            <el-button @click="dialog_addUser = false">取消</el-button>
                        <el-button type="primary" @click="addUser_sure">
                            添加
                        </el-button>
                    </span>
                    </template>
                </el-dialog>
            </div>
            <!-- <div class="manage_button">
                                        <el-input placeholder="请输入"></el-input>
                                        <el-button type="primary">搜索</el-button>
                                        <el-button>复原</el-button>
                                    </div> -->
        </div>
        <div>
            <el-table :data="tableData.tableData.slice((currentPage - 1) * pageSize, currentPage * pageSize)"
                style="width: 100%" fit>
                <!-- <el-table-column prop="id" hidden/> -->
                <el-table-column type="index" label="序号" width="70" />
                <el-table-column prop="name" label="姓名" width="120" />
                <el-table-column prop="sex" label="性别" width="70" />
                <el-table-column prop="age" label="年龄" width="70" />
                <el-table-column prop="birth" label="出生日期" sortable width="120" />
                <el-table-column prop="address" label="地址" />
                <el-table-column label="操作" width="180">
                    <template #default="scope">
                        <el-button type="primary" size="small" @click="editUser(scope.row)">编辑</el-button>
                        <el-button type="danger" size="small" @click="deleteUser(scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination align='center' background @size-change="handleSizeChange" @current-change="handleCurrentChange"
                :current-page="currentPage" :page-sizes="[1, 5, 10, 20]" :page-size="pageSize"
                layout="total, sizes, prev, pager, next, jumper" :total="tableData.tableData.length">
            </el-pagination>
            <!-- 编辑对话框 -->
            <el-dialog v-model="dialog_editUser" title="编辑用户信息">
                <el-form :model="form_editUser" label-position="right" label-width="100px">
                    <el-form-item v-show="false">
                        <el-input v-model="form_editUser.id" />
                    </el-form-item>
                    <el-form-item label="姓名">
                        <el-input v-model="form_editUser.name" />
                    </el-form-item>
                    <el-form-item label="性别">
                        <el-select v-model="form_editUser.sex" placeholder="请输入性别">
                            <el-option label="男" :value="1" />
                            <el-option label="女" :value="0" />
                        </el-select>
                    </el-form-item>
                    <el-form-item label="出生日期">
                        <el-date-picker v-model="form_editUser.birth" type="date" placeholder="请选择出生日期"
                            value-format="YYYY-MM-DD" />
                    </el-form-item>
                    <el-form-item label='年龄'>
                        <el-input disabled v-model="age_editUser"></el-input>
                    </el-form-item>
                    <el-form-item label='地址'>
                        <el-input v-model="form_editUser.address"></el-input>
                    </el-form-item>
                </el-form>
                <template #footer>
                    <span class="dialog-footer">
                        <el-button @click="dialog_editUser = false">取消</el-button>
                        <el-button type="primary" @click="editUser_sure">
                            修改
                        </el-button>
                    </span>
                </template>
            </el-dialog>
        </div>
    </div>
</template>

<script setup>
import { Plus } from "@element-plus/icons-vue";
import { reactive, onMounted, ref, computed } from "vue";
import api from "../../public/api";
import { sexMap } from "../../public/utils";

/*table的数据*/
const tableData = reactive({
    tableData: []
})
/*table的数据*/

/*分页有关数据*/
const pageSize = ref(5)
const currentPage = ref(1)
/*分页有关数据*/

/* 添加用户有关数据*/
const dialog_addUser = ref(false)
const form_addUser = reactive({
    name: '',
    sex: 0,
    birth: '',
    address: ''
})
//初始化将出生日期设置为默认值
form_addUser.birth = '2000-01-01'
//根据出生日期计算年龄
const age = computed(() => {
    console.log(form_addUser.birth)
    let birthYear = new Date(form_addUser.birth).getFullYear()
    console.log(birthYear)
    let year = new Date().getFullYear()
    return year - birthYear
})
//添加用户的方法
function addUser() {
    dialog_addUser.value = true
}
//确定添加用户
function addUser_sure() {
    api.addNewUser({
        name: form_addUser.name,
        sex: form_addUser.sex,
        birth: form_addUser.birth,
        address: form_addUser.address,
        age: age.value
    }).then(res => {
        if (res.data.status == 200) {
            getUsers()
            dialog_addUser.value = false
            form_addUser.name = ''
            form_addUser.birth = '2000-01-01'
            form_addUser.address = ''
        }
    })
}
/* 添加用户有关数据*/

/*修改用户信息的方法*/
const dialog_editUser = ref(false)
const form_editUser = reactive({
    id: '',
    name: '',
    sex: 0,
    birth: '',
    address: ''
})
//点击修改用户
function editUser(row) {
    console.log(row)
    form_editUser.id = row.id
    form_editUser.birth = row.birth
    form_editUser.sex = row.sex == '男' ? 1 : 0
    form_editUser.name = row.name
    form_editUser.address = row.address
    dialog_editUser.value = true
}
//计算属性-年龄
const age_editUser = computed(() => {
    let birthYear = new Date(form_editUser.birth).getFullYear()
    let year = new Date().getFullYear()
    return year - birthYear
})
//确定修改用户信息
function editUser_sure() {
    console.log(form_editUser.address)
    api.editUserInfo({
        id: form_editUser.id,
        name: form_editUser.name,
        sex: form_editUser.sex,
        birth: form_editUser.birth,
        address: form_editUser.address,
        age: age_editUser.value
    }).then(res => {
        if (res.data.status == 200) {
            getUsers()
            dialog_editUser.value = false
        }
    })
}
/*修改用户信息的方法*/
function deleteUser(row) {
    api.deleteUser(row.id).then(res => {
        if (res.data.status == 200) {
            getUsers()
        }
    })
}




//分页有关方法
function handleSizeChange(val) {
    pageSize.value = val
    currentPage.value = 1
}

function handleCurrentChange(val) {
    currentPage.value = val
}

function getUsers() {
    api.getAllUsers().then(res => {
        if (res.data.status == 200) {
            console.log(res.data.data)
            tableData.tableData = res.data.data
            tableData.tableData.forEach(data => {
                data.sex = sexMap[data.sex]
            })
        }
    })
}

onMounted(() => {
    getUsers()
})


</script>

<style  scoped>
.user_container {
    width: 100%;
    height: 100%;
}

.user_manage {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.manage_button {
    display: flex;
    justify-content: space-evenly;
}

.el-input {
    margin-right: 8px;
}

.el-pagination {
    margin-top: 10px;
}
</style>
