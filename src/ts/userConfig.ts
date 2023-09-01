//刷新token
import {CommonSuccess, DialogAlert, DialogPrompt} from "src/ts/commonResults";

export function updateToken() {
    DialogPrompt("输入新Token").onOk((data: string) => {
        localStorage.setItem("mhy_token", data)
        CommonSuccess("Token已更新")
    })
}

export function userLogin() {
    DialogAlert("等待后续更新")
}
