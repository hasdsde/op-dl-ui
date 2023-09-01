import {Dialog, DialogChainObject, Notify} from "quasar";


export function getLocalItem(item: string) {
    return localStorage.getItem(item)
}

// 加载页面
export function CommonLoading($q: any) {
    $q.loading.show({
        message: '正在加载...',
        boxClass: 'bg-grey-2 text-grey-9',
        spinnerColor: 'primary'
    })
}

// 页面加载完成
export function LoadingFinish($q: any) {
    $q.loading.hide()
}

// 一般成功消息
export function CommonSuccess(msg: string) {
    Notify.create({
        type: 'positive',
        message: msg,
        position: 'top',
        group: false
    })
}


export function Success() {
    Notify.create({
        type: 'positive',
        message: '成功',
        position: 'top',
        group: false
    })
}

export function CommonWarn(msg: string) {
    Notify.create({
        type: 'warning',
        message: msg,
        position: 'top',
        group: false
    })
}

export function CommonFail(msg: string) {
    Notify.create({
        type: 'negative',
        message: msg,
        position: 'top',
        group: false
    })
}

export function CommonInfo(msg: string) {
    Notify.create({
        type: 'info',
        message: msg,
        position: 'top',
        group: false
    })
}


// 对话框
export function DialogAlert(message: string): DialogChainObject {
    return Dialog.create({
        title: '消息',
        message: message,
        persistent: true
    })
}

//确认对话框
export function DialogConfirm(msg: string): DialogChainObject {
    return Dialog.create({
        title: '确认',
        message: msg,
        cancel: true,
        persistent: true
    })
}

//输入框
export function DialogPrompt(msg: string): DialogChainObject {
    return Dialog.create({
        title: '输入',
        message: msg,
        prompt: {
            model: '',
            type: 'text'
        },
        cancel: true,
        persistent: true
    })
}

export function building() {
    CommonWarn("正在建设中")
}
