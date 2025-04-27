import styles from '../ContactList.module.css';
import Contact from '../ContactList/Contact';

export default function ContactList({ contacts, onDelete }) {
  return (
    <div className={styles.container}>
      {contacts.length === 0
        ? <p>Dear Mentor, no such contact found, try again! )))</p>
        : (<ul className={styles.contactList}>
          {contacts.map(contact => {
            return (
              <li key={contact.id} className={styles.listItem}>
                <Contact people={contact} onClickDelete={onDelete} />
              </li>
            )
          })}
        </ul>)
      }
    </div>
  );
}