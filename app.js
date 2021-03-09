'use strict';
let total = 0;
function Student(email,mobile,tuition) {
    this.email = email;
    this.mobile = mobile;
    this.tuition = tuition;
    this.age = Math.floor( Math.random()*100);
    this.name = email.substring(0, email.lastIndexOf("@"));
    Student.all.push(this);
}

let newStudent;
 Student.all = [];
let id = []

Student.prototype.savetoLocal = function () {
    localStorage.setItem('studentList',JSON.stringify(Student.all))
}
Student.prototype.getfromLocal = function () {
   JSON.parse( localStorage.getItem('studentList'))
}

Student.prototype.renderTable = function () {
    let table = document.getElementById('container');
    for (let i = 0; i < Student.all.length; i++) {
        let Etr1 = document.createElement('tr');
        Etr1.id = i+1;
table.appendChild(Etr1);
let Etd1 = document.createElement('td')
Etr1.appendChild(Etd1);
Etd1.textContent = Student.all[i].name;

let Etd2 = document.createElement('td')
Etr1.appendChild(Etd2);
Etd2.textContent = Student.all[i].email;

let Etd3 = document.createElement('td')
Etr1.appendChild(Etd3);
Etd3.textContent = Student.all[i].mobile;

let Etd4 = document.createElement('td')
Etr1.appendChild(Etd4);
Etd4.textContent = Student.all[i].age;

let Etd5 = document.createElement('td')
Etr1.appendChild(Etd5);
Etd5.textContent = Student.all[i].tuition;
total=total + Student.all[i].tuition;
    }
    let footer = document.createElement('tr')
    table.appendChild(footer)
    let td33 = document.createElement('td')
    footer.appendChild(td33);
    td33.textContent= 'Total:'
    td33.id = 'footerTotal'
    let td22 = document.createElement('td')
    footer.appendChild(td22);
    td22.textContent= this.total;
}

let conForm = document.getElementById("form1")
conForm.addEventListener('submit',submitHandler)
function submitHandler(event) {
    event.preventDefault();
    let email1 = event.target.email.value;
    let mobile1 = event.target.mobileNo.value;
    let tuition1 = event.target.tuitionFees.value;
    newStudent = new Student (email1,mobile1,tuition1)
    newStudent.savetoLocal();
    newStudent.getfromLocal();
    newStudent.renderTable();

}

