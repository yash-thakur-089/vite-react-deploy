import React, { useEffect } from "react";
import "./TourPlan.css";

function TourPlan() {
  useEffect(() => {
    // Ensuring animations are triggered when the component loads
    const tourPlanElement = document.getElementById('tour-plan');
    tourPlanElement.classList.add('fadeIn');
  }, []);

  return (
    <div id="tour-plan">
      <h2>Tour Plan</h2>

      <div className="tour-plan-card">
        <h3>Day 1 - Chandigarh Pickup & Drive to Manali</h3>
        <ul>
          <li>- Pickup from Chandigarh.</li>
          <li>- On the way to Manali, enjoy rafting and visit the paragliding point.</li>
          <li>- Arrive in Manali in the evening and relax.</li>
        </ul>
      </div>

      <div className="tour-plan-card">
        <h3>Day 2 - Solang Valley, Sissu, and Atal Tunnel</h3>
        <ul>
          <li>- Visit Solang Valley for skiing, paragliding, and other adventure activities.</li>
          <li>- Explore Sissu, a scenic village with beautiful landscapes.</li>
          <li>- Drive through the Atal Tunnel, the longest tunnel in the world, and enjoy the breathtaking views.</li>
        </ul>
      </div>

      <div className="tour-plan-card">
        <h3>Day 3 - Manali Local Sightseeing</h3>
        <ul>
          <li>- Visit Hadimba Devi Temple, a serene and historical place.</li>
          <li>- Explore the Club House, known for its adventure activities like river crossing.</li>
          <li>- Stroll around Mall Road and shop for souvenirs, enjoy local food.</li>
        </ul>
      </div>

      <div className="tour-plan-card">
        <h3>Day 4 - Manali to Chandigarh Drop</h3>
        <ul>
          <li>- After breakfast, start your journey back to Chandigarh.</li>
          <li>- Arrive in Chandigarh and conclude the tour.</li>
        </ul>
      </div>
    </div>
  );
}

export default TourPlan;
