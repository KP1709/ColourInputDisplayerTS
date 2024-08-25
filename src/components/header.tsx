export default function Header(){
    const style = {
        marginBottom: "0.5em",
        display: "flex",
        alignItems: "center",
        justifyContent: "center" 
    }
    
    return (
        <header style={style}>
            <h1 data-test="page-header">Colour Input Displayer</h1>
        </header>
    )
}