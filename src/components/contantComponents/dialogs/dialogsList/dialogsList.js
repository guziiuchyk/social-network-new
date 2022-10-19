import styles from "./dialogsList.module.css";
import Dialog from "./dialog/dialog";

const dialogsList = () => {
    let dialogsListState = [
        {id: 0, name: 'Nazar'},
        {id: 1, name: 'Ivan'},
        {id: 2, name: 'Vasya'},
        {id: 3, name: 'Myloka'}
    ];

    let dialogsListUser = dialogsListState.map((user => <Dialog id={user.id} name={user.name} />))
    return (
        <div className={styles.dialogsList}>
            {dialogsListUser}
        </div>
    )
}

export default dialogsList;