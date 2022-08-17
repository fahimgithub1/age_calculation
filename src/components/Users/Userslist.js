import classas from './Users.module.css';
import Card from "../UI/Card";

export default function UserList({...props}){
    return(
    <Card classas={classas.users}>
        <ul>
            {/* {props.users.map(user =>{
                    <li>{user.name} ({user.age} years old)</li>
            })} */}
        </ul>
    </Card>
    );
};