const buildPage = () => {

  const title = document.querySelector('title');
  title.textContent = 'Age average';

  const app = document.getElementById('main');

  const formContainer = document.createElement('div');
  formContainer.className = 'form-container';

  const form = document.createElement('form');
  form.id = 'person-form';

  const nameField = document.createElement('input');
  nameField.id = 'name';
  nameField.placeholder = 'Name';
  form.appendChild(nameField);

  const toggleContainer = document.createElement('div');
  toggleContainer.className = 'toggle-container';

  const gender = document.createElement('label');
  gender.className = 'label';
  gender.textContent = 'Gender';
  toggleContainer.appendChild(gender);

  const genderToggle = document.createElement('input');
  genderToggle.type = 'checkbox';
  genderToggle.id = 'gender-toggle';
  genderToggle.className = 'toggle-checkbox';
  toggleContainer.appendChild(genderToggle);

  const labelGenderToggle = document.createElement('label');
  labelGenderToggle.htmlFor = 'gender-toggle';
  labelGenderToggle.className = 'toggle-label';
  labelGenderToggle.textContent = 'Female';
  toggleContainer.appendChild(labelGenderToggle);

  form.appendChild(toggleContainer);

  const age = document.createElement('input');
  age.type = 'number';
  age.id = 'age';
  age.placeholder = 'Age';
  form.appendChild(age);

  const submitButton = document.createElement('button');
  submitButton.type = 'submit';
  submitButton.id = 'button';
  submitButton.textContent = 'Send';
  form.appendChild(submitButton);

  formContainer.appendChild(form);

  app.appendChild(formContainer);

  const dataContainer = document.createElement('div');
  dataContainer.className = 'data-container';

  const tableContainer = document.createElement('div');
  tableContainer.className = 'table-container';

  const table = document.createElement('table');
  table.id = 'person-table';

  const caption = document.createElement('caption');
  caption.textContent = 'People';
  table.appendChild(caption);

  const thead = document.createElement('thead');

  const columns = document.createElement('tr');

  const columnNames = document.createElement('th');
  columnNames.textContent = 'Name';
  columns.appendChild(columnNames);

  const columnGenders = document.createElement('th');
  columnGenders.textContent = 'Gender';
  columns.appendChild(columnGenders);

  const columnAges = document.createElement('th');
  columnAges.textContent = 'Age';
  columns.appendChild(columnAges);

  thead.appendChild(columns);

  table.appendChild(thead);

  const tbody = document.createElement('tbody');
  tbody.id = 'person-list';
  table.appendChild(tbody);

  tableContainer.appendChild(table);

  dataContainer.appendChild(tableContainer);

  const average = document.createElement('span');
  average.id = 'average-age';
  average.textContent = 'Age average: 0.00';
  dataContainer.appendChild(average);

  app.appendChild(dataContainer);
}

const app = (page) => {

  page();

  const form = document.getElementById("person-form");
  const personList = document.getElementById("person-list");
  const averageAge = document.getElementById("average-age");
  const genderToggle = document.getElementById("gender-toggle");
  const genderLabel = document.querySelector(".toggle-label");
  const button = document.getElementById("button");

  const people = [];

  const calculateAverageAge = () => {
    const totalAge = people.reduce((sum, person) => sum + person.age, 0);
    const average = totalAge / people.length;
    return average.toFixed(2);
  };

  const updateTableAndAverage = () => {
    personList.innerHTML = "";

    people.forEach(person => {
      const newRow = document.createElement("tr");

      const nameRow = document.createElement("td")
      nameRow.textContent = person.name;
      newRow.appendChild(nameRow);

      const genderRow = document.createElement("td")
      genderRow.textContent = person.gender;
      newRow.appendChild(genderRow);

      const ageRow = document.createElement("td")
      ageRow.textContent = person.age;
      newRow.appendChild(ageRow);

      personList.appendChild(newRow);
    });

    averageAge.textContent = `Age average: ${calculateAverageAge()}`;
  };

  genderToggle.addEventListener("change", () => {
    if (genderToggle.checked) {
      genderLabel.textContent = "Male";
    } else {
      genderLabel.textContent = "Female";
    }
  });

  form.addEventListener("submit", event => {
    event.preventDefault();

    const name = document.getElementById("name");
    const gender = genderToggle.checked ? "Male" : "Female";
    const age = document.getElementById("age");

    if (name.value === "" || age.value === "") {
      alert("Please, complete all fields");
      return;
    }

    const person = {
      name: name.value,
      gender: gender,
      age: parseInt(age.value),
    };

    people.push(person);

    updateTableAndAverage();

    const tempButtonStyle = () => {
      button.setAttribute("style", "background: green;");
      button.textContent = "Sent";
      setTimeout(() => {
        button.removeAttribute("style");
        button.textContent = "Send";
      }, 500);
    };

    form.reset();
    tempButtonStyle();
    genderLabel.textContent = "Female";
    name.focus();
  });
}

document.addEventListener("DOMContentLoaded", app(buildPage));
