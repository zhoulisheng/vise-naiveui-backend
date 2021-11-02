<template>
    <div class="master">
        <DHeader></DHeader>
        <n-layout has-sider>
            <n-layout-sider
                    bordered
                    collapse-mode="width"
                    :collapsed-width="64"
                    :width="240"
                    :collapsed="collapsed"
                    show-trigger
                    @collapse="collapsed = true"
                    @expand="collapsed = false"
            >
                <n-menu
                        :collapsed="collapsed"
                        :collapsed-width="64"
                        :collapsed-icon-size="22"
                        :options="menuOptions"
                        :render-label="renderMenuLabel"
                        :render-icon="renderMenuIcon"
                />
            </n-layout-sider>
            <n-layout class="content">
                <n-scrollbar>
                    <n-layout-content content-style="padding: 24px;">
                        <router-view></router-view>
                    </n-layout-content>
                </n-scrollbar>
            </n-layout>
        </n-layout>
        <div class="footer">
            <div> 版权所有 ©www.jingjiu.com</div>
            <div>联系：jingjiu@gmail.com</div>
        </div>
    </div>
</template>

<script setup>
    import { ref, h } from 'vue'
    import { RouterLink } from 'vue-router'
    import { router } from '../route'
    import DHeader from './DHeader.vue'
    import { NLayout, NLayoutSider, NLayoutContent, NLayoutHeader, NLayoutFooter, NScrollbar, NMenu, NIcon, useLoadingBar } from 'naive-ui'
    import {
        DashboardFilled,
        CustomerServiceFilled,
        ShoppingFilled
    } from '@vicons/antd'
    import {
        Pricetag
    } from '@vicons/ionicons5'
    function renderIcon (icon) {
        return () => h(NIcon, null, { default: () => h(icon) })
    }
    function  renderMenuLabel (option) {
        if(typeof option.label == 'string')
            return option.label
        return option.label();
    }
    function renderMenuIcon (option) {
        return option.icon()
    }
    const collapsed = ref(true)
    const loadingBar = useLoadingBar()
    router.beforeEach((to, from, next) => {
        loadingBar.start()
        next()
    })
    router.afterEach((to, from) => {
        loadingBar.finish()
    })
    const menuOptions = [
        {
            label: () =>
                h(
                    RouterLink,
                    {
                        to: {
                            name: 'dashboard',
                            params: {
                                lang: 'zh-CN'
                            }
                        }
                    },
                    { default: () => '仪表盘' }
                ),
            key: 'dashboard',
            icon: renderIcon(DashboardFilled)
        },
        {
            label: () =>
                h(
                    RouterLink,
                    {
                        to: {
                            name: 'customer-service',
                            params: {
                                lang: 'zh-CN'
                            }
                        }
                    },
                    { default: () => '客服' }
                ),
            key: 'customer-service',
            icon: renderIcon(CustomerServiceFilled)
        },
        {
            label: '商品',
            key: 'products',
            icon: renderIcon(ShoppingFilled),
            children:[
                {
                    label: () =>
                        h(
                            RouterLink,
                            {
                                to: {
                                    name: 'product-price',
                                    params: {
                                        lang: 'zh-CN'
                                    }
                                }
                            },
                            { default: () => '商品价格配置' }
                        ),
                    key: 'product-price',
                    icon: renderIcon(Pricetag),
                }
            ]
        },
    ]
</script>

<style scoped>
    .content{
        height: calc(100vh - 125px);
    }

    .footer{
        position: absolute;
        bottom: 10px;
        width: 100%;
        background-color: #fff;
        background-color: rgba(0,0,0,0);
        color:#000

    }
    a {
        color: #42b983;
    }
</style>