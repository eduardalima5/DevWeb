import React from "react"

const Hero = ({name, img}) => {
    return (
        <>
        <h2>Hero: {name}</h2>
        <img 
        src = {img} alt = "Hero img" 
        style={{ width: '200px', height: '200px' }}
        />
        </>
    )
}

const Enemy = ({name, img}) => {
    return (
        <>
        <h2>Enemy: {name}</h2>
        <img 
        src = {img} alt="Enemy img"
        style={{ width: '200px', height: '200px' }}
         />
        </>
    )
}

const Arena = ({arena, children}) => {
    return (
        <>
        <h2>Arena: {arena}</h2>
        {React.Children.map(children, child => {
            return (
                React.cloneElement(child, { arena : arena})
            )
        })}
        </>
    )
}

const World = ({children}) => {
    return (
        <>
        <h1>World</h1>
        {children}
        </>
    )
}

export { Hero, Enemy, Arena, World }