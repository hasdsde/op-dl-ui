//刷新token
import {DialogPrompt} from "src/ts/commonResults";

export function updateToken() {
    DialogPrompt("输入新Token").onOk((data: string) => {
        localStorage.setItem("mhy_token", data)
    })
}
