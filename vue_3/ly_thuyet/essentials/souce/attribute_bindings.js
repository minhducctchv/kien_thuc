// mustaches không thể dùng bên trong html attribute. Thay vào dó sử dụng v-bin directive
<div v-bind:id="dynamicId"></div>

// v-bind chỉ cho Vue giữ cho id attribute đồng bộ với dynamicId property của component.
// nếu giá trị là null hoặc undefined thì attribute sẽ đc remove khỏi rendered element

// shorthand
<div :id="dynamicId"></div>
// attribute start with : chỉ khác biệt nhỏ so với html thông thường, nhưng thực tế nó là thuộc tính vue và sẽ được biên dịch chính xác
// bởi mọi browser hỗ trợ vue. ngoài ra, nó sẽ không hiển thị ở render markup. shorthand syntax là optional nhưng sẽ được dùng rất nhiều


// Boolean attributes
// Boolean attributes là attribute biểu thị true/false cho sự hiện diện của nó trong 1 element
<button :disabled="isDisable">OK</button>  => <button disabled>OK</button> hoặc <button>OK</button>
// disabled sẽ có trong element nếu isDisable là trulthy value (https://developer.mozilla.org/en-US/docs/Glossary/Truthy)
// hoặc empty string để cho nhất quán với <button disabled="">
// disabled sẽ không có trong element nếu isDisable là falsy value

// dynamically binding multiple attributes
<div v-bind="objectOfAttrs"></div>
//...
const objectOfAttrs = {
    id: dynamicId,
    class: 'my-class'
}