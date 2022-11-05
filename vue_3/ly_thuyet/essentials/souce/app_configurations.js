// ta có thể config 1 số thứ với application instance (app)
// app.config cho phép config 1 số option thuộc app-level (toàn bộ app)
    app.config.errorHandler = (err) => {
        // xu ly error
    }
    // option errHandler nhận vào 1 function
    // function này sẽ sử lý lỗi trong phạm vi toàn app

// ngoài ra application instance còn cung cấp method để khai báo tài nguyên ở scope toàn app
    app.component('AbcComponent', AbcComponent)
    // AbcComponent đc khai báo ntn có thể dùng ở mọi nơi trong ứng dụng

// ngoài ra còn nhiều API reference khác tại đây
https://vuejs.org/api/application.html

// chắc chắn rằng app configurations phải được thực hiện trước .mount()