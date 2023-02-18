const data = JSON.parse(dataInfo);

const content = document.querySelector('.content');

data.forEach(element => {
    const nameStudent = document.createElement('div');
    const image = document.createElement('img');
    const birthday = document.createElement('div');
    const faculty = document.createElement('div');

    const contentEl = document.createElement('div');
    contentEl.classList.add('contentEl');
    image.classList.add('image');

    nameStudent.textContent = `Имя студента: ${element.nameStudent}`;
    image.src = element.image;
    birthday.textContent = `День рождения: ${element.birthday}`;
    faculty.textContent = `Программа обучения: ${element.faculty}`;

    content.appendChild(contentEl);
    contentEl.appendChild(image);
    contentEl.appendChild(nameStudent);
    contentEl.appendChild(birthday);
    contentEl.appendChild(faculty);
});
