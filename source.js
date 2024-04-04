let employees = [];

function addEmployee() {
    const name = document.getElementById('name').value;
    const profession = document.getElementById('profession').value;
    const age = parseInt(document.getElementById('age').value);

    if (!name || !profession || isNaN(age)) {
        document.getElementById('errorMessage').innerText = "Error : Please Make sure All the fields are filled before adding in an employee !";
        document.getElementById('errorMessage').style.display = 'block';
        document.getElementById('successMessage').style.display = 'none';
        return;
    }

    const newEmployee = {
        id: Date.now(),
        name,
        profession,
        age
    };

    employees.push(newEmployee);
    renderEmployees();
    
    document.getElementById('successMessage').innerText = "Success : Employee Added!.";
    document.getElementById('successMessage').style.display = 'block';
    document.getElementById('errorMessage').style.display = 'none';

    document.getElementById('name').value = '';
    document.getElementById('profession').value = '';
    document.getElementById('age').value = '';
}

function deleteEmployee(id) {
    employees = employees.filter(employee => employee.id !== id);
    renderEmployees();
}

function renderEmployees() {
    const employeeList = document.getElementById('employeeList');
    employeeList.innerHTML = '';
    if (employees.length === 0) {
        employeeList.innerHTML = 'You have 0 Employees.';
    } else {
        employees.forEach((employee,index) => {
            const div = document.createElement('div');
            div.className = 'employee';
          
            div.innerHTML = `
            <div class="employee-details">
                <span>${index+1}: </span>
                <span class="spaces">Name: ${employee.name}</span>
                <span class="spaces">Profession: ${employee.profession}</span>
                <span class="spaces">Age: ${employee.age}</span>
            </div>
            <button class="delete-btn" onclick="deleteEmployee(${employee.id})">Delete User</button>`;
            employeeList.appendChild(div);
        });
    }
}

document.addEventListener('DOMContentLoaded', renderEmployees);
document.getElementById('addEmployeeBtn').addEventListener('click', addEmployee);
