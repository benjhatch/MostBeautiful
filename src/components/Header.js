import React from 'react';

function Header() {
    return (
        <div className='site-header'>
            <div className='test'>
                <h1 className='site-title'>Most Beautiful</h1>
                <h4 className='site-description'>Vote for the best</h4>
            </div>
            <div className='navigation'>
                <nav>
                    <span>Topics</span>
                    <span>Library</span>
                    <span>Account</span>
                </nav>
            </div>
        </div>
    );
}

export default Header;