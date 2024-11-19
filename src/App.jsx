import { useState } from 'react';

function Todo() {
    const [notes, setNotes] = useState([
        { id: 1, note: 'Note 1' },
        { id: 2, note: 'Note 2' },
        { id: 3, note: 'Note 3' },
    ]);

    const [note, setNote] = useState('');

    const handleDelete = (id) => {
        setNotes(notes.filter((note) => note.id !== id));//exclude note with matching id
    }

    const handleAdd = () => {
        if (note !== '') {
            setNotes([...notes, { id: notes.length + 1, note: note }]);
            setNote('');
        }
    }

    return (
        <div>
            <h1 className='toDoText'>Todo List</h1>
            <div>
                <div>
                    <input type="text" placeholder="Note" value={note}onChange={(e) => setNote(e.target.value)}/>
                    <button type="button" onClick={handleAdd}>Add</button>
                </div>
                <div>
                    <ul>
                        {notes.map((note) => (
                          <li key={note.id}>{note.note}
                                <div>
                                    <button type="button" onClick={() => handleDelete(note.id)}>Delete</button>
                                </div>
                          </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Todo;
