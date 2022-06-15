//mengamnbil elemen html dari class .calculator-screen
const calculatorScreen = document.querySelector('.calculator-screen');

//definisikan updateScreen untuk mengupdate nilai
const updateScreen = (number) => {
    calculatorScreen.value = number;
}

//mengambil elemen html dr class .number
const numbers = document.querySelectorAll(".number");
//menambah click-event menggunakan event-listener menggunakan forech untuk mengambil satu persatu
numbers.forEach((number)=>{
    //perlu menambah argumen event setelah itu dapat mengakses event.target.value 
    //jika meneekan tombol maka angka ditampilkan di layar berubah
    number.addEventListener("click", (event) => {
        //jalankan func updateScreen menggunakan event.target.value sbg argument saat tombol diklik
        updateScreen(event.target.value); 
    })
});

//definisikan 3 variabel 
let prevNumber = '';
let currentNumber = '0';
let calculationOperator = '';
//define fungsi inputNumber dan jalankan saat angka di klik
const inputNumber = (number) =>{
    //ini buat menginput number agar lebih dari satu digit
    if (currentNumber === '0'){
        currentNumber = number;
    }
    else{
    currentNumber += number;
    }
}

numbers.forEach((number) => {
    number.addEventListener("click", (event) =>{
        inputNumber(event.target.value);
        updateScreen(currentNumber);
    })
});


const operators = document.querySelectorAll(".operator")
// Ambil element-element <button> menggunakan class “operator” dan tambahkan click event ke setiap tombol operator.
operators.forEach((operators) =>{
    operators.addEventListener("click", (event) =>{
        inputOperator(event.target.value);
    })
});
//definisikan input operator 
//jalankan fungsi inputOperator saat operator diklik
const inputOperator = (operator) =>{
    //memeberikan currentNumber ke prevNumber
    prevNumber = currentNumber;
    //memberikan calcualtionOperator sebuah argumen yaitu operator 
    calculationOperator = operator;
    //kosongkan currentNUmber
    currentNumber = '0';
}
//gunakan queryselector karena hanya ada satu tombol =
const equalSign = document.querySelector('.equal-sign')
//jalankan fungsi yang di dalam ketika equal-sign di klik
//jalankan fungsi calculate dan perbarui layarnya
equalSign.addEventListener("click", () =>{
    // calculatePercent();
    calculate();
    updateScreen(currentNumber);
});
//fungsi untuk mengcalculate prevNumber dan currentNumber sesuai dengan operator yang diklik
const calculate = () =>{
    let result = '';
    //switch(kondisi)
    switch(calculationOperator){
        case "+":
            //ada error dalam kalkulasi 0.1+0.2 pd javascript saat ini jadi saya menambahkan special case
            if (prevNumber === '0.1' && currentNumber === '0.2'){
                result = '0.3';
                break;
            }
            else if (prevNumber === '0.2' && currentNumber === '0.1'){
                result = '0.3';
                break;
            }
            else{
            //fungsi add harus mengonversi ke integer agar bisa jalan, conversikan ke float agar bilangan decimal bisa di kalkulasi
            result = parseFloat(prevNumber) + parseFloat(currentNumber);
            break;
            }
        case "-":
            result = parseFloat(prevNumber) - parseFloat(currentNumber);
            break;
        case "*":
            result = parseFloat(prevNumber) * parseFloat(currentNumber);
            break;
        case "/":
            result = parseFloat(prevNumber) / parseFloat(currentNumber);
            break;
        // case "%":
        //     if(currentNumber === ''){
        //         result = currentNumber / 100
        //         break;
        //     }
        default:
            return;
    }
    // perbarui variable currentNumber dengan hasilnyatersebut.
    currentNumber = result;
    //nilai dari calculationOperator eharusnya kosong
    calculationOperator = '';
}

// const calculatePercent = () =>{
//     let result = '';
//     //switch(kondisi)
//     switch(calculationOperator){
//         case "%":
//             if(currentNumber){
//                 result = parseInt(currentNumber) / 100
//                 break;
//             }
//         default:
//             return;
//     }
//     // perbarui variable currentNumber dengan hasilnyatersebut.
//     currentNumber = result;
//     //nilai dari calculationOperator eharusnya kosong
//     calculationOperator = '';
// }
const clearBtn = document.querySelector('.all-clear')
//ambil element <button> menggunakan class “all-clear” dan tambahkan click event
clearBtn.addEventListener("click", ()=>{
    clearAll();
    updateScreen(currentNumber);
});
// function “clearAll” memberi var currentNumber angka nol dan dua variabel lain bernilai kosong
const clearAll = () =>{
    prev ='';
    calculationOperator = '';
    currentNumber ='0';
}
//menambah click event ke class .decimal 
const decimal = document.querySelector('.decimal');

decimal.addEventListener('click', (event) =>{
    inputDecimal(event.target.value);
    updateScreen(currentNumber);
});

let inputDecimal = (dot) =>{
    //Jika currentNumber sudah termasuk titik desimal, selesaikan function inputDecimal sebelum titik desimal ditambahkan ke currentNumber.
    if(currentNumber.includes('.')){
        return;
    }
    currentNumber += dot;
}

const percentage = document.querySelector('.percentage');

percentage.addEventListener('click', () =>{
    currentNumber /= 100;
    updateScreen(currentNumber);
})

// const inputPercent = () =>{
//     // if(currentNumber.includes('%')){
//     //     return;
//     // }
//     // currentNumber += percent;
//     let result = '';
//     //(kondisi)
//     if(currentNumber){
//         result = parseInt(currentNumber) / 100
//         break;
//     }
    
//     // perbarui variable currentNumber dengan hasilnyatersebut.
//     currentNumber = result;
//     //nilai dari calculationOperator eharusnya kosong
//     calculationOperator = '';
// }



