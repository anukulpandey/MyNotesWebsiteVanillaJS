console.log('This is My Notes');
showNotes();
let addNote = document.getElementById('addNote');
addNote.addEventListener('click', function (e) {
    let textArea = document.getElementById('textArea');
    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(textArea.value);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    textArea.value = "";

    showNotes();
})

function showNotes() {
    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
        <div class="card noteText noteCard" style="width: 20 rem;margin-top: 1vh;display:inline-block">
            <div class="card-body" style="background-color:"blue">
              <h5 class="cardTitle" id="cardTitle" onclick="crud(this.id)">Note-${index + 1}</h5>
              <p class="card-text cardText noteText">${element}</p>
              <a href="#" class="btn btn-primary" id="${index}" onclick="deleteNote(this.id)">Delete Note</a>
            </div>
          </div>
        `;
    }
    );
    let notesElem = document.getElementById('notes');
    if (notesObj.length == 0) {

        let noNotes = document.getElementById('notes');
        noNotes.innerHTML = `<h5 style="margin:auto;">No notes here please add new notes</h3>`
    }
    else {
        notesElem.innerHTML = html;
    }
}

function deleteNote(index) {

    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    showNotes();

}

let searchText = document.getElementById('searchText');
searchText.addEventListener('input', function (e) {
    let inputVal = searchText.value.toLowerCase();
    console.log(inputVal);

    let noteCards = document.getElementsByClassName('noteCard');

    Array.from(noteCards).forEach((element) => {
        let cardTxt = element.getElementsByTagName("p")[0].innerText;

        if (cardTxt.includes(inputVal)) {
            element.style.display = 'block';
        }
        else {
            element.style.display = 'none';
        }
    });

});

// console.log(cardTitle);

let cardTitle= document.getElementById('cardTitle');
console.log(cardTitle.innerHTML);
function crud(index) {
    let html = cardTitle.getElementsByTagName('h5')
    console.log(html);
    
    cardTitle.innerHtml = 'anukul';
    // cardTitle.innerHtml = `<textarea class="form-control textArea" id="textArea" rows="3">${html}</textarea>`;
}