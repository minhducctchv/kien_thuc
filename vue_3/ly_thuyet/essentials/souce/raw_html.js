// the double mustaches thông dịch value dưới dạng plain text, not HTML. Để output là real HTML thì phải dùng v-html directive
<p>Sử dụng text interpolation: {{ rawHtml }}</p>
<p>Sử dụng v-html directive: <span v-html="rawHtml"></span></p>
//...
rowHtml = '<span style="color: blue">Đây là màu xanh</span>'
// https://vuejs.org/api/built-in-directives.html#v-html

// directive là attribute được cung cấp bới vue chúng được dánh đấu bằng prefixed v-, chúng thực hiện 1 số hành vi reactive đặc biệt để rendered
// DOM

// khi dùng với v-html khi value rawHtml thay đổi thì DOM thay đổi theo

// lưu ý: dynamically rendering với bất HTML nào cũng rất nguy hiểm với website của bạn vì nó dễ dẫn tới lỗ hổng XSS. chỉ sử dụng v-html
// với html content dáng tin cậy và không bao giờ dùng với html content người dùng cung cấp