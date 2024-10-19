// Thay đổi nội dung búc thư ở đây
var letterContent = `🌹[GỬI NGƯỜI PHỤ NỮ XINH ĐẸP NHẤT NHỮNG ĐIỀU ĐẸP NHẤT]🌹
Một ngày 20/10 thật hạnh phúc - ấm áp và ý nghĩa, đó là những gì tuyệt vời nhất cô Uyên muốn gửi đến những người phụ nữ xinh đẹp của lớp 2/6. Cảm ơn những người Bà, người Mẹ, người Chị đã luôn tận tâm với công việc, dành tình yêu thương vô bờ đến gia đình và các con. Không chỉ riêng ngày 20/10 này, cô Uyên xin kính chúc các chị đẹp luôn là những đoá hồng rực rỡ, luôn ngát hương và mạnh mẽ.
Gửi ngàn lời tri ân và thương mến đến tất cả những người phụ nữ đáng quý,
Cô Uyên.🌹`;

// Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 50 là tốc độ khá phù hợp
durationWrite = 50;

// Hiệu ứng gõ chữ

function effectWrite() {
  var boxLetter = document.querySelector(".letterContent");

  if (!boxLetter) {
    console.error("Element with class 'letterContent' not found!");
    return;
  }

  // Thay \n bằng <br> để xuống dòng trong HTML
  var formattedContent = letterContent.replace(/\n/g, "<br>");
  boxLetter.innerHTML = ""; // Reset nội dung trước khi bắt đầu hiệu ứng

  // Sử dụng split theo khoảng trống hoặc các từ thay vì từng ký tự để giữ định dạng HTML
  letterContentSplited = formattedContent.split(/(<br>| )/);

  letterContentSplited.forEach((val, index) => {
    setTimeout(() => {
      boxLetter.innerHTML += val; // Thêm từng đoạn, giữ lại các thẻ <br>
    }, durationWrite * index);
  });
}

window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelector(".container").classList.add("active");
  }, 500);
});

var openBtn = document.querySelector(".openBtn");
openBtn.addEventListener("click", () => {
  document.querySelector(".cardValentine").classList.add("active");
  document.querySelector(".container").classList.add("close");
});

var cardValentine = document.querySelector(".cardValentine");

cardValentine.addEventListener("click", () => {
  cardValentine.classList.toggle("open");

  if (cardValentine.className.indexOf("open") != -1) {
    setTimeout(effectWrite, 500);
  } else {
    setTimeout(() => {
      document.querySelector(".letterContent").innerHTML = "";
    }, 1000);
  }
});
var openBtn = document.querySelector(".openBtn");

openBtn.addEventListener("click", () => {
  document.querySelector(".cardValentine").classList.add("active");
  document.querySelector(".container").classList.add("close");

  // Thêm lớp hidden vào các đám mây khi nhấn nút
  document.querySelector(".cloud").classList.add("hidden");
  document.querySelector(".cloud1").classList.add("hidden");
  document.querySelector(".cloud2").classList.add("hidden");
});
