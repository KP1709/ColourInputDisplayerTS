import { memo, useContext } from "react";
import "../styles/ColourBlock.css"
import { RemoveFromListContext, RemoveFromListContextType} from "./ColourInputer"

type ColourBlockProps = {
    hexColour: String,
    id: String,
    colourName: String
}

function ColourBlock({ ...items}: ColourBlockProps) {
    const {hexColour, id, colourName} = {...items}
    const { removeFromList } = useContext(RemoveFromListContext) as RemoveFromListContextType

    const style = {
        backgroundColor: `${hexColour}` // Background is set as entered colour
    }

    return (
        <div className="colour-block border-radius flex" style={style}>
            <p className="border-radius">{hexColour}</p>
            <p id="colour-block-colour-name" className="border-radius">{colourName}</p>
            <button
                className="flex"
                aria-label={`delete colour ${hexColour}`}
                onClick={() => removeFromList(id)}>&#10005;
            </button>
        </div>
    )
}

// The application is small so rerendering won't affect the performance of it.
// However for practice, React.memo is applied
export default memo(ColourBlock)