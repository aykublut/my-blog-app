import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';
function Header({ lookBlogsOn, setLookBlogsOn }) {

    const location = useLocation();
    useEffect(() => {
        if (location.pathname === '/adminPanel') {
            setOnAdmin(true)
        }
        else if (location.pathname === '/blogsPage') {
            setOnAdmin(false)
            setLookBlogsOn(false)
        }
    }, [location.pathname])
    const [onAdmin, setOnAdmin] = useState(false)
    const [inputValue, setInputValue] = useState('');
    const navigate = useNavigate();
    const sifre = 'adminSifre'
    const loginHandle = () => {
        if (sifre === inputValue) {
            navigate('/adminPanel')
            setOnAdmin(true)
            setInputValue('')
        }

    }
    return (

        <Box color={'white'} display={'flex'} justifyContent={'center'} p={3} sx={{ backgroundColor: 'rgb(36, 35, 35)' }}>
            <Box display={'flex'} justifyContent={'center'} alignItems={'center'} width={'5%'}>
                {onAdmin ?
                    <IconButton onClick={() => { navigate('/blogsPage'); setOnAdmin(false) }} sx={{ color: 'white' }}><ArrowBackIcon /></IconButton>
                    : null
                }
            </Box>
            <Box display={'flex'} justifyContent={'center'} alignItems={'center'} width={'40%'}></Box>
            {
                onAdmin ? lookBlogsOn ? <Button onClick={() => { navigate('/adminPanel'); setLookBlogsOn(!lookBlogsOn) }}>Blog Ekle</Button> : <Button onClick={() => { navigate('/blogsAdmin'); setLookBlogsOn(!lookBlogsOn) }}>Blogları Görüntüle</Button> :
                    <Typography onClick={() => navigate('/blogsPage')} display={'flex'} alignItems={'center'} justifyContent={'center'} width={'10%'} textAlign={'center'} variant='h5'>MyBlog</Typography>
            }
            <Box width={'45%'} display={'flex'} justifyContent={'flex-end'}>
                {
                    onAdmin ? null : <Box><TextField value={inputValue} onChange={(e) => {
                        setInputValue(e.target.value)
                    }} type='password' placeholder="Admin Şifre" variant="standard"
                        InputProps={{ sx: { color: "white", "&:before": { borderBottom: "1px solid white" }, "&:hover:not(.Mui-disabled):before": { borderBottom: "1px solid white" }, "&:after": { borderBottom: "2px solid white" } } }}
                        inputProps={{ style: { color: "white" } }}
                    />
                        <Button onClick={loginHandle} sx={{ borderRadius: '10px 0 0 0', border: '1px solid white', color: 'white' }} size='small' variant='outlined'> giriş</Button></Box>

                }
            </Box>
        </Box>

    )
}

export default Header