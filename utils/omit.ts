export const omit = (target: string, count: number) => {
    if(target.length > count) {
      return `${target.substr(0, count)}...`
    } else {
      return target
    }
}

export const formatDate = (target: string) => {
    return `${target.substr(0, 10)}`
}

export const formatISO8601 = (dateIso8601: string) =>
  new Date(Date.parse(dateIso8601))
    .toLocaleDateString('ja-JP')
    .replace(/\//g, '.');