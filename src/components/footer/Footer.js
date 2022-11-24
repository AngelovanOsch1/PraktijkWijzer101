import React from 'react'
import '../footer/footer.scss';

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='footer-data-container'>
            <div className='footer-column-container'>
                <div className='footer-header'>Resources</div>
                <div className='footer-text'>
                    <button className='text-link' ref='#'>Lorem ipsum</button>
                    <button className='text-link' ref='#'>Lorem ipsum</button>
                    <button className='text-link' ref='#'>Lorem ipsum</button>
                    <button className='text-link' ref='#'>Lorem ipsum</button>
                </div>
            </div>
            <div className='footer-column-container'>
            <div className='footer-header'>Contacts</div>
                <div className='footer-text'>
                <button className='text-link' ref='#'>Lorem ipsum</button>
                    <button className='text-link' ref='#'>Lorem ipsum</button>
                    <button className='text-link' ref='#'>Lorem ipsum</button>
                    <button className='text-link' ref='#'>Lorem ipsum</button>
                </div>
            </div>
            <div className='footer-column-container'>
            <div className='footer-header'>Links</div>
                <div className='footer-text'>
                <button className='text-link' ref='#'>Lorem ipsum</button>
                    <button className='text-link' ref='#'>Lorem ipsum</button>
                    <button className='text-link' ref='#'>Lorem ipsum</button>
                    <button className='text-link' ref='#'>Lorem ipsum</button>
                </div>
            </div>
        </div>
        <div className='footer-copyright-container'>
            <p>Copyright Camping Molerat &copy; 2022</p>
        </div>
    </div>
  )
}

export default Footer