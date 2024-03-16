let tbody = document.querySelector('tbody');
let addBtn = document.querySelector('.add');
let form = document.querySelector('.form-wrapper');
let saveBtn = document.querySelector('.save');
let cancelBtn =  document.querySelector('.cancel');
let nameEle =  document.querySelector('#name');
let ageEle =  document.querySelector('#age');
let emailEle =  document.querySelector('#email');
let dobEle =  document.querySelector('#dob');
  

let httpm =null;

let url ='http://localhost:3000/employee';

let employees =[];

let id=null;

let data ={};

addBtn.onclick = function(){
    httpm="POST";
    clearForm();
    form.classList.add('active')
}


cancelBtn.onclick = function(){
    form.classList.remove('active')
}

saveBtn.onclick= function(){

    data.name= nameEle.value;
    data.age= ageEle.value;
    data.email = emailEle.value;
    data.dob = dobEle.value;
    console.log("-------111111111",data)
    if(httpm=="PUT"){
        data.id= id
    }

    
    fetch(url,
        { 
            method: httpm, body: JSON.stringify(data), 
            headers: { "Content-type": "application/json" } 
        })
    .then(()=>{
        clearForm();
        form.classList.remove('active');
        getemployees()
    })


}

function clearForm(){
    nameEle.value =null;
    ageEle.value =null;
    emailEle.value= null;
    dobEle.value =null;
}



function getemployees(){
    fetch(url)
    .then(response=>response.json())
    .then(data=>{
        console.log("==========",data)
        employees = data;
        updateTable();

    })

    
}

getemployees();

function updateTable(){
    let data="";

    if(employees.length>0){
        for(i= 0;i<employees.length;i++){

            data+=  `<tr id="${employees[i]['id']}">
                        <td>${employees[i]['name']}</td>
                        <td>${employees[i]['age']}</td>
                        <td>${employees[i]['email']}</td>
                        <td>${convertDateFormat(employees[i]['dob'])}</td>
                        <td><button class="btn btn-primary" onclick="editMobile(event)">Edit</button></td>
                        <td><button class="btn btn-danger" onclick="deleteMobile(event)">Delete</button></td>   
                     </tr>`
        }

     tbody.innerHTML=data;
    }

}
function convertDateFormat(dateTimeString) {
    var dateTimeParts = dateTimeString.split("T");
    var dateParts = dateTimeParts[0].split("-");
    return dateParts[2] + "/" + dateParts[1] + "/" + dateParts[0];
  }
function editMobile(e){
   form.classList.add('active');
   httpm="PUT"
   id= e.target.parentElement.parentElement.id;
  let selectedEmployee = employees.filter((m)=>{return m['id'] ==id})[0];
  nameEle.value= selectedEmployee.name;
  ageEle.value = selectedEmployee.age;
  emailEle.value = selectedEmployee.email;
  dobEle.value = selectedEmployee.dob;


   

}

function deleteMobile(e){
    id= e.target.parentElement.parentElement.id;
     fetch(url+"/"+id, {method:'DELETE'})
     .then(
        ()=>{
            getemployees()
        }
     )

}