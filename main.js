let mySoTietKiem = new ManageSavingsBooks("Quản lý sổ tiết kiệm");

function showAll() {
  let list = mySoTietKiem.listSoTietKiem;
  let str = `
        <tr>
            <th colspan="8" style="font-size: 40px">Danh sách sổ tiết kiệm</th>
        </tr>
        <tr>
            <th>Mã sổ</th>
            <th>Loại tiết kiệm</th>
            <th>Họ và tên</th>
            <th>Chứng minh nhân dân</th>
            <th>Ngày mở sổ</th>
            <th>Số tiền gửi</th>
            <th colspan="2">Tùy Chọn</th>
        </tr>
    `;
  for (let i = 0; i < list.length; i++) {
    str += `
            <tr>
                <td>${list[i].maSo}</td>
                <td>${list[i].loaiTietKiem}</td>
                <td>${list[i].hoTenKH}</td>
                <td>${list[i].cmtnd}</td>
                <td>${list[i].ngayMoSo}</td>
                <td>${list[i].soTienGui}</td>
                <td><button onclick="remove(${i})">Xóa</button></td>
            </tr>
        `;
  }
  document.getElementById("table-soTietKiem").innerHTML = str;
}

function add() {
  let maSo = document.getElementById("maSo").value;
  let loaiTietKiem = document.getElementById("loaiTietKiem").value;
  let hoTenKH = document.getElementById("hoTenKH").value;
  let cmtnd = document.getElementById("cmtnd").value;
  let ngayMoSo = document.getElementById("ngayMoSo").value;
  let soTienGui = document.getElementById("soTienGui").value;

  let newSoTietKiem = new SoTietKiem(
    maSo,
    loaiTietKiem,
    hoTenKH,
    cmtnd,
    ngayMoSo,
    parseFloat(soTienGui)
  );

  mySoTietKiem.addSoTietKiem(newSoTietKiem);
  alert("Thêm thành công");
  showAll();
}

function remove(index) {
  let isConfirm = confirm("Bạn chắc chứ?");
  if (isConfirm) {
    mySoTietKiem.removeSoTietKiem(index);
    alert("Xóa thành công");
    showAll();
  }
}

showAll();
