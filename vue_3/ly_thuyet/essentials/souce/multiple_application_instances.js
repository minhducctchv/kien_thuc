// 1 application instance (app) thì chỉ có duy 1 nhất 1 root component

// nhưng vue cho chép có nhiều application instance
// mỗi application instance đc mount vào 1 DOM trong page html
// mỗi app có 1 scope, 1 configuration riêng và chia sẻ global assert dùng chung
    <page>
        <div id="container-1"></div>
        <div id="container-2"></div>
    </page>
    //...
    const app1 = createApp (...)
    app1.mount('#container-1')

    const app2 = createApp (...)
    app2.mount('#container-2')

// nếu chỉ muốn dùng app để render cho 1 dom trong 1 page html thì ko nên đặt container là cả page đó
// mà có thể đặt container là 1 dom muốn quản lý đó thôi