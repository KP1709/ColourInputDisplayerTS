import { createContext, useCallback, useEffect, useMemo, useState } from "react";
import ColoursList from "./ColoursList";
import { v4 as uuid } from "uuid"
import "../styles/ColourInputer.css"
import { Colour } from "../reusableTypes/colourType"
import useDebounce from "../hooks/useDebounce";

export type RemoveFromListContextType = {
    removeFromList: (value: String) => void
}

export const RemoveFromListContext = createContext<RemoveFromListContextType | null>(null)

export default function ColourInputer() {
    const [enteredColour, setEnteredColour] = useState("")
    const [colourWord, setColourWord] = useState("")
    const [colourList, setColourList] = useState<Colour[]>([])
    const [invalidColourEntered, setInvalidColourEntered] = useState(false)
    const [hint, setHint] = useState(false)

    // Custom hook used to reduce unnecessary API calls 
    const debouncedColour = useDebounce(enteredColour, 200)

    useEffect(() => {
        async function getColourWord() {
            if (enteredColour === "") return null
            try {
                const response = await fetch(`https://www.thecolorapi.com/id?hex=${debouncedColour}&format=json`)
                const data = await response.json()
                setColourWord(data.name.value)
            }
            catch (err) {
                console.error(err)
            }
        }
        getColourWord()
    }, [debouncedColour])

    const handleSubmit = (e: { preventDefault: () => void; }): void => {
        e.preventDefault();
        { validation() ? addColour() : setInvalidColourEntered(true) }
    }

    const addColour = (): void => {
        setHint(true)
        const newColour: Colour = {
            id: uuid(),
            hexColour: `#${enteredColour.toUpperCase()}`,
            colourName: ''
        }

        if (colourWord) {
            setHint(false)
            setColourList([{ ...newColour, colourName: colourWord.toUpperCase() }, ...colourList])
            setInvalidColourEntered(false)
            setEnteredColour("")
        }
        setColourWord('')
    }

    // Delete item from array in state
    // Practice (not necessary) using useCallback to stop rerendering function in child
    const removeFromList = useCallback((value: String): void => {
        setColourList(colourList.filter(c => c.id !== value))
    }, [colourList])

    const validation = (): Boolean => {
        const regex = /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i;
        if (enteredColour.match(regex)) return true
        else return false
    }

    // CreateContext causes rerendering (when passing in a function) so useMemo is applied
    const removeFromListProvider = useMemo(() => ({ removeFromList }), [colourList])

    return (
        <main>
            <form onSubmit={handleSubmit} className="form">
                <label htmlFor='hexColour'>Enter a colour (#):</label>
                <input
                    type="text"
                    name="hexColour"
                    id="hexColour"
                    data-test="colour-form"
                    value={enteredColour}
                    onChange={e => setEnteredColour(e.target.value)}
                    placeholder="00ff00 or 00f"
                    className={invalidColourEntered ? 'invalid-input' : ''}
                    aria-invalid={invalidColourEntered ? "true" : "false"}
                    aria-errormessage="error-message"
                />
                <button type="submit" data-test='add-colour-button'>Add</button>
                {invalidColourEntered && <p id="error" className="message">Invalid colour entered</p>}
                {hint && <p id="loading" className="message">Try adding the colour again</p>}

            </form>

            <RemoveFromListContext.Provider value={removeFromListProvider}>
                <ColoursList colourList={colourList} />
            </RemoveFromListContext.Provider>
        </main>
    )
}