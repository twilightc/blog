---
title: Promise/A+規範筆記
slug: promise-a-plus-20200707
author: 張庭頤(Tim Chang)
date: 2020-07-07
hero: ./images/marcos-mayer-8_NI1WTqCGY-unsplash.jpg
excerpt: 了解promise/A+相關的規範，加深對promise的理解
---

這個筆記是在實作簡單的 promise 前需要注意的事情，大致了解後再去實作 promise 時，會對其中操作更有概念。
以下內容主要以 promise/A+的 [specification](https://promisesaplus.com/#notes) 為主。

底下會用到的名詞：

&emsp;&emsp;thenable：一個定義了 then method 的 object/function

&emsp;&emsp;promise：符合 promise/A+的 thenable

&emsp;&emsp;value：任何合法的 js value(包含 undefined/thenable/promise)

&emsp;&emsp;exception：用 throw 丟出的 value

&emsp;&emsp;reason：指出 promise 為何被拒絕的 value

&emsp;&emsp;resolve：將 promise 轉換成 fulfilled 或 rejected 的過程

&emsp;&emsp;fulfilled：被履行的 promise

&emsp;&emsp;rejected：被拒絕的 promise，和 fulfilled 兩種狀態合稱 settled

&emsp;&emsp;那麼開始吧。

1.&emsp;Promise/A+標準描述了 then 的細節，其他像是 race、catch，到產生一個 promise，都沒有在這份 spec 中被定義。

2.&emsp;一個 Promise 包含了三種狀態，pending、fulfilled、rejected；

&emsp;&emsp;pending：promise 處理中，可轉換為 fulfilled 及 rejected 狀態。

&emsp;&emsp;fullfilled：promise 被履行，一經確定，狀態不能再次轉換。

&emsp;&emsp;rejected：promise 被拒絕，一經確定，狀態不能再次轉換。

&emsp;&emsp;fulfilled 以及 rejected 的數值具不可變(immutability)特性，但不會是 deep immutability；如果 resolved 時傳入的數值是一個 object，則 immutability 僅限於這個 object 的參考必須與最初 resolved 傳入時時一致。

3.&emsp;Promise 必須要提供 then 這個方法，then 可以取得 promise 目前或者是最後的結果(value/reason)，並且有以下特點：

&emsp;&emsp;**_可以傳入兩個函數，分別是履行(onFulfilled)及拒絕(onRejected)時需要做什麼事情，兩個函數都是可選的。_**

&emsp;&emsp;**_如果 onFulfilled，或者 onRejected 不是函數，則當中的 value 會被略過，上一個 promise 的狀態會被傳至下一個 promise，如下:_**

```javascript
let t = Promise.resolve(1);
t.then('9527').then((res) => console.log(res)); // 1
t.then().then((res) => console.log(res)); // 1
```

&emsp;&emsp;這代表著，如果 promise1 的 onFulfilled 或者 onRejected 不是 function，並且已被 resolve 為 fulfilled 或者 rejected 時，若有一個 promise2 接在 promise1 後面，則 promise2 也會以相同的 value/reason 處理 onFulfilled/onRejected。

&emsp;&emsp;**_onFulfilled，onRejected 必須要是非同步執行。_**

&emsp;&emsp;再深入一點，這個非同步執行的方式根據平台的差異，可能會被作為 microtask，或者是 macrotask(又稱 task)來實作，以 chrome 來說，promise 是一個 microtask。

&emsp;&emsp;**_onFulfilled，onRejected 當中的 this，在嚴格模式下為 undefined，默認(sloppy mode)為 global object。_**

&emsp;&emsp;**_then 在同一個 promise 上可以被多次呼叫，並且每次都要回傳一個 promise。_**

&emsp;&emsp;可以留意一下，這個回傳的 promise 在目前多數的實作是一個 new promise，specification 雖然沒有指出這點，但不管是 promise/A+的實作，還是作為它前身的 [promise/A](http://wiki.commonjs.org/wiki/Promises/A) 都有明確的做了規範。

&emsp;&emsp;**_如果 onFulfilled 或者 onRejected 都有回傳一個叫做 x 的 value，則會呼叫[[ Resolve ]](promise, x)。_**

4.&emsp;[[ Resolve ]](promise, x) 是根據 x 這個 value 的狀況(thenable 或 value)對 promise 進行處理，將之轉變為 fulfilled 或者是 rejected 的一個過程，它符合以下要求：

&emsp;&emsp;**_promise 不能 resolve 自己。_**

&emsp;&emsp;**_如果 x 是一個 promise，則接受 x 的狀態_**

&emsp;&emsp;若 x 當下狀態為 pending，則 promise 同樣維持 pending，直到 x 的狀態轉變為 fulfilled 或者 rejected，一旦轉變，則使用與 x 相同的 value/reason 對 promise 進行 fulfill/reject

&emsp;&emsp;**_當 x 是一個 object 或 function 時 ，promise 的 then 會等於 x 當中的 then，若執行 x.then 時發生錯誤，透過該錯誤 reject promise，如下：_**

```javascript
let temp = {
  then: (() => {
    throw new TypeError('some error');
  })(),
};
new Promise((resolve) => {
  resolve(temp);
}).catch((err) => {
  console.log(err);
});
//Uncaught TypeError: some error
```

&emsp;&emsp;如果 x 是一個 function，呼叫時將 x 作為 this，傳入兩個參數，第一為 resolvePromise，第二為 rejectPromise，如下方片段：

```javascript
let temp = {
  then: (resolvePromise, rejectPromise) => {
    resolvePromise('1');
  },
};
new Promise((resolve) => {
  resolve(temp);
}).then((res) => console.log(res)); //1
```

&emsp;&emsp;透過這個做法，讓原生 promise，以及不是使用原生 promise constructor 所建立的 temp(deferred object)兩者狀態與 value 可以一致。

&emsp;&emsp;**_如果 x 是一個 value，將 promise 以 x 為 value 去履行(fulfilled)。_**

5.&emsp;不同 library 實現的 promise 應該要可以彼此使用，例如：

```javascript
new MyPromise((resolve) => {
  resolve('my promise');
})
  .then((res) => {
    return new Promise.resolve('promise');
  })
  .then((res) => {
    //...
  });
```

&emsp;&emsp;實際上這是第四點，也就是 promise resolution procedure 一開始的說明，但我想了一會之後還是將它抽了出來，方便閱讀。

&emsp;&emsp;這邊只是大略介紹規範，並沒有完全詳述，如果有興趣的話建議是直接去看官方提供的 specification 比較好。

&emsp;&emsp;下一篇會盡量依照這些規則，開始動手做一個簡單的 promise。

### 參考資料:

[史上最易讀懂的 Promise/A+完全實現](https://zhuanlan.zhihu.com/p/21834559)

[javascript promise | 從 promises/a+ 規範瞭解 promise](https://medium.com/%E6%89%8B%E5%AF%AB%E7%AD%86%E8%A8%98/promises-a-plus-330dda203569)

[Promise 介紹-規範篇](https://segmentfault.com/a/1190000007719379)

[promise/a+ spec](https://promisesaplus.com/#notes)
