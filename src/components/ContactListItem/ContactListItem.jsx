import css from './ContactListItem.css'

export const ContactListItem = ({ id, name, number, handleDelete })  => {
    return (
        <li id={id}>
            {name}: {number}
            
        <button
            type='button'
            onClick={handleDelete}
            >Delete
            </button>
        </li>
    )
}