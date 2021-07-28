//Your Notes 
let titleNote = document.querySelector('.titleNote');
let contentNote = document.querySelector('.contentNote');
let allNote = document.querySelector('.yourNotes');
const delNote = document.querySelector('.delNotes')

const addNote = () => {
    if (titleNote.value === '' ||  contentNote.value === ''){
        alert('Please fill all the campus')
    } else{
        let title = document.createElement('h3');
        title.innerHTML = titleNote.value;
        let note = document.createElement('p');
        note.innerHTML = contentNote.value

        titleNote.value ='';
        contentNote.value = '';

        let newNote = document.createElement('div')
        newNote.classList.add('note')
        newNote.appendChild(title)
        newNote.appendChild(note)
        allNote.insertBefore(newNote, allNote.childNodes[0])

    }
}

delNote.addEventListener('click', () =>{
    allNote.textContent = '';
})

document.body.addEventListener('keydown', (e) =>{
    if (e.keyCode == 13) {
      addNote();
    }
});