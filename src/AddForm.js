import React, {useState} from 'react'

const AddAuthorForm = () =>  {
    const [name, setName] = useState({
        name: '',
        imageUrl: '',
        books: [],
        bookTemp: ''
    })

    const inputRef = React.createRef();
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(name);
        setName({name:"", imageUrl: ""})

        const onAddAuthor = (user, imageUrl) => {
            return {
                user: user,
                imageUrl: imageUrl
            }
        }
        onAddAuthor("john", "ekene");
    }



    const handleChange = (event) => {
        setName({
            ...name, value: event.target.value
        });
    }

    const handleClick = () => {
        setName({books: name.books.concat([name.bookTemp]),
            bookTemp: ''})
    };
   
      return <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor='firstName'>Name</label>
            <input type='text'  value={name.name ?? ""} onChange={handleChange} ref={inputRef} />
        </div>
        <div>
            <label htmlFor='imageUrl'>imageUrl</label>
            <input type='text' value={name.imageUrl ?? ""} onChange={handleChange} ref={inputRef} />
        </div>
        <div className='AddAuthorForm__input'>
            {/* {name.books.map((title) => <p key={title}>{title}</p>)}
            <input type='text' value={name.bookTemp} onChange={handleChange} /> */}
            <input type="submit" value='+' onClick={handleClick} />
        </div>
        <input type="submit" value="Add" />
    </form>
    
  }

function AddForm({onAddAuthor}) {
    return <AddAuthorForm onAddAuthor={onAddAuthor} />
}

export default AddForm;