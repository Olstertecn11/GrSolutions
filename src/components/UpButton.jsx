import { useState, useEffect } from 'react';


const UpButton = () => {

  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    // go to (0,0) but smoothly
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  const handleVisibleButton = () => {
    setVisible(window.pageYOffset > 90);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleVisibleButton)
  }, []);

  return (
    <>
      <button className={visible ? "btn upButton" : "btn upButton hide"} onClick={handleClick}><svg className='svg-up-button' stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" fontSize="20" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path><path d="m6.293 13.293 1.414 1.414L12 10.414l4.293 4.293 1.414-1.414L12 7.586z"></path></svg></button>
    </>

  )

}

export default UpButton;
