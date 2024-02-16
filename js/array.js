//array
let arrStd = new Array('Chiso','Kang','Chipor');
console.log(arrStd[1]);

let arrEmp = ['Chiso','Kang','Chipor'];
console.log(arrEmp[2]);

let printName = document.querySelector('#printName');
arrEmp.forEach((item)=>{
    printName.innerHTML += `<p>Name: ${item}</p>`;
});