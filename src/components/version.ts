import {date} from "quasar";

export function getVersionTime(startTime: any, endTime: any): string {
    const hour = date.getDateDiff(endTime, new Date(), "hours");
    const diffDay = Math.floor(hour / 24);
    const diffHour = Math.floor(hour % 24);
    startTime = startTime.slice(5, 10).replace("-", "/")
    endTime = endTime.slice(5, 10).replace("-", "/")
    return startTime + "-" + endTime
}

export function getVersionLeftTime(endTime: any): string {
    const hour = date.getDateDiff(endTime, new Date(), "hours");
    const diffDay = Math.floor(hour / 24);
    const diffHour = Math.floor(hour % 24);
    return diffDay + "天" + diffHour + "时"
}

export function getDiffTimeOfHour(startTime: any, endTime: any): number {
    const hour = date.getDateDiff(endTime, startTime, "hours");
    return hour
}

export function getVersionLeftLine(startTime: string, endTime: string): number {
    const totalHour = getDiffTimeOfHour(startTime, endTime)
    const leftHour = totalHour - getDiffTimeOfHour(new Date(), endTime)
    return parseFloat((leftHour / totalHour).toFixed(2))
}

//将版本号转换成正常版本号
export function getVersionNum(num: string): string {
    return "V" + num.toString().slice(0, 1) + "." + num.toString().slice(1, 2)
}