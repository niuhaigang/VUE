// 源码位置：src/core/observer/dep.js
export default class Dep {
    constructor() {
        this.subs = [];
    }
    addSub(sub) {
        this.subs.push(sub);
    }
    // 删除一个依赖
    removeSub(sub) {
        remove(this.subs, sub);
    }
    // 添加依赖
    depend() {
        if (window.target) {
            this.addSub(window.target);
        }
    }
    // 通知所有依赖更新
    notify() {
        const subs = this.subs.slice();
        for (let i = 0, l = subs.length; i < l; i++) {
            sub[i].update();
        }
    }
}

export function remove(arr, item) {
    if (arr.length) {
        const index  = arr.indexOf(item)
        if (index > -1) {
            return arr.splice(index, 1)
        }
    }
}