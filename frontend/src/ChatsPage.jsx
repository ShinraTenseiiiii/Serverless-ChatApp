import { PrettyChatWindow } from 'react-chat-engine-pretty'
        
const ChatsPage = (props) => {

    return (<div style={{height: '100vh'}}>
       
       <PrettyChatWindow 
       projectId='16030725-d99e-4f9b-87d1-ada7bae71f9a'
       username={props.user.username}
       secret={props.user.secret}
       style={{height: '100%'}} />

    </div>)
}
export default ChatsPage