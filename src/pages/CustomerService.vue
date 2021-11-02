<template>
  <n-card title="客服配置"
    :segmented="{
    content: 'hard',
    footer: 'soft'
  }">
      <div class="top">
          <div class="search">
              <div>
                  <n-form
                          inline
                          :label-width="80"
                          :model="formValue"
                          :rules="rules"
                          label-placement="left"
                          ref="formRef"
                  >
                      <n-form-item label="客服名称" path="user.name">
                          <n-input v-model:value="formValue.user.name" placeholder="客服昵称或姓名" />
                      </n-form-item>
                      <n-form-item>
                          <n-button @click="handleSearch" attr-type="button">搜索</n-button>
                      </n-form-item>
                  </n-form>
              </div>
          </div>
          <div>
              <n-button type="primary">添加客服</n-button>
          </div>
      </div>



      <n-divider></n-divider>
      <div class="list">
          <n-pagination  v-model:page="page" :page-count="100" show-quick-jumper show-size-picker
                        :page-sizes="[10, 20, 30, 40]" style="float: right">
              <template #prefix="{ itemCount , startIndex }">
                  共{{totalNum}}项
              </template>
          </n-pagination>
          <n-table :bordered="false" :single-line="false" style="padding:20px 0">
              <thead>
              <tr>
                  <th>Abandon</th>
                  <th>Abormal</th>
                  <th>Abolish</th>
                  <th>...</th>
                  <th>万事开头难</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                  <td>放弃</td>
                  <td>反常的</td>
                  <td>彻底废除</td>
                  <td>...</td>
                  <td>干！我刚才背的是啥</td>
              </tr>
              <tr>
                  <td>放弃</td>
                  <td>反常的</td>
                  <td>彻底废除</td>
                  <td>...</td>
                  <td>干！我刚才背的是啥</td>
              </tr>
              <tr>
                  <td>放弃</td>
                  <td>反常的</td>
                  <td>彻底废除</td>
                  <td>...</td>
                  <td>干！我刚才背的是啥</td>
              </tr>
              <tr>
                  <td>放弃</td>
                  <td>反常的</td>
                  <td>彻底废除</td>
                  <td>...</td>
                  <td>干！我刚才背的是啥</td>
              </tr>
              <tr>
                  <td>放弃</td>
                  <td>反常的</td>
                  <td>彻底废除</td>
                  <td>...</td>
                  <td>干！我刚才背的是啥</td>
              </tr>
              <tr>
                  <td>放弃</td>
                  <td>反常的</td>
                  <td>彻底废除</td>
                  <td>...</td>
                  <td>干！我刚才背的是啥</td>
              </tr>
              <tr>
                  <td>放弃</td>
                  <td>反常的</td>
                  <td>彻底废除</td>
                  <td>...</td>
                  <td>干！我刚才背的是啥</td>
              </tr>
              <tr>
                  <td>放弃</td>
                  <td>反常的</td>
                  <td>彻底废除</td>
                  <td>...</td>
                  <td>干！我刚才背的是啥</td>
              </tr>
              <tr>
                  <td>放弃</td>
                  <td>反常的</td>
                  <td>彻底废除</td>
                  <td>...</td>
                  <td>干！我刚才背的是啥</td>
              </tr>
              <tr>
                  <td>...</td>
                  <td>...</td>
                  <td>...</td>
                  <td>...</td>
                  <td>...</td>
              </tr>
              </tbody>
          </n-table>
          <n-pagination v-model:page="page" :page-count="100" show-quick-jumper show-size-picker
                        :page-sizes="[10, 20, 30, 40]" style="float: right" >
              <template #prefix="{ itemCount , startIndex }">
                  共{{totalNum}}项
              </template>
          </n-pagination>
      </div>
  </n-card>
</template>

<script setup>
import { NCard, NPagination, NForm, NFormItem, NInput, NButton, useMessage, NDivider, NTable } from 'naive-ui'
import { ref } from 'vue'
const page = ref(2)
const formValue = ref({
    user:{
        name:'',
    }
})
const rules = [

]
const message = useMessage()
const totalNum = ref(30)
function handleSearch()
{
    message.info('搜索：'+formValue.value.user.name)
}
</script>

<style scoped>
    .top{
        display: flex;
        justify-content: space-between;
    }
</style>