
// ---   1   ------

for (let i = 0; i < employees.length; i++) {
  if (employees[i]) {
    firstNameOfFirstPerson = employees[i].firstName;
    console.log(firstNameOfFirstPerson);
    break;
  }
}


// --- 2 ---

function lastNameOfLastPerson(index){

    const lastElement = employees.length -1;
    
    const lastNameOfLastPerson = employees[lastElement].lastName
    
    console.log(lastNameOfLastPerson);
}



lastNameOfLastPerson(1)
// --- 3 ---

function theFifthPerson(index){
    const theFifthPerson = employees[index + 1].department
    console.log(theFifthPerson)
}


theFifthPerson(5)


// --- 4 ---

function countEmployees(){
    const countEmployees = employees.length;
    console.log(countEmployees)
}

countEmployees()

// --- 5 ---

function hasInactiveEmployees(){
    for (let i = 0; i < employees.length; i++) {
      if (employees[i].isActive === false) {
        console.log(true)
        return
      }
    }
}

hasInactiveEmployees()


// --- 6 ---


function calculateAverageAge(){
    let calcul = 0;
    for (let i = 0; i < employees.length; i++) {
        calcul += employees[i].age
    }
    let result = calcul / employees.length
    console.log(result) 
}

calculateAverageAge()



// --- 7 ---

function getHighestPaidEmployee(){
    let highest = 0
    for (let i = 0; i < employees.length; i++) {
        if (employees[i].salary > employees[highest].salary){
            highest = i
        }
    }
    console.log(employees[highest])
}

getHighestPaidEmployee()


// --- 8 ---


function countEmployeesInDepartment(seaarch){
    let counter = 0
     for (let i = 0; i < employees.length; i++) {
        if (employees[i].department == seaarch){
            counter++
        }
    }
    console.log(counter)
}

countEmployeesInDepartment("Développement")



// --- 9 ---

function getUniqueDepartments(){
    let arr = []
    for (let i = 0; i < employees.length; i++) {
        if (arr.includes(employees[i].department)){
        }else{
            arr.push(employees[i].department)
        }
    }
    console.log(arr)
}

getUniqueDepartments()



// --- 10 ---

function hasEmployeesWithoutProjects(){
    let withProject = false
    for (let i = 0; i < employees.length; i++) {
        if(employees[i].projects.length === 0){
            withProject = true
            break
        }
    }
    console.log(withProject)
}

hasEmployeesWithoutProjects()


