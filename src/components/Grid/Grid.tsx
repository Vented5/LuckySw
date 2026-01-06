import './Grid.css'

export function Grid() {
    const n = 8 //number of contents
    let content = []

    for( let i = 0; i < n; i++){
        const rColor = Math.floor(Math.random() * 16777215).toString(16)
        content.push(
            <div 
                key={i} 
                style={{backgroundColor: '#' + rColor.padStart(6, '0')}}
            />
        )
    }

    return (
        <div className="grid">
            {content}
        </div>
    )
}

