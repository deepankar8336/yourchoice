// ChoiceApp.js
import React, { useState } from 'react';
import './ChoiceApp.css'; // Import the CSS file for styling

function ChoiceApp() {
    const [choices, setChoices] = useState({
        beautiful: false,
        dowry: false,
        virgin: false
    });

    const toggleChoice = (choice) => {
        setChoices(prevChoices => {
            const newChoices = { ...prevChoices };

            if (choice === 'beautiful') {
                if (prevChoices.virgin) {
                    newChoices.virgin = false;
                }
                newChoices.beautiful = !prevChoices.beautiful;
            } else if (choice === 'dowry') {
                newChoices.dowry = !prevChoices.dowry;
            } else if (choice === 'virgin') {
                if (prevChoices.beautiful) {
                    newChoices.beautiful = false;
                }
                newChoices.virgin = !prevChoices.virgin;
            }

            // Ensure that if both dowry and virgin are on, beautiful cannot be on
            if (newChoices.dowry && newChoices.virgin) {
                newChoices.beautiful = false;
            }

            return newChoices;
        });
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Select Your Choice</h1>
            <div>
                {Object.keys(choices).map(choice => (
                    <div key={choice} style={{ margin: '10px' }}>
                        <span>{choice.charAt(0).toUpperCase() + choice.slice(1)}</span>
                        <div 
                            className={`switch ${choices[choice] ? 'on' : 'off'}`} 
                            onClick={() => toggleChoice(choice)}
                        >
                            <div className="toggle"></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ChoiceApp;
