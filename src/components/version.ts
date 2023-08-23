import {date} from "quasar";

export function getVersionTime(startTime: any, endTime: any): string {
    const hour = date.getDateDiff(endTime, new Date(), "hours");
    const diffDay = Math.floor(hour / 24);
    const diffHour = Math.floor(hour % 24);
    console.log(diffHour)
    startTime = startTime.slice(5, 10).replace("-", "/")
    endTime = endTime.slice(5, 10).replace("-", "/")
    return startTime + "-" + endTime + "  (" + diffDay + "天" + diffHour + "时" + ")"
}

export function getVersionNum(num: string): string {
    var s = "40"
    return s.slice(0, 1) + "." + s.slice(1, 2)
}