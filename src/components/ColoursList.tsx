import ColourBlock from "./ColourBlock";
import { v4 as uuid } from "uuid"
import { Colour } from "../reusableTypes/colourType";

type ColourListType = {
    colourList: Colour[]
}

export default function ColoursList({ colourList}: ColourListType) {
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