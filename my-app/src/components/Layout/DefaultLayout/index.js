// import Header from "../TopSide/Header";


function DefaultLayout({ children }) {
    return (
        <div>
            
            <div className='container'>
                
                <div className='content'>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;