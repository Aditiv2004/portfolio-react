import React from 'react'

export default function Skills() {
  return (
   <>

<section class="skills-section">
  <h2>Skills</h2>
  <div class="skills-grid">
    <div class="skill-card">
        <img src="https://clipartcraft.com/images/html5-logo-png-transparent-5.png" alt="" />
       <p>HTML5</p> </div>
    <div class="skill-card">
        <img src="https://cdn.freebiesupply.com/logos/large/2x/css3-logo-png-transparent.png" alt="" /><p>CSS</p></div>
    <div class="skill-card">
        <img src="https://tse1.mm.bing.net/th?id=OIP.YPYdVAg5ieRspLI6HIpmDQHaIB&pid=Api&P=0&h=180" alt="" /><p>JavaScript</p></div>
    <div class="skill-card">
        <img src="https://www.pngall.com/wp-content/uploads/13/Figma-Logo-PNG-File.png" alt="" /><p>React.js</p></div>
    <div class="skill-card">
        <img src="https://i0.wp.com/tinkercademy.com/wp-content/uploads/2018/04/python-icon.png?ssl=1" alt="" /><p>Python</p></div>
    <div class="skill-card">
        <img src="data:image/png;base64,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" alt="" /><p>Java</p></div>
    <div class="skill-card"> 
        <img src="https://www.freeiconspng.com/uploads/sql-database-icon-png-17.png" alt="" /><p>MySQL</p></div>
    <div class="skill-card">
        <img src="https://iconape.com/wp-content/files/vp/370638/svg/bootstrap-logo-icon-png-svg.png" alt="" /><p>Bootstrap</p></div>
  </div>
</section>



   </>
  )
}
