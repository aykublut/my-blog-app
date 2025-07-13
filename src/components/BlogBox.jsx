import Box from '@mui/material/Box'
import React, { useEffect } from 'react'
import dini from '../images/dini.png'
import siyasi from '../images/siyasi.png'
import gundem from '../images/gündem.png'
import sosyal from '../images/sosyal.png'
import Typography from '@mui/material/Typography'
import { useNavigate, useParams } from 'react-router-dom'


function BlogBox({ blog }) {
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




    return (
        <Box onClick={() => navigate(`/blogContent/${id}`)} width={'20%'} mt={5} borderRadius='30px 30px 0px 0px' sx={{
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
            <Box id='resimBox' display={'flex'} color={'white'} height={'20rem'} sx={{ backgroundImage: resimMap[gidenResim], backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <Typography width={'100%'} p={2} display={'flex'} sx={{
                    backgroundColor: 'rgba(72, 72, 72, 0.55)',
                    wordBreak: 'break-word'
                }} textAlign={'center'} color='white' fontSize={'0.7rem'} fontStyle={'italic'} fontWeight={'bold'}>
                    {onGosterim}
                </Typography>
            </Box>
            {/* <img width={'100%'} height={'80%'} src={dini} alt="" /> */}
        </Box>

    )
}

export default BlogBox