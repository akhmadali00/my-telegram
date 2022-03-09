import "../App.css"

function Navbar(){
    return(
        <div className='navbar'>
            <div className='nav-menu'>
                <div className='nav-edit'>
                    <a href='#'>
                        <i class='bx bx-menu'></i>
                    </a>
                </div>
                <div className='nav-title'>
                    <h1>
                        Chats
                    </h1>
                </div>
                <div className='nav-category'>
                    <a href='#'>
                        <i class='bx bxs-edit'></i>
                    </a>
                </div>
            </div>
            <div className='nav-search'>
                <form>
                    <label name='search' id='search' />
                    <input type='text' 
                        placeholder='Search'
                    />
                </form>
            </div>
        </div>
    )
}
export default Navbar;