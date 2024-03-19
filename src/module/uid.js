

export const getId = (arrA, arrB) => {
    const maxA = arrA.reduce((max, obj) => Math.max(max, obj.id), 0)
    const maxB = arrB.reduce((max, obj) => Math.max(max, obj.id), 0)

    return String(Math.max(maxA, maxB) + 1)
}
