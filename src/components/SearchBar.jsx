import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper, IconButton } from "@mui/material";
import { Search } from '@mui/icons-material';



function SearchBar() {
    const [searchTerm, setSearchTearm] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        if (searchTerm) {
            navigate(`/search/${searchTerm}`)
            setSearchTearm('')
        }

    }
    return (
        <Paper
            component="form"
            onSubmit={handleSubmit}
            sx={{
                borderRadius: 20,
                border: '1px solid #e3e3e3',
                pl: 2,
                boxShadow: 'none',
                mr: { sm: 5 }
            }}
        >
            <input className='search-bar' placeholder='Search'
                value={searchTerm}
                onChange={(event) => { setSearchTearm(event.target.value) }} />
            <IconButton type="submit" sx={{}}>
                <Search />
            </IconButton>
        </Paper>
    )
}

export default SearchBar