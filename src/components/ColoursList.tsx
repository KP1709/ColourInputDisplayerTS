import ColourBlock from "./ColourBlock";
import { v4 as uuid } from "uuid"
import { Colour } from "../reusableTypes/colourType";
import { memo } from "react";

type ColourListType = {
    colourList: Colour[]
}

function ColoursList({ colourList}: ColourListType) {
    return (
        <ul data-test="colour-list">
            {colourList.map(item =>
                <li key={uuid()}>
                    <ColourBlock
                        key={uuid()}
                        {...item}
                    />
                </li>)}
        </ul>
    )
}

// The application is small so rerendering won't affect the performance of it.
// However for practice, React.memo is applied
export default memo(ColoursList)