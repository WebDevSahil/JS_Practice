const bookForm = document.querySelector('#book-form').addEventListener('submit', addBook);
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const isbn = document.querySelector('#isbn');
const bookList = document.querySelector('#book-list');

// Add a Book
function addBook(e) {
  e.preventDefault();


  if (author.value === '' || title.value === '' || isbn === '') {
    showMessage('Please fill in all the fields...', 'red');

    // console.log('Emtpy Fields');
  } else {
    const tr = document.createElement('tr');

    output = `
      <td>${title.value}</td>
      <td>${author.value}</td>
      <td>${isbn.value}</td>
      <td><a href="#"><i class="far fa-trash-alt delete"></i></a></td>
    `;

    // Append output to the tr element
    tr.innerHTML = output;

    // Append tr element to the table
    bookList.appendChild(tr);

    // Clear all the Fields
    clearFields();

    // Show success message
    showMessage('Book Added', 'green');
  };
};

// Remove a Book
bookList.addEventListener('click', (e) => {

  // Check if the element has the delete class 
  if (e.target.classList.contains('delete')) {
    // console.log('Delete...');

    // Delete the row
    e.target.parentElement.parentElement.parentElement.remove();

    // Show message
    showMessage('Book Removed', 'green');
  }
});

function showMessage(message, className) {
  const div = document.createElement('div');

  // Add classes to the div
  div.className = `ui ${className} message`;

  // Append message to the div
  div.appendChild(document.createTextNode(message));

  const container = document.querySelector('.container');
  const form = document.querySelector('#book-form');

  container.insertBefore(div, form);

  // Shake the message div
  $('.red.message').transition('shake');

  $('.green.message').transition('bounce');

  // Remove the message after 2 seconds
  setTimeout(() =>
    document.querySelector('.message').remove(), 3000);

}

// Clear the fields
function clearFields() {
  author.value = '';
  title.value = '';
  isbn.value = '';
}