export default function ServiceCard(props){
    return(
        <div className="s-card">
            <h2>{props.title}</h2>
            <span>{props.mininfo}</span>
        </div>
    )
}