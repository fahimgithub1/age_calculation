import classas from './Card.module.css';

export default function Card({...props}){
    return(
        <div className={`${classas.card} ${props.classas}`}>
            {props.children}
        </div>
    );
};