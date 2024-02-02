function customeRender(reactElem, container) {
    /*
    const domElement = document.createElement(reactElem.type)
    
    domElement.innerHTML = reactElem.children
    
    domElement.setAttribute('href', reactElem.props.href)
    domElement.setAttribute('target', reactElem.props.target)

    container.appendChild(domElement)
    */

    const domElement = document.createElement(reactElem.type)

    domElement.innerHTML = reactElem.children

    for (const prop in reactElem.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, reactElem.props[prop])
    }

    container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit Google'
}

const mainContainer = document.getElementById("root")

customeRender(reactElement, mainContainer);