import { PrettyChatWindow } from 'react-chat-engine-pretty'
        
const ChatsPage = (props) => {

    return (<div style={{height: '100vh'}}>
       
       <PrettyChatWindow 
       projectId= {'a324128d-0753-426d-880e-ac18168b93e8'}
       username={props.user.username}
       secret={props.user.secret}
       style={{height: '100%'}} />

    </div>)
}
export default ChatsPage