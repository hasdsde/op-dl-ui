import {toRaw} from "vue";
import {useQuasar} from "quasar";
import {CommonFail, CommonSuccess} from "src/ts/commonResults";
import {useRouter} from "vue-router";

const $q = useQuasar()
const rt = useRouter()

//将当前行数据转换为js对象
export function rowsToObject(row: any): any {
    return toRaw(row)
}

//一般操作
export function commonCheckResponse(res: any) {
    if (res.code == '200') {
        if (allNull(res.msg)) {
            CommonSuccess('操作成功')
        } else {
            CommonSuccess(res.msg)
        }
    } else {
        CommonFail(res.msg)
    }
}

//用于去掉T的日期而且不改变原来的
export function getHumanDate(date: string) {
    return date.replace('T', ' ')
}


//判断是不是全是空的
export function allNull(item: any): boolean {
    return item == null || undefined || item == '';
}


//导出表格
function wrapCsvValue(val: any, formatFn: any, row: any) {
    let formatted = formatFn !== void 0
        ? formatFn(val, row)
        : val

    formatted = formatted === void 0 || formatted === null
        ? ''
        : String(formatted)

    formatted = formatted.split('"').join('""')
    /**
     * Excel accepts \n and \r in strings, but some other CSV parsers do not
     * Uncomment the next two lines to escape new lines
     */
    // .split('\n').join('\\n')
    // .split('\r').join('\\r')

    return `"${formatted}"`
}

