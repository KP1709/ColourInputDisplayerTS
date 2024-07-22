import "../styles/ColourBlock.css"

type ColourBlockProps = {
    colour: String,
    id: String,
    remove: (id: String) => void // Common syntax for type function
}

export default function ColourBlock(
    // Destructuring and assigning type
    {colour, id, remove}: ColourBlockProps
)
{  
    const style = {
        backgroundColor: `${colour}` // Background is set as entered colour
    }

    return (
        <div className="colour-block border-radius flex" style={style}>
            <p className="border-radius">{colour}</p>
            <button
                className="flex"
                aria-label={`delete colour #${colour}`}
                onClick={() => remove(id)}>&#10005;
            </button>
        </div>
    )
}