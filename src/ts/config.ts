import {CommonSuccess} from "src/ts/commonResults";
import {updateToken, userLogin} from "src/ts/userConfig";
import {resetConfig} from "src/ts/systemConfig";

interface configChildren {
    name: string
    label: string,
    info: string,
    status: boolean | null,
    handler: Function | null
}

interface config {
    name: string
    label: string,
    children: configChildren[]
}

export const configColumns: config[] = [
    {
        name: "user", label: "用户设置", children: [
            {name: "dailyCard", label: "展示每日卡片", info: "首页展示委托、树脂、派遣等", status: false, handler: null},
            {
                name: "refreshToken",
                label: "更新Token",
                info: "Token使用次数有限，需要及时刷新",
                status: null,
                handler: updateToken
            },
            {name: "login", label: "登录", info: "登录到远程账户，同步用户数据", status: null, handler: userLogin},
            // {name: "updatePassword", label: "修改密码", info: "", status: null, handler: null},
            // {name: "logout", label: "退出登录", info: "", status: null, handler: null},
        ]
    },
    {
        name: "version", label: "版本设置", children: [
            {
                name: "versionEventCard",
                label: "显示版本信息",
                info: "在首页版本中显示版本信息",
                status: true,
                handler: null
            },
            {
                name: "autoExpandVersionCard",
                label: "自动展开版本信息",
                info: "首页版本信息每次开启自动展开",
                status: false,
                handler: null
            },
            {
                name: "notStartVersion",
                label: "显示未开始的版本",
                info: "首页将默认展示多个版本",
                status: true,
                handler: null
            },
            {
                name: "poolCard",
                label: "显示卡池",
                info: "在首页版本中展示当前卡池信息",
                status: true,
                handler: null
            },
            {
                name: "notStartPoolCard",
                label: "展示未开始卡池信息",
                info: "在首页版本中展示未开始卡池信息，需开启展示卡池",
                status: true,
                handler: null
            },
            {
                name: "finishedVersion",
                label: "展示已完成版本活动",
                info: "已完成的默认不展示",
                status: false,
                handler: null
            },
        ]
    },
    {
        name: "event", label: "活动设置", children: [
            {
                name: "autoExpandEventCard",
                label: "自动展开活动卡片",
                info: "首页活动信息每次开启自动展开",
                status: false,
                handler: null
            },
            {
                name: "notStartEvent",
                label: "显示未开始的活动",
                info: "首页所有活动默认展开",
                status: true,
                handler: null
            },
            {
                name: "finishedEvent",
                label: "显示已完成的活动",
                info: "首页将展示已完成的活动",
                status: false,
                handler: null
            },
        ]
    },
    {
        name: "system", label: "系统设置", children: [
            {name: "clearData", label: "清除数据", info: "清除登录以外的所有数据", status: null, handler: null},
            {name: "initConfig", label: "恢复默认设置", info: "删除配置信息", status: null, handler: resetConfig},
            {name: "changeTheme", label: "更换主题色", info: "", status: null, handler: null},
            {name: "randomTheme", label: "随机主题色", info: "每次打开随机主题色", status: false, handler: null},
            {name: "debug", label: "DEBUG模式", info: "方便开发排除错误", status: false, handler: null},
            {name: "about", label: "关于", info: "", status: null, handler: null},
        ]
    },
]

//初始化配置
export function initConfig() {
    localStorage.setItem("config", JSON.stringify(configColumns))
    CommonSuccess("配置已重新加载")
    //新手指引
}

//加载全部配置
export function loadConfig() {
    var item: any = localStorage.getItem("config")
    if (item == null) {
        initConfig()
        item = localStorage.getItem("config")
    }
    return JSON.parse(item)
}

//加载某个配置
export function getConfig(sort: string, name: string): null | Boolean {
    let result = null;
    const config: config[] = loadConfig();
    config.forEach((item: config) => {
        if (item.name == sort) {
            item.children.forEach((child: configChildren) => {
                if (child.name == name) {
                    result = child.status
                }
            })
        }
    })
    return result
}

//运行方法
export function runConfigHandler(sort: string, name: string) {
    //并不能直接调用这个函数
    configColumns.forEach((item: config) => {
        if (item.name == sort) {
            item.children.forEach((child: configChildren) => {
                if (child.name == name) {
                    // @ts-ignore
                    child.handler()
                }
            })
        }
    })
}

// 更新配置
export function updateConfig(sort: string, name: string, status: boolean) {
    var config: config[] = loadConfig();
    config.forEach((item: config) => {
        if (item.name == sort) {
            item.children.forEach((child: configChildren) => {
                if (child.name == name) {
                    child.status = status
                }
            })
        }
    })
    localStorage.setItem("config", JSON.stringify(config))
    CommonSuccess("配置已更新")
}


