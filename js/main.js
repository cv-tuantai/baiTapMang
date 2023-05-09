// Tạo hàm domID
function domID(id) {
  return document.getElementById(id);
}

// Khai báo mảng listNumber
var listNumber = [];

// Tạo hàm thêm phần tử vào mảng listNumber
function getNumber() {
  // Input: Dom tới thẻ input#inputNumber lấy value
  var number = document.getElementById("inputNumber").value * 1;

  // Process: Thêm phần tử vào mảng listNumber
  listNumber.push(number);

  // Output: Hiện thị mảng listNumber ra giao diện
  domID("txtArray").innerHTML = listNumber;
}

// Bài 1: Tổng các số dương trong mảng
function btnSum() {
  // Kiểm tra mảng rỗng
  if (listNumber.length === 0) {
    return alert("Không để mảng rỗng");
  }

  // Output: Tạo biến tích lũy total = 0
  var total = 0;

  // Process: Duyệt mảng listNumber, kiểm tra phần tử trong mảng có phải là số dương, nếu true -> tích lũy phần tử vào biến total
  for (var index = 0; index < listNumber.length; index++) {
    if (listNumber[index] > 0) {
      total += listNumber[index];
    }
  }

  // Hiển thị kết quả ra giao diện
  domID("txtSum").innerHTML = "Tổng số dương là: " + total;
}

// Bài 2: Đếm có bao nhiêu số dương trong mảng
function btnCount() {
  // Kiểm tra mảng rỗng
  if (listNumber.length === 0) {
    return alert("Không để mảng rỗng");
  }

  // Output: Tạo biến tích lũy count = 0
  var count = 0;

  // Process: Duyệt mảng listNumber, kiểm tra phần tử trong mảng có phải là số dương, nếu true -> tăng biến count lên 1 đơn vị
  for (var index = 0; index < listNumber.length; index++) {
    if (listNumber[index] > 0) {
      count++;
    }
  }

  // Hiện thị kết quả ra giao diện
  domID("txtCount").innerHTML = "Số lượng số dương: " + count;
}

// Bài 3: Tìm số nhỏ nhất trong mảng
function btnFindMin() {
  // Kiểm tra mảng rỗng
  if (listNumber.length === 0) {
    return alert("Không để mảng rỗng");
  }

  // Output: Tạo biến tạm minNumber = listNumber[0]
  var minNumber = listNumber[0];

  // Process: Duyệt mảng listNumber, kiểm tra phần tử trong mảng có nhỏ hơn minNumber hay không, nếu true --> minNumber = phần tử đó
  for (var index = 1; index < listNumber.length; index++) {
    if (listNumber[index] < minNumber) {
      minNumber = listNumber[index];
    }
  }
  // Hiển thị kết quả ra giao diện
  domID("txtMin").innerHTML = "Số nhỏ nhất là: " + minNumber;
}

// Bài 4: Tìm số dương nhỏ nhất trong mảng
function btnFindMinPos() {
  // Kiểm tra mảng rỗng
  if (listNumber.length === 0) {
    return alert("Không để danh sách rỗng");
  }

  // Output: Tạo biến tạm minPosNumber
  var minPosNumber = 0;

  // Process: Tạo một mảng mới dùng để chứa các số dương
  var listPosNumber = [];

  // Dùng vòng lặp để lấy các số dương từ mảng cũ và lưu vào trong mảng mới
  for (var index = 0; index < listNumber.length; index++) {
    if (listNumber[index] > 0) {
      listPosNumber.push(listNumber[index]);
    }
  }

  // Gán giá trị biến tạm minPosNumber = listPosNumber[0]
  minPosNumber = listPosNumber[0];

  // Process: Duyệt mảng listPosNumber, kiểm tra các phần tử trong mảng có nhỏ hơn minPosNumber không, nếu true --> minPosNumber = phần tử đó
  for (var j = 1; j < listPosNumber.length; j++) {
    if (listPosNumber[j] < minPosNumber) {
      minPosNumber = listPosNumber[j];
    }
  }

  // Hiện thị kết quả ra giao diện
  if (listPosNumber.length === 0) {
    domID("txtMinPos").innerHTML = "Không có số dương trong mảng";
  } else {
    domID("txtMinPos").innerHTML = "Số dương nhỏ nhất là: " + minPosNumber;
  }
}

// Bài 5: Tìm số chẵn cuối cùng trong mảng
function btnFindEven() {
  // Kiểm tra mảng rỗng
  if (listNumber.length === 0) {
    return alert("Không để danh sách rỗng");
  }

  // Output: Tạo biến lastEvenNumber
  var lastEvenNumber = 0;

  // Process: Tạo mảng mới listEvenNumber dùng để chứa các số chẵn
  var listEvenNumber = [];

  // Dùng vòng lặp để lấy các số chẵn từ mảng cũ vào mảng mới listEvenNumber
  for (index = 0; index < listNumber.length; index++) {
    if (listNumber[index] % 2 === 0) {
      listEvenNumber.push(listNumber[index]);
    }
  }

  // Gán giá trị biến lastEvenNumber = listEvenNumber[listEvenNumber.length - 1]
  lastEvenNumber = listEvenNumber[listEvenNumber.length - 1];

  // Hiện thị kết quả ra giao diện
  if (listEvenNumber.length > 0) {
    domID("txtEven").innerHTML = "Số chẵn cuối cùng là: " + lastEvenNumber;
  } else {
    domID("txtEven").innerHTML = "-1. Mảng không có số chẵn";
  }
}

// Bài 6: Đổi chỗ 2 giá trị trong mảng theo vị trí
function btnChangePos() {
  // Kiểm tra mảng rỗng
  if (listNumber.length === 0) {
    return alert("Không để danh sách rỗng");
  }

  // Dom tới 2 thẻ input để lấy giá trị vị trí
  var index1 = Number(domID("inputIndex1").value);
  var index2 = Number(domID("inputIndex2").value);

  // Process: Tạo biến tạm
  var temp = 0;

  // Gán giá trị của phần tử ở vị trí 1 vào biến tạm
  temp = listNumber[index1];

  // Gán giá trị của phần tử ở vị trí 2 vào vị trí 1
  listNumber[index1] = listNumber[index2];

  // Gán giá trị biến tạm vào vị trí 2
  listNumber[index2] = temp;

  // Hiện kết quả ra giao diện, output là mảng listNumber sau khi thay đổi
  domID("txtChangePos").innerHTML = "Mảng sau khi đổi: " + listNumber;
}

// Bài 7: Sắp xếp mảng theo thứ tự tăng dần
function btnIncrease() {
  // Kiểm tra mảng rỗng
  if (listNumber.length === 0) {
    return alert("Không để danh sách rỗng");
  }

  // Process: Dùng 2 vòng lặp lồng nhau để duyệt và so sánh các phần tử
  for (var i = 0; i < listNumber.length - 1; i++) {
    for (var j = i + 1; j < listNumber.length; j++) {
      // Nếu listNumber[i] > listNumber[j] thì ta hoán đổi vị trí 2 phần tử cho nhau. Áp dụng biến tạm như bài Bài 6
      if (listNumber[i] > listNumber[j]) {
        var temp = listNumber[i];
        listNumber[i] = listNumber[j];
        listNumber[j] = temp;
      }
    }
  }

  // Hiển thị kết quả ra giao diện. output là mảng listNumber sau khi thay đổi
  domID("txtIncrease").innerHTML = "Mảng sau khi sắp xếp: " + listNumber;
}

// Bài 8: Tìm số nguyên tố đầu tiên trong mảng
// Tạo hàm kiểm tra 1 số có phải số nguyên tố hay không
function checkPrime(number) {
  if (number < 2) {
    return false; // Số bé hơn 2 không phải số nguyên tố
  }

  if (number === 2) {
    return true; // Số 2 là số nguyên tố
  }

  if (number % 2 === 0) {
    return false; // Số chia hết cho 2 (ngoại trừ 2) không phải số nguyên tố
  }

  for (i = 3; i <= Math.sqrt(number); i += 2) {
    // number chia hết cho 1 số i trong khoảng từ 3 đến căn bậc 2 của number thì không phải số nguyên tố
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

// Tạo hàm tìm số nguyên tố
function btnFindPrime() {
  // Kiểm tra mảng rỗng
  if (listNumber.length === 0) {
    return alert("Không để danh sách rỗng");
  }

  // output: Tạo biếm prime
  var prime = -1;

  // Process: Duyệt mảng để kiểm tra từng phần tử có phải số nguyên tố không, nếu true --> gán giá trị phần tử đó vào biến prime, break thoát ra khỏi vòng lặp để không duyệt những phần tử tiếp theo trong mảng
  for (var index = 0; index < listNumber.length; index++) {
    if (checkPrime(listNumber[index])) {
      prime = listNumber[index];
      break;
    }
  }

  // Hiển thị kết quả ra giao diện
  if (prime === -1) {
    document.querySelector("#txtPrime").innerHTML = prime;
  } else {
    document.querySelector("#txtPrime").innerHTML =
      "Số nguyên tố đầu tiên trong mảng: " + prime;
  }
}

// Bài 9: Nhập thêm 1 mảng số thực, tìm xem trong mảng có bao nhiêu số nguyên?

// Output: Khai báo mảng listFloat
var listFloat = [];

function btnGetFloat() {
  // Input: Dom tới thẻ input#inputFloat để lấy value
  var number = Number(domID("inputFloat").value);

  // Process: Thêm phần tử vào mảng listFloat
  listFloat.push(number);

  // Hiện thị ra giao diện
  domID("txtFloat").innerHTML = listFloat;
}

// Tạo hàm đếm số nguyên
function btnCountInt() {
  if (listFloat.length === 0) {
    return alert("Nhập số thực");
  }

  // Output: Tạo biến đếm số nguyên countInt
  var countInt = 0;

  // // Process: Duyệt mảng listFloat, kiểm tra phần tử trong mảng có phải là số nguyên, nếu true -> tăng biến countInt lên 1 đơn vị
  for (var index = 0; index < listFloat.length; index++) {
    if (Number.isInteger(listFloat[index])) {
      countInt++;
    }
  }

  // Hiện thị kết quả ra giao diện
  domID("txtInt").innerHTML = "Số lượng số nguyên: " + countInt;
}

// Bài 10: So sánh số lượng số dương và số lượng số âm xem số nào nhiều hơn
function btnCompare() {
  // Output: Tạo 2 biến đếm số dương và số âm
  var posNumber = 0;
  var negNumber = 0;

  // Process: Duyệt mảng listNumber, kiểm tra phần tử trong mảng là số dương hay số âm, nếu số dương thì tăng biến posNumber lên 1 đơn vị, nếu số âm thì tăng biến negNumber lên 1 đơn vị
  for (var index = 0; index < listNumber.length; index++) {
    if (listNumber[index] > 0) {
      posNumber++;
    } else if (listNumber[index] < 0) {
      negNumber++;
    }
  }

  // Hiển thị kết quả ra giao diện
  if (posNumber === negNumber) {
    domID("txtCompare").innerHTML = "Số lượng số dương = Số lượng số âm";
  } else if (posNumber > negNumber) {
    domID("txtCompare").innerHTML = "Số lượng số dương > Số lượng số âm";
  } else if (posNumber < negNumber) {
    domID("txtCompare").innerHTML = "Số lượng số dương < Số lượng số âm";
  }
}

// End
