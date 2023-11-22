import { PrettyChatWindow } from "react-chat-engine-pretty"

const ChatsPage = (props) => {
   
    return <div style={{ height: '100vh' }}>
        <PrettyChatWindow
      projectId="646e1a6c-2cff-47fa-ba95-0fb04e3ea857"
      username={props.user.username}
      secret={props.user.secret}
      style={{ height: '100%' }}
    />
    </div>
}
export default ChatsPage