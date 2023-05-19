import * as core from '@theatre/core'
import studio from '@theatre/studio'

studio.initialize()

// create a project
const project = core.getProject('My-project')
// create a sheet (Scene) in the project,
// in React it would be a component
const sheet = project.sheet('Scene')

// create the object and pass the properties
const box = sheet.object('Box', {
    position: { 
        x: 0, 
        y: 0, 
        z: 0 
    },
})

const div = document.createElement('div')

div.style.cssText = `
    position: absolute;
    width: 100px;
    height: 100px;
    background: red;
`
setTimeout(() => {
    document.body.appendChild(div)
}, 1000)

//sequencing animation props
box.onValuesChange((newValues) => {
    div.style.left = newValues.position.x + 'px'
    div.style.top = newValues.position.y + 'px'

})

div.addEventListener('click', () => {
    sheet.sequence.play({range: [2, 8], duration: 1000, loop: true})
})