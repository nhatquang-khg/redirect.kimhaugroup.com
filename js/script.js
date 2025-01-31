// Lấy giá trị 'ref' từ URL
const urlParams = new URLSearchParams(window.location.search);
const ref = urlParams.get('ref');

// Link nhóm Zalo gốc của bạn
let youtubeLink = "https://www.youtube.com/";

// Nếu có giá trị 'ref', thêm vào link Zalo
if (ref) {
    youtubeLink += `?ref=${ref}`;
}

// Chuyển hướng sau khi video kết thúc hoặc theo thời gian chờ
setTimeout(function() {
    window.location.href = youtubeLink;
}, 100); // 4000ms (4 giây)
