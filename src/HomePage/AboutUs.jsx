import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';

function AboutUs() {
  return (
    <div className='about'>
    <h2>Resume Builder</h2>
    <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis at delectus consequuntur accusantium? Illum excepturi ex quo eligendi tenetur dolores, sit laudantium quidem ea odio possimus alias ad necessitatibus! Aperiam beatae rerum placeat omnis cum consectetur unde nihil? Consequuntur praesentium dolorem est quasi, ipsa, aliquid possimus illum, exercitationem nemo nostrum veniam vero quas. Deserunt, nisi impedit commodi, dolore consectetur veniam doloremque at, enim ab distinctio vel. Voluptatibus, voluptas laudantium! Suscipit repellat maiores itaque ipsam ipsa sequi deleniti rerum natus culpa porro enim nobis aut alias eveniet accusamus totam esse voluptate ex est recusandae blanditiis, voluptatum aliquam. Quis dolores nobis modi.
      </p>
      <br/>
      <br/>
      <img src="https://cdn.dribbble.com/users/1068771/screenshots/14225432/coder_4x.jpg" alt="" />
      <br/>
      <br/>
      <br/>
      <br/>
      <h2>Share with your friends</h2>
      <br/>
      <FacebookIcon/>{' '}&nbsp;&nbsp;&nbsp;
      <LinkedInIcon/>{' '}&nbsp;&nbsp;&nbsp;
      <TwitterIcon/>{' '}&nbsp;&nbsp;&nbsp;
      <WhatsAppIcon/>{' '}&nbsp;&nbsp;&nbsp;
      <EmailIcon/>{' '}&nbsp;&nbsp;&nbsp;
    </div>
    
  )
}

export default AboutUs
