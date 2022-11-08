// Vue sử dụng HTML-base template syntax, nó cho phép  bạn khai báo liên kết giữ rendered DOM với component instance
// vue templates tuân thủ nguyên tắc HTML, nó có thể được biên dịch bởi browser phổ thông hoặc trình biên dịch HTML
//
// Under the hood (dưới mui xe => bên trong nó) vue biên dịch templates thành highly-optimized Javascript code. Tích hợp với hệ hống reactivity, vue có thể
// tìm số lượng nhỏ nhất components để re-render và apply vào số lượng nhỏ nhất DOM (cách tối ưu nhất) khi app state changes
//
// nếu bạn đã quen thuộc với các khái niện Vitrual DOM và thích sử dụng power of javascript, bạn có thể viết trực tiếp các render functions thay vì dùng template
// với tùy chọn JSX support. Tuy nhiên cách viết này compile-time có thể không tối ưu bằng template
// https://vuejs.org/guide/extras/render-function.html