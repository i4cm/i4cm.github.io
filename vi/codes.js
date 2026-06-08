window.CODES = {
 "9": {
  "cat": "Phần mềm bảo mật / Phần cứng",
  "msg": "Không khôi phục được iPhone. Đã xảy ra lỗi không xác định (9).",
  "self": "Tạm thời tắt phần mềm diệt virus/tường lửa của bên thứ ba rồi thử cập nhật lại; dùng cáp chính hãng, cổng USB phía sau thùng máy và một máy tính khác; buộc khởi động lại rồi chọn Cập nhật (không phải Khôi phục) trước.",
  "hw": "Nếu mọi cách phần mềm đều thất bại, thường là bộ nhớ NAND bị hàn nguội/lỗi, thiếu nguồn, hoặc lỗi giao tiếp bộ nhớ-CPU.",
  "tip": "Nếu lỗi 9 chỉ xuất hiện rất lâu sau khi rút cáp, bộ nhớ hoàn toàn không được nhận.",
  "scene": "Thường gặp nhất khi thiết bị ngắt kết nối ở nửa sau quá trình khôi phục."
 },
 "4005": {
  "cat": "Kết nối USB / Phần cứng",
  "msg": "Không khôi phục được iPhone. Đã xảy ra lỗi không xác định (4005).",
  "self": "Thử cáp chính hãng, cổng USB phía sau và máy tính khác, rồi khôi phục lại ở chế độ DFU.",
  "hw": "Thường là CPU hoặc mạch nguồn của nó.",
  "tip": "",
  "scene": ""
 },
 "4013": {
  "cat": "Kết nối USB / Phần cứng",
  "msg": "Không khôi phục được iPhone. Đã xảy ra lỗi không xác định (4013).",
  "self": "Dùng cáp chính hãng ngắn, cổng USB phía sau và máy tính khác; khôi phục lại qua DFU; nếu iTunes gặp sự cố hosts/proxy, khôi phục tệp hosts và tắt tường lửa.",
  "hw": "Khi mọi bước phần mềm vẫn thất bại, thường là sự cố bus RAM-CPU-bộ nhớ; lỗi đồ họa rồi khởi động lại có thể là lỗi bus.",
  "tip": "Xuất hiện sau khi thanh tiến trình hiện ra → thiên về bộ nhớ; xuất hiện ngay lập tức → kiểm tra cáp/USB trước.",
  "scene": "Hay gặp khi hạ cấp, hoặc khi công cụ bên thứ ba ghi đè tệp hosts để chuyển hướng gs.apple.com (iTunes không tới được máy chủ ở cổng 80/443)."
 },
 "4014": {
  "cat": "Kết nối USB / Phần cứng",
  "msg": "Không khôi phục được iPhone. Đã xảy ra lỗi không xác định (4014).",
  "self": "Đổi cáp/cổng rồi khôi phục lại ở chế độ DFU.",
  "hw": "SDRAM tạm và mạch của nó bị lỗi / SoC phía trên không ổn định / pin quá yếu.",
  "tip": "Không hiện logo Apple → thường lỗi nắp trên CPU; hiện logo Apple → thiên về bộ nhớ.",
  "scene": ""
 },
 "4037": {
  "cat": "Trạng thái thiết bị",
  "msg": "Không khôi phục được iPhone. Đã xảy ra lỗi không xác định (4037).",
  "self": "Xuất hiện khi thiết bị có mật mã và chưa mở khóa. Mở khóa trên thiết bị, giữ màn hình sáng rồi khôi phục.",
  "hw": "",
  "tip": "",
  "scene": ""
 },
 "14": {
  "cat": "Kết nối USB / Phần cứng",
  "msg": "Không khôi phục được iPhone. Đã xảy ra lỗi không xác định (14).",
  "self": "Đổi cáp / cổng USB; cũng có thể thử lại vài lần.",
  "hw": "Thiếu dung lượng hoặc pin, hoặc do máy tính; ghi chú cũ còn nhắc firmware hỏng → xóa firmware đã tải và tải lại.",
  "tip": "",
  "scene": ""
 },
 "11": {
  "cat": "Phần cứng / Bộ nhớ",
  "msg": "Không thể khôi phục (11).",
  "self": "Giải phóng ổ hệ thống (giữ ≥10 GB) và tải lại firmware.",
  "hw": "Ổ hệ thống đầy, hoặc tệp firmware hỏng.",
  "tip": "",
  "scene": ""
 },
 "3194": {
  "cat": "Mạng / Máy chủ Apple",
  "msg": "Không khôi phục được iPhone. Đã xảy ra lỗi không xác định (3194).",
  "self": "Chỉ khôi phục phiên bản đang được ký; khôi phục tệp hosts (xóa dòng trỏ tới máy chủ ký cũ); tắt proxy/VPN.",
  "hw": "",
  "tip": "",
  "scene": "Luôn xuất hiện khi hạ cấp về iOS mà Apple không còn ký."
 },
 "3004": {
  "cat": "Mạng / Cáp",
  "msg": "Xuất hiện ngay sau logo Apple khi thanh tiến trình chạy (3004 / 3014 / 2005).",
  "self": "Chuyển sang mạng ổn định, đổi cáp và kiểm tra tệp hosts.",
  "hw": "",
  "tip": "",
  "scene": "Xuất hiện khi tiến trình vừa bắt đầu → thường do cáp / máy tính / mạng."
 },
 "53": {
  "cat": "Phần cứng",
  "msg": "Không khôi phục được iPhone. Đã xảy ra lỗi không xác định (53).",
  "self": "Kết nối máy tính qua điểm phát sóng điện thoại rồi khôi phục lại để loại trừ yếu tố xác thực/mạng.",
  "hw": "Thường là mô-đun Touch ID / Face ID hỏng; phải thay phần cứng đã ghép cặp.",
  "tip": "",
  "scene": ""
 },
 "-1": {
  "cat": "Phần cứng / Baseband",
  "msg": "Không thể khôi phục (-1).",
  "self": "Không thể sửa bằng phần mềm; cần sửa bo mạch.",
  "hw": "Thiếu đường nguồn baseband, hoặc đường nguồn chạm đất; CPU baseband hàn chưa hoàn chỉnh.",
  "tip": "",
  "scene": ""
 },
 "1": {
  "cat": "Phần cứng / Baseband",
  "msg": "Không thể khôi phục (1).",
  "self": "Mang đi kiểm tra baseband.",
  "hw": "Không nhận CPU baseband; kiểm tra PMU baseband có xuất nguồn không và CPU baseband có hàn nguội không.",
  "tip": "",
  "scene": ""
 },
 "3": {
  "cat": "Phần cứng / Baseband",
  "msg": "Không thể khôi phục (3).",
  "self": "Mang đi kiểm tra baseband.",
  "hw": "Baseband, EEPROM và mạch của nó bị lỗi.",
  "tip": "",
  "scene": ""
 },
 "6": {
  "cat": "Phần cứng",
  "msg": "Không thể khôi phục (6).",
  "self": "Khôi phục thêm hai lần với cáp / máy tính / mạng tốt; nếu vẫn lỗi thì sửa.",
  "hw": "SoC hàn nguội, hoặc bộ nhớ hỏng.",
  "tip": "",
  "scene": ""
 },
 "10": {
  "cat": "Phần mềm quá mới",
  "msg": "Không thể khôi phục (10).",
  "self": "iOS thiết bị mới hơn phía máy tính; cập nhật Mac / iTunes / ứng dụng Thiết bị Apple rồi thử lại.",
  "hw": "",
  "tip": "",
  "scene": ""
 },
 "1015": {
  "cat": "Bẻ khóa / hạ cấp",
  "msg": "Không tìm thấy tài nguyên bắt buộc / (1015).",
  "self": "Xảy ra với thiết bị bẻ khóa hoặc hạ cấp; dùng chế độ khôi phục để khôi phục về iOS mới nhất.",
  "hw": "",
  "tip": "",
  "scene": ""
 },
 "9006": {
  "cat": "Phần mềm bảo mật / Mạng",
  "msg": "Xuất hiện khi tải firmware (9006).",
  "self": "Tải bị tường lửa/mạng chặn; tắt tường lửa, hoặc tải IPSW phù hợp thủ công rồi khôi phục cục bộ.",
  "hw": "",
  "tip": "",
  "scene": ""
 },
 "50": {
  "cat": "Mạng",
  "msg": "Hết thời gian tải firmware (50 / -50).",
  "self": "50 là hết thời gian tải phía Apple; chuyển sang mạng ổn định hoặc tải firmware thủ công. -50 thường là hết thời gian máy chủ aisi-helper; kiểm tra proxy hoặc cập nhật lên ứng dụng mới nhất.",
  "hw": "",
  "tip": "",
  "scene": ""
 },
 "0xE8000015": {
  "cat": "USB / Trình điều khiển",
  "msg": "0xE8000015",
  "self": "Cài lại trình điều khiển Apple Mobile Device / AMDS và đổi cáp/cổng; hoặc dùng sửa iTunes & trình điều khiển một chạm của bộ công cụ sửa.",
  "hw": "",
  "tip": "",
  "scene": ""
 }
};
