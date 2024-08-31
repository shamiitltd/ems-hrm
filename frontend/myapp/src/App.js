import './App.css';
import React, { useState } from 'react';
import AppButton from './components/Button';
import AppInputField from './components/InputField';
import AppModal from './components/Modal';
import CustomComponent from './components/CustomComponent';
import NotificationList from './components/NotificationList';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
      <div className="App">
        <NotificationList/>
        {/* <Notifys/>
        <AppButton
          onClick={() => alert('Button clicked!')}
          label="Click Me"
          link="https://github.com/orgs/shamiitltd/projects/20/views/1?sliceBy%5BcolumnId%5D=Assignees&sliceBy%5Bvalue%5D=i-shubham24"
        style={{ backgroundColor: 'blue', color: 'white' }}
        />
        <form>
          <AppInputField
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter text here"
          />
          <AppButton
            onClick={() => alert(`Input: ${inputValue}`)}
            label="Submit"
          />
        </form>
        <div>
          <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
          <AppModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            title="My Modal"
            positiveAction={() => alert("Confirmed!")}
            negativeAction={() => alert("Cancelled!")}
          >
            <p>This is the modal content.</p>
          </AppModal>
        </div>
        <AppButton link="/new-page" label="lol">
                <CustomComponent/>
            </AppButton>
       */}
       </div>
  );
}

export default App;
