import { memo, useContext } from "react";
import "../styles/ColourBlock.css"
import { RemoveFromListContext, RemoveFromListContextType} from "./ColourInputer"

type ColourBlockProps = {
    colour: String,
    id: String,
}

function ColourBlock({ colour, id }: ColourBlockProps) {
    const { removeFromList } = useContext(RemoveFromListContext) as RemoveFromListContextType

    const style = {
        backgroundColor: `${colour}` // Background is set as entered colour
    }

    return (
        <div className="colour-block border-radius flex" style={style}>
            <p className="border-radius">{colour}</p>
            <button
                className="flex"
                aria-label={`delete colour ${colour}`}
                onClick={() => removeFromList(id)}>&#10005;
            </button>
        </div>
    )
}

// The application is small so rerendering won't affect the performance of it.
// However for practice, React.memo is applied
export default memo(ColourBlock)