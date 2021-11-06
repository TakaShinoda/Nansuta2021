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