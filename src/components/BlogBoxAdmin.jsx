import Box from '@mui/material/Box'
import React, { useEffect } from 'react'
import dini from '../images/dini.png'
import siyasi from '../images/siyasi.png'
import gundem from '../images/gündem.png'
import sosyal from '../images/sosyal.png'
import Typography from '@mui/material/Typography'
import { useNavigate, useParams } from 'react-router-dom'
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton'
import { useDispatch } from 'react-redux'
import { deleteBlog } from '../redux/BlogSlice'


function BlogBoxAdmin({ blog }) {
    // baslik: baslikYazisi,
    //     onGosterim: onGosterimYazisi,
    //         gidenResim: resim,
    //             yazi: blogYazisi
    const { baslik, onGosterim, gidenResim, yazi, id } = blog
    const resimMap = {
        Dini: `url(${dini})`,
        Sosyal: `url(${sosyal})`,
        Gündem: `url(${gundem})`,
        Siyasi: `url(${siyasi})`
    }
    const navigate = useNavigate();
    const dispatch = useDispatch();




    return (
        <Box width={'20%'} mt={5} borderRadius='30px 30px 0px 0px' sx={{
            transition: 'box-shadow 0.1s ease',
            '&:hover': {
                boxShadow: '0 0 15px rgba(0, 123, 255, 0.5)',
            },
        }} >
            <Box p={2} sx={{ backgroundColor: 'rgb(52, 52, 52)', borderRadius: '30px 30px 0px 0px' }}>
                <Typography textAlign={'center'} color='white' fontSize={'1.2rem'} fontStyle={'italic'} fontWeight={'bold'}>
                    {baslik}
                </Typography>
            </Box>
            <Box id='resimBox' display={'flex'} flexDirection={'column'} color={'white'} height={'20rem'} sx={{ backgroundImage: resimMap[gidenResim], backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <Typography width={'89.5%'} height={'85%'} p={2} display={'flex'} sx={{
                    backgroundColor: 'rgba(72, 72, 72, 0.55)',
                    wordBreak: 'break-word'
                }} textAlign={'center'} color='white' fontSize={'0.7rem'} fontStyle={'italic'} fontWeight={'bold'}>
                    {onGosterim}
                </Typography>
                <Box sx={{ backgroundColor: 'rgba(23, 17, 17, 0.65)' }} display={'flex'} width={'100%'} justifyContent={'center'} alignItems={'center'} height={'15%'}>
                    <IconButton onClick={() => {
                        dispatch(deleteBlog(id))
                    }}><DeleteIcon sx={{ fontSize: '2.5rem', color: 'rgba(227, 5, 5, 0.7)' }} /></IconButton>
                </Box>
            </Box>

            {/* <img width={'100%'} height={'80%'} src={dini} alt="" /> */}
        </Box>

    )
}

export default BlogBoxAdmin