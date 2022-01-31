const taskManager = new TaskManager(0)

/* taskManager.addTask("Task6", "Task 6 Description", "Ibrahim", "2020-02-01", "In Progress"); */
// console.log(taskManager.tasks);

/* let taskHtml = createTaskHtml(
  "Task6",
  "Task 6 Description",
  "Ibrahim",
  "2020-02-01",
  "In Progress"
);
console.log(taskHtml);
 */


// Dispaly of today date on the index.html
const toDayDate = new Date();
let gb = toDayDate.toLocaleDateString("en-GB");
var dateDisplay = document.querySelector("#dateDisplay");
let span = document.createElement("SPAN");
span.innerHTML = gb;
dateDisplay.appendChild(span);



const form = document.querySelector("#new-task-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const validateName = document.querySelector("#new-task-name");
  const validateDescription = document.querySelector("#new-task-description");
  const validateAssignedTo = document.querySelector("#new-task-assigned-to");
  const validateDueDate = document.querySelector("#new-task-due-date");
  const validateStatus = document.querySelector("#new-task-status");
  let validationFail = 0;

// Call this to clear all the form fields after the submission
  const clearFormFields = () => {
    validateName.value = "";
    validateDescription.value = "";
    validateAssignedTo.value = "";
    validateStatus.value = "In Progress";
    validateDueDate.value = "";
    validateName.classList.remove("is-valid");
    validateDescription.classList.remove("is-valid");
    validateAssignedTo.classList.remove("is-valid");
    validateStatus.classList.remove("is-valid");
    validateDueDate.classList.remove("is-valid");
  };

  console.log("Task Name :" + validateName.value.length);
  console.log("Task Description :" + validateDescription.value.length);
  console.log("Task Assigned To :" + validateAssignedTo.value.length);
  console.log("Task Due Date :" + validateDueDate.value);
  console.log("Task Status:" + validateStatus.value);

  const isValid = validFormFieldInput(
    validateName,
    validateDescription,
    validateAssignedTo,
    validateDueDate,
    validateStatus
  );
  if (isValid > 0) {
    validationFail = 0;
    return;
  } else {
    // Push the valid input into our tasks array
    taskManager.addTask(
      validateName.value,
      validateDescription.value,
      validateAssignedTo.value,
      validateDueDate.value,
      validateStatus.value
    );
    clearFormFields();
    taskManager.render();
  }
});





function validFormFieldInput(name, description, assignedTo, dueDate, status) {
  // Form validation for Task Name Field min length 5
  if (name.value.length > 5) {
    name.classList.add("is-valid");
    name.classList.remove("is-invalid");
  } else {
    name.classList.add("is-invalid");
    name.classList.remove("is-valid");
    validationFail++;
  }

  // Form validation for Task Description Field min length 5
  if (description.value.length > 5) {
    description.classList.add("is-valid");
    description.classList.remove("is-invalid");
  } else {
    description.classList.add("is-invalid");
    description.classList.remove("is-valid");
    validationFail++;
  }

  // Form validation for Task Assigned Field min length 5
  if (assignedTo.value.length > 5) {
    assignedTo.classList.add("is-valid");
    assignedTo.classList.remove("is-invalid");
  } else {
    assignedTo.classList.add("is-invalid");
    assignedTo.classList.remove("is-valid");
    validationFail++;
  }
  // Form validation for Due Date Field not empty
  // try your own validation for a date in the future
  if (dueDate.value) {
    dueDate.classList.add("is-valid");
    dueDate.classList.remove("is-invalid");
  } else {
    dueDate.classList.add("is-invalid");
    dueDate.classList.remove("is-valid");
    validationFail++;
  }
  // Form validation for Task Status Field not empty
  if (status.value) {
    status.classList.add("is-valid");
    status.classList.remove("is-invalid");
  } else {
    status.classList.add("is-invalid");
    status.classList.remove("is-valid");
    validationFail++;
  }
}
