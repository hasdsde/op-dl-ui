import {date} from "quasar";

//获取版本和时间差
export function getVersionTime(startTime: any, endTime: any): string {
    const hour = date.getDateDiff(endTime, new Date(), "hours");
    const diffDay = Math.floor(hour / 24);
    const diffHour = Math.floor(hour % 24);
    startTime = startTime.slice(5, 10).replace("-", "/")
    endTime = endTime.slice(5, 10).replace("-", "/")
    return startTime + "-" + endTime
}


//根据截至时间计算剩余时间
export function getVersionLeftTime(endTime: any): string {
    let hour = date.getDateDiff(endTime, Date.now(), "hours");
    hour = decreaseTime(hour)
    if (hour < 0) {
        return "已结束"
    }
    const diffDay = Math.floor(hour / 24);
    const diffHour = Math.floor(hour % 24);
    return diffDay + "天" + diffHour + "时"
}

//根据截至时间计算剩余时间
export function getEventLeftTime(startTime: any, endTime: any): string {
    let hour = date.getDateDiff(endTime, Date.now(), "hours");
    hour = decreaseTime(hour)

    const diffDay = Math.floor(hour / 24);
    const diffHour = Math.floor(hour % 24);
    
    //如果没开始
    if (date.getDateDiff(startTime, Date.now(), "hours") > 0) {
        hour = date.getDateDiff(startTime, Date.now(), "hours");
        const diffDay = Math.floor(hour / 24);
        const diffHour = Math.floor(hour % 24);
        return "未开始(" + diffDay + "天" + diffHour + "时)"
    }
    if (hour < 0) {
        return "已结束";
    }
    return diffDay + "天" + diffHour + "时"
}

//计算时间差
export function getDiffTimeOfHour(startTime: any, endTime: any): number {
    const hour = date.getDateDiff(endTime, startTime, "hours");
    return hour
}

//计算时间差时间线
export function getVersionLeftLine(startTime: string, endTime: string): number {
    const totalHour = getDiffTimeOfHour(startTime, endTime)
    const leftHour = totalHour - getDiffTimeOfHour(new Date(), endTime)
    return parseFloat((leftHour / totalHour).toFixed(2))
}

//将版本号转换成正常版本号
export function getVersionNum(num: string): string {
    return "V" + num.toString().slice(0, 1) + "." + num.toString().slice(1, 2)
}

//东八区
function decreaseTime(hour: number) {
    return hour - 8
}