// application instance sẽ không đc render đến khi hàm .mount() đc gọi
const app = creatApp(App);  // app là application instance, App là root component

// argument của hàm này gọi là 1 container, nó có thể là: DOM thực tế hoặc 1 selector string
    // DOM thực tê
    app.mount(actual DOM) (DOM thực sự: chưa rõ viết ntn)
    // select string
    <div id="id-root-container"></div>
    app.mount('#id-root-container')

// nội dung trong root component sẽ đc render bên trong container
// bản thân container ko đc xem là 1 thành phần trong app


// hàm .mount() phải luôn được gọi sau config app và assert registration (createApp)
// giá trị trả về của .mount() là 1 component instance, khác với assert registration (createApp) là application instance
    <div id="app"></div>
    // ...
    import { createApp } form 'vue'
    import RootComponent form './RootComponent.vue'

    const app = createApp(RootComponent) // assert registration
    app.mount('#app')


// ## Template của Root Component trong DOM container
// trong trường hợp không khai báo Root Component riêng sau đó truyền vào hàm createApp() thì có thể viết  khi báo trực tiếp
// root component khi creatApp
    <div id="app">
        <button @click="count++">{{ count }}</button>
    </div>
    //...
    import { createApp } from 'vue'
    const app = createApp({
        data() {
            return { count: 0 }                    // khai báo phần export default Componenet của root Component luôn trong createApp
        }
    })
    app.mount('#app')
// innerHTML bên trong container sẽ được vue sử dụng làm template (<template>) của root Component