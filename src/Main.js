function Main({ activeNote }) {
    return <div className="app-main">

        <div className="app-main-note-edit">
        <input type="text" id="title" value={activeNote.title} autoFocus />
        <textarea id="body" placeholder="Write your note here babyyyy" value={activeNote.body} />
        </div>

        <div className="app-main-note-preview">
        <h1 className="preview-title" >{activeNote.title}</h1>
            <div className="markdown-preview">{activeNote.body}</div>
 
        </div>




    </div>


}

export default  Main;