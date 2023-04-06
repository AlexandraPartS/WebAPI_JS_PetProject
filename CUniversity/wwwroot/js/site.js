const uri = 'api/students';
const uri2 = 'api/students/';
let studentsList = [];

function getItems() {
    fetch(uri)
        .then(response => response.json())
        .then(data => _displayItems(data))
        .catch(error => console.error('Unable to get items.', error));
}

function getItemInfo() {
    let url = new URL(document.documentURI);
    let id = url.searchParams.get('id');
    console.info(uri2 + id);
    fetch(uri2 + id)
        .then(response => response.json())
        .then(response => _displayItemInfo(response))
        .catch(error => console.error('Unable to get items.', error));
}

function _displayCount(itemCount) {
    const name = (itemCount === 1) ? '1 page' : '1 page';
    document.getElementById('counter').innerText = `[${itemCount}] ${name}`;
}

function _displayItemInfo(item) {

    const tBody = document.getElementById('studentInfo');
    const tBody2 = document.getElementById('enrollmentsList');
    tBody.innerHTML = '';
    tBody2.innerHTML = '';

    const button = document.createElement('button');
    const ahref = document.createElement('a');

    let editButton = button.cloneNode(false);
    editButton.innerText = 'Edit';
    editButton.setAttribute('onclick', `displayEditForm(${item.id})`);

    let deleteButton = button.cloneNode(false);
    deleteButton.innerText = 'Delete';
    deleteButton.setAttribute('onclick', `deleteItem(${item.id})`);

    let arr = [];
    item.enrollments.forEach((item, index, array) => {
        console.log(`У ${item} индекс ${index} в ${array}`);
        console.log(item.course.title);

        let tr = tBody2.insertRow();

        let td1 = tr.insertCell(0);
        td1.innerHTML = item.course.title;

        let td2 = tr.insertCell(1);
        td2.innerHTML = item.grade;
    });


    let tr = tBody.insertRow();

    let td1 = tr.insertCell(0);
    td1.innerHTML = item.lastName;

    let td2 = tr.insertCell(1);
    td2.innerHTML = item.firstMidName;

    let td3 = tr.insertCell(2);
    td3.innerHTML = item.enrollmentDate;

    let td4 = tr.insertCell(3);
    td4.appendChild(editButton);

    let td5 = tr.insertCell(4);
    td5.appendChild(editButton);

    let td6 = tr.insertCell(5);
    td6.appendChild(deleteButton);

}

function _displayItems(data) {
    const tBody = document.getElementById('studentsList');
    tBody.innerHTML = '';

    _displayCount(data.length);

    const button = document.createElement('button');
    const ahref = document.createElement('a');

    data.forEach(item => {
        let detaillink = ahref.cloneNode(false);
        detaillink.innerText = '     Details    |';
        detaillink.setAttribute('href', `/studentPage.html?id=${item.id}`);

        let editButton = ahref.cloneNode(false);
        editButton.innerText = '     Edit     |';
        editButton.setAttribute('href', `displayEditForm(${item.id})`);

        let deleteButton = button.cloneNode(false);
        deleteButton.innerText = 'Delete';
        deleteButton.setAttribute('onclick', `deleteItem(${item.id})`);


        let tr = tBody.insertRow();

        let td1 = tr.insertCell(0);
        td1.innerHTML = item.lastName;

        let td2 = tr.insertCell(1);
        td2.innerHTML = item.firstMidName;

        let td3 = tr.insertCell(2);
        td3.innerHTML = item.enrollmentDate;

        let td4 = tr.insertCell(3);
        td4.appendChild(detaillink);

        let td5 = tr.insertCell(4);
        td5.appendChild(editButton);

        let td6 = tr.insertCell(5);
        td6.appendChild(deleteButton);

    });

    studentsList = data;
}