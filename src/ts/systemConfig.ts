import {DialogConfirm} from "src/ts/commonResults";
import {getConfig, initConfig} from "src/ts/config";

//恢复默认配置
export function resetConfig() {
    DialogConfirm("确定要恢复默认配置吗?").onOk(() => {
        initConfig()
        location.reload()
    })
}

//debug模式使用
export function debugLog(o: any) {
    if (getConfig("system", "debug")) {
        console.log(o)
    }
}