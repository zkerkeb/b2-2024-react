

const Header = ({cocoChannel, label, nombre, cuicui = "cuicui l'oiseau"}) => { 
    console.log("🚀 ~ Header ~ cuicui:", cuicui)
    return (
        <header>
            <span onClick={cocoChannel} >{label} {nombre}</span>
        </header>
    )
}


// Header.defaultProps = {
//     label: "Hello World"
// }

export default Header;