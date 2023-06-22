
const URLForm = ({SubUrl, SetUrl, Url}) => {
    
    //submit the form
    const onSubmit = (e) =>{
        e.preventDefault();

        //get location
        SubUrl(Url)
    }
    
    return (
        <div className='form-Div'>
            <form method='POST' onSubmit={onSubmit}>
                <div className='form-Div' >
                    <label>Enter A URL</label>
                    <input type="Text" value={Url} onChange={(e) => SetUrl(e.target.value) }/>
                </div>
                <input className="form-button" type="submit" value="Shorten Url"/>
            </form>
        </div>
    )
}

export default URLForm