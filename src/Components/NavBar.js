import 'bootstrap-icons/font/bootstrap-icons.css';
import '../Styles/Nav.css' ;
import leaf from "../Assets/leaf.png" ;
const NavBar = ()=>{
    return (
        <nav>
            <ul><img className='logo' src={leaf} alt="logo"/></ul>
            <ul className='searchbar'> <li><input  className='search-input' type="text" placeholder="Search for Disease" /> <span className='bi bi-search'></span></li></ul>
            <ul className='model'> <li> <select className='model-select'><option>YOLOv5</option> <option>YOLOv8</option><option>YOLOv11</option> </select> </li></ul>
        </nav>
    )
}
export default NavBar;