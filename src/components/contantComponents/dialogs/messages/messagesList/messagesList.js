import styles from "../messages.module.css";
import Message from "./message/message";
import Messages from "../messages";

const messageList = (props) => {
    let messageListState = [
        {id: 0, text: 'lorem1fdsdsfsfsdfdsdsfdsfs', isYou: true},
        {id: 1, text: 'lorsdfsdfsdfdsfdsfdsfsdfem1fdsdsfsfsdfdsdsfdsfs', isYou: true},
        {id: 2, text: 'lorem1fdsdsfsfsdfdsdsfdsfs', isYou: false},
        {id: 3, text: 'lordfsdfsdsfdsfem1fdsdsfsfsdfdsfsdfdsdsfdsfs', isYou: true},
        {id: 4, text: 'lorem1fdsdsfsfdfsfdsfsdfdsdsfdsfs', isYou: false},
        {id: 5, text: 'lordsfdsfem1fdsdsfsfsdfdsdsfdsfs', isYou: false},
        {id: 6, text: 'lorem1fdsdsfsfsdfdsdsfdsfs', isYou: true},
        {id: 7, text: 'lorem1ffdssssssssssssffffffdsdsffdsfsdfsfsdfdsdsfdsfs', isYou: false},
    ]

    let messageListComponents = messageListState.map((message) => <Message isYou={message.isYou} messageText={message.text} />)
    return (
        <div className={styles.messagesList}>
            {messageListComponents}
        </div>
    )
}

export default messageList;