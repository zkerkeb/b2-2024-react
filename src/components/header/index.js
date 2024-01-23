

const Header = ({label}) => {
    return (
        <header>
            <span>{label}</span>
        </header>
    )
}


Header.defaultProps = {
    label: "Hello World"
}

export default Header;