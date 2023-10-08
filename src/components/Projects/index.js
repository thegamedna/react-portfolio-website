import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

import * as React from 'react'
import Box, { BoxProps } from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

const Projects = () => {
  const url = '../../../src/assets/images/react-logo-2.png'
  const [letterClass, setLetterClass] = useState('text-animate')
  const [projectData, setprojectData] = useState([
    {
      url: 'https://res.cloudinary.com/practicaldev/image/fetch/s--qo_Wp38Z--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/e0nl7ziy1la7bpwj7rsp.png',
      alt: 'React logo',
      title: 'React Disney+ Clone',
      description: 'Disney+ Hotstar Clone using React and Firebase',
      deployed: 'https://calm-nougat-123343.netlify.app/',
      git: 'https://github.com/thegamedna/disney-clone',
    },
  ])
  const form = useRef()

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  // const sendEmail = (e) => {
  //   e.preventDefault()

  //   emailjs
  //     .sendForm('gmail', 'template_YeJhZkgb', form.current, 'your-token')
  //     .then(
  //       () => {
  //         alert('Message successfully sent!')
  //         window.location.reload(false)
  //       },
  //       () => {
  //         alert('Failed to send the message, please try again')
  //       }
  //     )
  // }

  const projectsList = projectData.map((item, index) => {
    return (
      <Card sx={{ maxWidth: 345, background: '#ffd700' }} key={index}>
        <CardMedia
          component="img"
          height="140"
          image={item.url}
          alt={item.alt}
        />
        <CardContent
          sx={{ background: '#ffd700', color: 'black', border: 'none' }}
        >
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ fontWeight: 'bold' }}
          >
            {item.title}
          </Typography>
          <Typography variant="h6" sx={{ color: 'black' }}>
            {item.description}
          </Typography>
        </CardContent>
        <CardActions sx={{ background: '#ffd700' }}>
          <Button
            size="small"
            variant="contained"
            href={item.deployed}
            target="_blank"
            rel="noreferrer"
          >
            View
          </Button>
          &nbsp;
          <Button
            size="small"
            variant="contained"
            href={item.git}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </Button>
        </CardActions>
      </Card>
    )
  })

  return (
    <>
      <div className="container Projects-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
              idx={15}
            />
          </h1>
          <p style={{ width: '50%' }}>
            Passionate about creating side-projects and upskilling in free time.
            I consider creating side-projects as a way to get your hands dirty
            by exploring new and upcoming technologies and to re-learn existing
            ones.
          </p>
          <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
            {projectsList}
          </Box>

          {/* <div className="Projects-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div> */}
        </div>
        {/* <div className="info-map">
          Slobodan Gajić,
          <br />
          Serbia,
          <br />
          Branka RadiČevića 19, 22000 <br />
          Sremska Mitrovica <br />
          <br />
          <span>freelancerslobodan@gmail.com</span>
        </div> */}
        {/* <div className="map-wrap">
          <MapContainer center={[44.96366, 19.61045]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[44.96366, 19.61045]}>
              <Popup>Sloba lives here, come over for a cup of coffee :)</Popup>
            </Marker>
          </MapContainer>
        </div> */}
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Projects
