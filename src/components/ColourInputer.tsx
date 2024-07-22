import { useState } from "react";
import ColourBlock from "./ColourBlock";
import { v4 as uuid } from "uuid"
import "../styles/ColourInputer.css"

// Type alias used throughout
type Colour = {
    id: String,
    hexColour: String
}

export default function ColourInputer() {
    const [enteredColour, setEnteredColour] = useState("")

    // Colour type alias assigned as used in List to store item objects
    const [colourList, setColourList] = useState<Colour[]>([])    

    const handleSubmit = (e: { preventDefault: () => void; }):void => {
        e.preventDefault();
        { validation() ? addColour() : null }
        setEnteredColour('') // Clears input after submission 
    }

    // Delete item from array in state
    const removeFromList = (value: String):void => {
        setColourList(colourList.filter(c => c.id !== value))
    }

    // Validate input before adding to list
    const validation = ():Boolean => {
        const regex = /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i; // Regex expression to validate string
        if (enteredColour.match(regex)) return true
        else return false
    }

    // Appending to an array in state
    const addColour = ():void => {
        // id added to help with deleting item + making component unique to siblings
        const newColour:Colour = {
            id: uuid(),
            hexColour: `#${enteredColour.toUpperCase()}`
        }
        setColourList([newColour, ...colourList])
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="form">
                <p>#</p> {/* # = Signify hex value to be entered  */}
                <input type="text"
                    name="hexColour"
                    id="hexColour"
                    value={enteredColour}
                    onChange={(e) => setEnteredColour(e.target.value)}
                    placeholder="00ff00 or 00f"
                />
                <input type="submit" value="Add" onClick={validation} />
            </form>

            <ul>
            {colourList.map(item =>
                    <li><ColourBlock
                        key ={uuid()}
                        id ={item.id} // Can be accessed in code
                        colour={item.hexColour}

                        // Delete function passed into component
                        remove={removeFromList}
                    /></li>)}
            </ul>
        </>
    )
}