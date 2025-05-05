import { memo, useContext } from "react";
import "../styles/ColourBlock.css"
import { RemoveFromListContext, RemoveFromListContextType } from "./ColourInputer"
import { Colour } from "../reusableTypes/colourType";

function ColourBlock({ hexColour, id, colourName }: Colour) {
    const { removeFromList } = useContext(RemoveFromListContext) as RemoveFromListContextType

    const style = {
        backgroundColor: `${hexColour}`
    }

    return (
        <div className="colour-block border-radius flex" style={style} data-test={`colour-block-${hexColour}`}>
            <p className="border-radius">{hexColour}</p>
            <p id="colour-block-colour-name" className="border-radius">{colourName}</p>
            <button
                className="flex delete-button"
                aria-label={`delete colour ${hexColour}`}
                onClick={() => removeFromList(id)}>&#10005;
            </button>
        </div>
    )
}

// The application is small so rerendering won't affect the performance of it.
// However for practice, React.memo is applied
export default memo(ColourBlock)