export default function Header() {
    return <div id="header" className="shadow-md flex justify-between items-center h-20 px-20 bg-gray-200 capitalize">
        <a href="#home">logo</a>
        <div className="flex gap-8">
            <a href="#home">home</a>
            <a href="#abute">aboute</a>
            <a href="#contact">contact</a>
            <a href="#help">help</a>
        </div>
        <a href="#login">login</a>
    </div>
}