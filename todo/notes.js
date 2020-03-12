document.addEventListener('DOMContentLoaded', appStart)
let notesArr = []

let create
let ttle
let desc
let body
let clr
let pindiv


class Note {
    constructor(title = '', description = '', color='') {
        this.title = title
        this.description = description
        this.color = color
        let date = new Date()
        this.created = date.toLocaleDateString()
        this.pinned = false
    }

}
function appStart() {

    create = document.querySelector('#crt')
    create.addEventListener('click', createNote)
    ttle = document.querySelector('#title')
    desc = document.querySelector('#desc')
    body = document.querySelector('#unpinnedNotes')
    clr = document.querySelector('#color')
    pindiv = document.querySelector('#pinnedNotes')
    
    if(localStorage.length > 0){
        loadNotes();
    }
        


}
function createNote() {
    
    let nt = new Note()
    nt.title = ttle.value
    nt.description = desc.value
    nt.color = clr.value
    notesArr.push(nt)
    localStorage.setItem('notes', JSON.stringify(notesArr))

}

function loadNotes() {
        
        notesArr = JSON.parse(localStorage.getItem('notes'))

        notesArr.forEach((item,index) => {
            const div = document.createElement('div')
            const bar = document.createElement('div')
            const bartext = document.createElement('a')
            const content = document.createElement('div')
            const contenttext = document.createElement('a')
            const del = document.createElement('button')
            const footer = document.createElement('div')
            const save = document.createElement('button')
            const pin = document.createElement('button')
            bar.className = 'bar'
            bartext.innerHTML = item.title
            bartext.contentEditable = true
            pin.className = 'unpinbut'
            pin.addEventListener('click',() =>{
                if(item.pinned === false){
                    item.pinned = true
                    
                    localStorage.setItem('notes', JSON.stringify(notesArr))
                    location.reload()
                }else if(item.pinned === true){
                    
                    item.pinned = false
                    
                    localStorage.setItem('notes', JSON.stringify(notesArr))
                    location.reload()
                }
            })

            del.className = 'delbut'
            del.addEventListener('click',()=>{
                console.log(index)
                notesArr.splice(index, 1)
                localStorage.setItem('notes', JSON.stringify(notesArr))
                location.reload()
                
            })
            content.className = 'content'
            contenttext.innerHTML = item.description 
            content.style.background = item.color
            contenttext.contentEditable = true
            div.id = item.title
            div.className = 'notka' 

            footer.className = 'footer'
            footer.innerHTML = item.created
            save.className = 'savebut'
            save.addEventListener('click',() => {
                item.title = bartext.textContent
                item.description = contenttext.textContent
                localStorage.setItem('notes', JSON.stringify(notesArr))
            })
            div.appendChild(bar)
            bar.appendChild(bartext)
            bar.appendChild(pin)
            bar.appendChild(del)
            div.appendChild(content)
            content.appendChild(contenttext)
            div.appendChild(footer)
            footer.appendChild(save)
            if(item.pinned === true){
                pin.className = 'pinbut'
                pindiv.appendChild(div)
            }else{
                pin.className = 'unpinbut'
                body.appendChild(div)  
            }
            
        })
    
}
