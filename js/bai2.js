/**
 * input: nhapTen, Nhập số điện tiêu thụ
 * 
 * Các bước xử lý:
 *  lấy giá trị từ form
 *  tính tiền điện theo số điện tiêu thụ được
 *  tienDien = soDienTieuThu * tienDienTheoMuc
 *  in kết quả ra màn hình
 * 
 * output: tên và tiền điện
 */

// Tạo biến toàn cục

function tinhTongTienDien() {
    var tienDien = 0;
    var tenKH = document.querySelector("#tenKH").value;
    var soDienTieuThu = document.querySelector("#dienTieuThu").value;
    // var mangTienDien = [500, 650, 850, 1100, 1300];
    // var soKWDien = [50, 50, 100, 150, 9999];
    // for ( var i = 0 ; i < mangTienDien.length ; i++ ){
    //     if (soDienTieuThu <= 0) break;
    //     const soKw = soDienTieuThu >= soKWDien[i + 1] ? soKWDien[i + 1] : soDienTieuThu;
    //     tienDien += soKw * mangTienDien[i];
    //     soDienTieuThu -= soKw;
    // }
    for(var i = 1; i <= soDienTieuThu; i++ ){
        if(i > 0 && i <= 50){
            tienDien +=500;
        }else if( i > 50 && i <= 100){
            tienDien +=650;
        }else if( i > 100 && i <=200){
            tienDien +=850;
        }else if( i > 200 && i <= 350){
            tienDien +=1100;
        }else{
            tienDien +=1300
        }
    }


    document.querySelector("#txtSoTien").innerHTML = "Tên khách hàng: " + tenKH + ";" + " Số tiền điện là: " + tienDien.toLocaleString() + "VND";
    
}

document.querySelector("#btnSoTien").onclick = tinhTongTienDien;