import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import {Insights, Brand, Deal, Commerce} from '../components/LandingPage/Cards';
import Navbar from '../components/Navbar';
import Button from '@mui/material/Button';




const LandingPage = () => {
  return (
    <Container maxWidth={'xl'} disableGutters>
    <Grid container  spacing={2} >
      <Navbar />
      {/* Row 1 */}
      <Grid item xs={6} className={styles.section}>
        <h3 className={styles.sectionTitle}>
          The #1 CRM Platform For Industry <span>Creators</span>
        </h3>
       
       <h4>Powered by AI & Data, CantusIQ offers a comprehensive set of tools to manage, automate, and grow your business.</h4>
        {/* Add your content here */}
        
        <Grid item xs={6} sx={{marginTop: '80px'}}>
          <Button sx={{borderRadius: '50px', marginRight: '10px'}} variant="outlined">Request a Demo</Button>
          <Button sx={{borderRadius: '50px'}} variant="outlined">Get Started</Button>
        </Grid>
      </Grid>
      <Grid item xs={6} className={styles.section}>
        {/* Second column */}
        <Image src="/cantus.png" alt="Description of the image" width={500} height={300} />
      </Grid>

      {/* Row 2 */}
      <Grid item xs={12} className={`${styles.blueSection} ${styles.centeredSection} ${styles.sectionBackground}`}>
        <p className={styles.sectionTitle}> Products</p>
      </Grid>
      <Grid item xs={3} className={`${styles.productColumn} ${styles.sectionBackground}`}>
        
        <Insights />
        
        {/* Add your content here */}
      </Grid>
      <Grid item xs={3} className={styles.productColumn}>
        
        <Brand />
        {/* Add your content here */}
      </Grid>
      <Grid item xs={3} className={styles.productColumn}>
       
        <Deal />
        {/* Add your content here */}
      </Grid>
      <Grid item xs={3} className={styles.productColumn}>
        
        <Commerce />
        {/* Add your content here */}
      </Grid>
      
    

      {/* Row 3 */}
      <Grid item xs={4} className={styles.section}>
        <h1 className={styles.sectionTitle}>Athletes</h1>
        {/* Add your content here */}
      </Grid>
      <Grid item xs={4} className={styles.section}>
        <h1 className={styles.sectionTitle}>Influencers</h1>
        {/* Add your content here */}
      </Grid>
      <Grid item xs={4} className={styles.section}>
        <h1 className={styles.sectionTitle}>Artists</h1>
        {/* Add your content here */}
      </Grid>

      {/* Row 4 */}
      <Grid item xs={12} className={styles.section}>
        <p className={styles.sectionText}>
          Discover exciting opportunities that will take you over the edge, craft captivating campaigns that resonate with your audience, and unlock the true joy of creating. With CantusIQ, we're not just another platform; we're your partner on this thrilling adventure.
        </p>
        {/* Add your content here */}
      </Grid>
    </Grid>
    </Container>
   
  );
};

export default LandingPage;
