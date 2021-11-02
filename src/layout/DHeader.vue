<template>
    <n-page-header class="header">
        <template #title>
            <a href="https://anyway.fm/" style="text-decoration: none; color: inherit;"
            >Anyway.FM</a
            >
        </template>
        <template #avatar>
            <n-avatar
                    src="https://cdnimg103.lizhi.fm/user/2017/02/04/2583325032200238082_160x160.jpg"
            />
        </template>
        <div align="flex-end" style="display: flex;align-items: center;margin-top: 0">
            <n-avatar
                    round
                    size="small"
                    style="margin: 0 10px"
                    src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
            />
            <n-space>
                <n-dropdown :options="options" placement="bottom-start"  @select="handleSelect">
                    <n-button  style="padding: 0 4px">
                        Admin
                    </n-button>
                </n-dropdown>
            </n-space>
        </div>
    </n-page-header>

</template>


<script setup>
import { h } from 'vue'
import { NImage, NPageHeader, NGi, NGrid, NStatistic, NBreadcrumb, NBreadcrumbItem, NAvatar, NSpace, NButton, NDropdown, NIcon} from 'naive-ui'
import { useLoadingBar, useMessage } from 'naive-ui'
import {
    PersonCircleOutline as UserIcon,
    Pencil as EditIcon,
    LogOutOutline as LogoutIcon
} from '@vicons/ionicons5'
const renderIcon = (icon) => {
    return () => {
        return h(NIcon, null, {
            default: () => h(icon)
        })
    }
}
const options =  [
    {
        label: '用户资料',
        key: 'profile',
        icon: renderIcon(UserIcon)
    },
    {
        label: '编辑用户资料',
        key: 'editProfile',
        icon: renderIcon(EditIcon)
    },
    {
        label: '退出登录',
        key: 'logout',
        icon: renderIcon(LogoutIcon)
    }
    ]
const message = useMessage()
const loadingBar = useLoadingBar()
function handleSelect(key) {
    switch (key) {
        case 'profile':
            message.info('用户资料')
            break
        case 'editProfile':
            message.info('编辑用户资料')
            break
        case 'logout':
            loadingBar.start();
            setTimeout(()=>{
                loadingBar.finish();
            }, 2000)
    }
}
</script>

<style scoped>
 .header{
     padding: 0 32px;
     display: flex;
     align-items: center;
     justify-content: space-between;
     height: 60px;
     border-bottom: 1px solid  rgb(239, 239, 245);
 }
 :deep(.n-page-header-content){
     margin-top: 0;
 }
</style>