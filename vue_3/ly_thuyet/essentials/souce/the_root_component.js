// object mà ta truyền vào creatApp(obj) là 1 component nó gọi là root component
// mỗi application vue đều có 1 root component
   import { createApp } form 'vue'
   import App form './App.vue'
   // App.vue là root component
   const app = createApp(App)
   // app là application instance


// root component bao gồm nhiều components con khác
// trong 1 application vue sẽ có nhiều component lồng nhau và tái sử dụng component (dùng 1 component ở nhiều chỗ)
   App (root component)
   ├─ TodoList
   │  └─ TodoItem
   │     ├─ TodoDeleteButton
   │     └─ TodoEditButton
   └─ TodoFooter
      ├─ TodoClearButton
      └─ TodoStatistics