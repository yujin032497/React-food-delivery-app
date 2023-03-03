import React from 'react'

const Helmet = (props) => {
    document.title = "Food ordering app -" + props.title
    return (
        <div class="w-10">{props.children}</div>
    )
}

export default Helmet;