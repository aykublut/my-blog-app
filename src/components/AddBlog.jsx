import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import dini from '../images/dini.png'
import siyasi from '../images/siyasi.png'
import gundem from '../images/gündem.png'
import sosyal from '../images/sosyal.png'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import React, { useEffect, useState } from 'react'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import { blogFunc } from '../redux/BlogSlice'
import { useDispatch, useSelector } from 'react-redux'
import BlogBox from './BlogBox'
import { useNavigate } from 'react-router-dom'

function AddBlog({ lookBlogsOn, setLookBlogsOn }) {
    const [resim, setResim] = useState('');
    const { blogs } = useSelector((store) => store.blog)
    useEffect(() => {
        imageGenerator();
    }, [resim])
    const imageGenerator = () => {
        const resimKapsayicisi = document.querySelector('#resimKapsayici');
        if (resim == 'Dini') {
            console.log('LAN')
            resimKapsayicisi.style.backgroundImage = `url(${dini})`
        }
        else if (resim == 'Siyasi') {
            console.log('LAN')
            resimKapsayicisi.style.backgroundImage = `url(${siyasi})`
        }
        else if (resim == 'Sosyal') {
            console.log('LAN')
            resimKapsayicisi.style.backgroundImage = `url(${sosyal})`
        }
        else if (resim == 'Gündem') {
            console.log('LAN')
            resimKapsayicisi.style.backgroundImage = `url(${gundem})`
        }
        else {
            resimKapsayicisi.style.backgroundImage = `url(${''})`
        }
    }

    const handleChange = (event) => {
        setResim(event.target.value);
    };

    const [baslikYazisi, setBaslikYazisi] = useState('')
    const [onGosterimYazisi, setOnGosterimYazisi] = useState('')
    const [blogYazisi, setBlogYazisi] = useState('')
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const addBlog = () => {
        if (blogYazisi.length < 1217 && baslikYazisi.length < 21) {
            const payload = {
                id: Math.floor(Math.random() * 99999),
                baslik: baslikYazisi,
                onGosterim: onGosterimYazisi,
                gidenResim: resim,
                yazi: blogYazisi
            }
            dispatch(blogFunc(payload))
            setBaslikYazisi('')
            setOnGosterimYazisi('')
            setResim('')
            setBlogYazisi('')
            alert('Başarıyla Eklendi!')
            navigate('/blogsAdmin');
            setLookBlogsOn(true)
        }
        else {
            alert("BLOG YAZISIN 1500 KARAKTERDEN FAZLA KARAKTERİ KABUL ETMİYORUZ!")
        }


    }
    const handleAddBlog = () => {
        if (baslikYazisi !== '' && blogYazisi !== '' && resim !== '' && onGosterimYazisi !== '') {
            if (blogYazisi.length < 30) {
                alert('Yazınız 30 karakterden küçük lütfen 30 karakter ve üzeri yazı yazınız!')
            }
            else {
                addBlog();
            }
        }
        else {
            alert('LÜTFEN İÇERİKLERİ BOŞ BIRAKMAYINIZ')
        }
    }
    return (
        <Box>
            <Grid container>
                <Grid size={6} maxHeight={'35rem'} display={'flex'} justifyContent={'center'} sx={{ gap: '1rem', paddingLeft: '3rem' }} alignItems={'center'}>
                    <Box display={'flex'} flexDirection={'column'}>
                        <FormControl color='warning' sx={{ m: 1, minWidth: 80 }}>
                            <InputLabel id="demo-simple-select-autowidth-label">resim</InputLabel>
                            <Select
                                labelId="demo-simple-select-autowidth-label"
                                id="demo-simple-select-autowidth"
                                value={resim}
                                onChange={handleChange}
                                sx={{ width: '7rem' }}
                                label="Resim"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={'Dini'}>Dini</MenuItem>
                                <MenuItem value={'Siyasi'}>Siyasi</MenuItem>
                                <MenuItem value={'Sosyal'}>Sosyal</MenuItem>
                                <MenuItem value={'Gündem'}>Gündem</MenuItem>
                            </Select>
                        </FormControl>
                        <Button onClick={handleAddBlog} color='warning'>
                            Bitir
                        </Button>
                    </Box>

                    <Box width={'45%'} height={'80%'} mt={5} borderRadius='30px 30px 0px 0px' sx={{
                        transition: 'box-shadow 0.1s ease',
                        '&:hover': {
                            boxShadow: '0 0 15px rgba(0, 123, 255, 0.5)',
                        },
                    }} >
                        <Box p={'7%'} height={'10%'} display={'flex'} alignItems={'center'} justifyContent={'center'} sx={{ backgroundColor: 'rgb(52, 52, 52)', borderRadius: '30px 30px 0px 0px' }}>
                            <TextField value={baslikYazisi} onChange={(e) => setBaslikYazisi(e.target.value)} color='warning'
                                placeholder='Başlık Yazısı'
                                multiline
                                fullWidth

                                sx={{
                                    "& .MuiInputBase-root": {
                                        alignItems: "start"
                                    }
                                    ,
                                    "& .MuiInputBase-input": {
                                        color: "white",
                                        // Eğer placeholder da beyaz olmalıysa:
                                        "&::placeholder": {
                                            color: "rgba(255, 255, 255, 1)",
                                        }
                                    }
                                }}

                            />
                        </Box>
                        <Box id="resimKapsayici" display={'flex'} color={'white'} width={'100%'} height={'79.4%'} sx={{ backgroundSize: 'cover', backgroundPosition: 'center' }}>

                            <Box width={'100%'} p={2} sx={{ backgroundColor: 'rgba(72, 72, 72, 0.55)' }}>
                                <TextField value={onGosterimYazisi} onChange={(e) => setOnGosterimYazisi(e.target.value)} color='warning'
                                    placeholder='Öngösterim Yazısı'
                                    multiline
                                    fullWidth
                                    minRows={12}
                                    sx={{
                                        "& .MuiInputBase-root": {
                                            alignItems: "start"
                                        }
                                        ,
                                        "& .MuiInputBase-input": {
                                            color: "white",

                                            "&::placeholder": {
                                                color: "rgba(255, 255, 255, 1)",
                                            }
                                        },


                                    }}

                                />
                            </Box>
                        </Box>
                    </Box>

                </Grid>
                <Grid maxHeight={'35rem'} size={6} pt={5} pr={5}>
                    <TextField value={blogYazisi} onChange={(e) => {

                        setBlogYazisi(e.target.value)


                    }} color='warning'
                        label="BLOG İÇERİĞİNİ BURAYA YAZIN"
                        multiline
                        fullWidth
                        minRows={20}
                        sx={{
                            "& .MuiInputBase-root": {
                                alignItems: "start"
                            }
                            ,
                            "& .MuiInputBase-input": {
                                color: "white",

                                "&::placeholder": {
                                    color: "rgba(255, 255, 255, 1)",
                                }
                            },
                            "& .MuiInputLabel-root": {
                                color: "white",
                            },
                            "& .MuiInputLabel-root.Mui-focused": {
                                color: theme => theme.palette.warning.main, // tıklanınca warning rengi
                            },
                        }}
                    />
                </Grid>
            </Grid >

        </Box>
    )
}

export default AddBlog