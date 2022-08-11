import './title.css'

export default function Title(props) {
    return (
        <div className="title-block">
            <h1 className="title">{props.title}</h1>
            <br />
            <h2 className="subtitle">all the latest events in KJC</h2>
        </div>
    )
}