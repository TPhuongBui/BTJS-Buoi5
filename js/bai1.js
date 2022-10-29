
/**
 * input: diemChuan, diemToan, diemVan, diemENG, điểm cho từng đối tượng và khu vực
 * 
 * Các bước xử lý:
 *  lấy tất cả value trên màn hình
 *  tính điểm tổng kết
 *  tính điểm ưu tiên
 *  tính điểm tổng = tổng kết + ưu tiên
 *  so sánh điểm tổng với điểm chuân (if)
 *      nếu điểm tổng >= điểm chuẩn và điểm toán hoặc điểm văn hoặc điểm tiếng anh lớn hơn 0 => đậu
 *      ngược lại => rớt
 *  in kết quả ra màn hình và in điểm tổng
 * 
 * output: kết quả đậu hay rớt và tổng điểm
 */


function ketQuaTuyenSinh() {
    var diemChuan = Number(document.querySelector("#diemChuan").value);
    var diemToan = Number(document.querySelector("#diemToan").value);
    var diemVan = Number(document.querySelector("#diemVan").value);
    var diemTiengAnh = Number(document.querySelector("#diemENG").value);
    var diemKhuVuc = Number(document.querySelector("#khuVuc").value);
    var diemDoiTuong = Number(document.querySelector("#doiTuong").value);
    var ketQua = "";
    // console.log(diemChuan);
    // console.log(diemToan);
    // console.log(diemVan);
    // console.log(diemTiengAnh);
    // console.log(diemKhuVuc);
    // console.log(diemDoiTuong);
    var diem3Mon = Number((diemToan + diemVan + diemTiengAnh));
    var diemUuTien = Number((diemKhuVuc + diemDoiTuong));
    var diemTongKet = Number(diem3Mon + diemUuTien);

    if ((diemTongKet >= diemChuan) && ((diemToan > 0) && (diemVan > 0) && (diemTiengAnh >0))){
        ketQua = "Đậu";
    }else{
        ketQua ="Rớt";
    }

    document.querySelector("#txtKetQua").innerHTML = ketQua + " Và tổng điểm là: " +  diemTongKet;

}

document.querySelector("#btnResult").onclick = ketQuaTuyenSinh;