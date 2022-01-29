import { Grid } from '@mui/material';
import './components.css'
import image1 from "../Assets/image1.jpg"
import image2 from "../Assets/image2.jpg"
import image3 from "../Assets/image3.jpg"
import image4 from "../Assets/image4.png"

export default function Blogs() {
  return (
    <div style={{ color: 'black', backgroundColor: 'white', width:'95%'}}>
            <div classNameName="domain" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', flexDirection: 'column' }}>
                <h2 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', marginTop: '5%', marginBottom: '2%', color: '#FB008B' }} classNameName='domainHeading'>Blogs</h2>
                <Grid container sx={{ width: '100%' }} style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', width: '100%', marginBottom: '5%', rowGap: '70px' }}>
                    <Grid item xs={12} sm={6} md={3} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', flexDirection: 'column' }}>
                        <div className="flip-card">
                            <div className="flip-card-inner" >
                                <div className="flip-card-front" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '100%', height: '100%' }}>
                                    <img src={image1} alt="blog1" style={{width:'200px', height:'200px'}}/>
                                </div>
                                <div className="flip-card-back" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '100%', height: '100%' }}>
                                    <p>Lorem ipsum dolor sit amet, consectur adipiscing elit. Feugiat porttitor duis aliquet arcu. Feugiat porttitor duis aliquet arcu. Feugiat porttior duis aliquet arcu. Feugiat porttitor duis aliquet arcu. Feugiat duis aliquet. </p>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', flexDirection: 'column' }}>
                        <div className="flip-card">
                            <div className="flip-card-inner" >
                                <div className="flip-card-front" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '100%', height: '100%' }}>
                                  <img src={image2} alt="blog2" style={{width:'200px', height:'200px'}}/>
                                </div>
                                <div className="flip-card-back" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '100%', height: '100%' }}>
                                    <p>Lorem ipsum dolor sit amet, consectur adipiscing elit. Feugiat porttitor duis aliquet arcu. Feugiat porttitor duis aliquet arcu. Feugiat porttior duis aliquet arcu. Feugiat porttitor duis aliquet arcu. Feugiat duis aliquet. </p>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', flexDirection: 'column' }}>
                        <div className="flip-card">
                            <div className="flip-card-inner" >
                                <div className="flip-card-front" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '100%', height: '100%' }}>
                                  <img src={image3} alt="blog3" style={{width:'200px', height:'200px'}}/>
                                </div>
                                <div className="flip-card-back" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '100%', height: '100%' }}>
                                    <p>Lorem ipsum dolor sit amet, consectur adipiscing elit. Feugiat porttitor duis aliquet arcu. Feugiat porttitor duis aliquet arcu. Feugiat porttior duis aliquet arcu. Feugiat porttitor duis aliquet arcu. Feugiat duis aliquet. </p>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', flexDirection: 'column' }}>
                        <div className="flip-card">
                            <div className="flip-card-inner" >
                                <div className="flip-card-front" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '100%', height: '100%' }}>
                                  <img src={image4} alt="blog4" style={{width:'200px', height:'200px'}}/>
                                </div>
                                <div className="flip-card-back" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '100%', height: '100%' }}>
                                    <p>Lorem ipsum dolor sit amet, consectur adipiscing elit. Feugiat porttitor duis aliquet arcu. Feugiat porttitor duis aliquet arcu. Feugiat porttior duis aliquet arcu. Feugiat porttitor duis aliquet arcu. Feugiat duis aliquet. </p>
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
  )
}