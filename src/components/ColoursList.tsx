import ColourBlock from "./ColourBlock";
import { v4 as uuid } from "uuid"
import { Colour } from "../reusableTypes/colourType";
import { memo } from "react";

type ColourListType = {
    colourList: Colour[]
}

function ColoursList({ colourList}: ColourListType) {
    return (
        <ul>
            {colourList.map(item =>
                <li>
                    <ColourBlock
                        key={uuid()}
                        id={item.id} // Can be accessed in code
                        colour={item.hexColour}
                    />
                </li>)}
        </ul>
    )
}

// The application is small so rerendering won't affect the performance of it.
// However for practice, React.memo is applied
export default memo(ColoursList)