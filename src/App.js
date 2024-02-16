import React, { useState } from 'react';
import './App.css'; // Import the CSS file

const App = () => {
  const [elements, setElements] = useState([]);
  const [selectedShape, setSelectedShape] = useState('');

  const addElement = () => {
    switch (selectedShape) {
      case 'textbox':
        setElements([...elements, { type: 'textbox', content: '' }]);
        break;
      case 'rectangle':
        setElements([...elements, { type: 'rectangle' }]);
        break;
      case 'circle':
        setElements([...elements, { type: 'circle' }]);
        break;
      case 'Image':
        setElements([...elements, { type: 'Image' }]);
        break;
      default:
        break;
    }
  };

  const handleChange = (index, value) => {
    const newElements = [...elements];
    newElements[index].content = value;
    setElements(newElements);
  };

  const renderElement = (element, index) => {
    switch (element.type) {
      case 'textbox':
        return (
          <input key={index} type="text" value={element.content} onChange={(e) => handleChange(index, e.target.value)}/>
        );
      case 'rectangle':
        return (
          <div key={index} className="shape rectangle"></div>
        );
      case 'circle':
        return (
          <div key={index} className="shape circle"></div>
        );
      case 'Image':
        return (
          <div key={index} className="shape image">
            <img src='https://source.unsplash.com/1600x500/?tech,code' alt=''/>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container">
      <div>
        <label htmlFor="shape">Select Element : </label>
        <select
          id="shape"
          value={selectedShape}
          onChange={(e) => setSelectedShape(e.target.value)}
        >
          <option value="">Select</option>
          <option value="textbox">Textbox</option>
          <option value="rectangle">Rectangle</option>
          <option value="circle">Oval</option>
          <option value="Image">Image</option>
        </select>
        <button onClick={addElement}>Add Element</button>
      </div>
      {elements.map((element, index) => (
        <div key={index} className="element">
          {renderElement(element, index)}
        </div>
      ))}
    </div>
  );
};

export default App;
