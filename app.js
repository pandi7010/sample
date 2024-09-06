document.addEventListener('DOMContentLoaded', function () {
  // Logo Animation
  const logoName = document.getElementById('logo-name');

  logoName.addEventListener('mouseover', () => {
      logoName.classList.add('hovered');
  });

  logoName.addEventListener('mouseout', () => {
      logoName.classList.remove('hovered');
  });

  // Battery and Satellite Control Functionality
  const batteryPercentageEl = document.getElementById('battery-percentage');
  const chargingStatusEl = document.getElementById('charging-status');
  const chargingTimeEl = document.getElementById('charging-time');
  const primaryBatteryToggleButton = document.getElementById('primary-battery-toggle');
  const secondaryBatteryToggleButton = document.getElementById('secondary-battery-toggle');

  const moveForwardButton = document.getElementById('move-forward');
  const moveBackwardButton = document.getElementById('move-backward');
  const turnLeftButton = document.getElementById('turn-left');
  const turnRightButton = document.getElementById('turn-right');

  const satellitePositionEl = document.getElementById('satellite-position');
  const signalQualityEl = document.getElementById('signal-quality');
  const clockSyncEl = document.getElementById('clock-sync');
  const atmosphericDataEl = document.getElementById('atmospheric-data');
  const healthStatusEl = document.getElementById('health-status');
  const rangeCarrierEl = document.getElementById('range-carrier');

  // Simulate fetching data
  function updateBatteryStatus() {
      const batteryPercentage = Math.floor(Math.random() * 100);
      const isCharging = Math.random() > 0.5;
      const estimatedTime = `${Math.floor(Math.random() * 5)}:${Math.floor(Math.random() * 60)}`;

      batteryPercentageEl.textContent = `${batteryPercentage}%`;
      chargingStatusEl.textContent = isCharging ? "Charging" : "Not Charging";
      chargingTimeEl.textContent = `Estimated Time: ${estimatedTime}`;
  }

  function toggleBattery(button, batteryName) {
      if (button.textContent.includes("ON")) {
          button.textContent = `${batteryName}: OFF`;
      } else {
          button.textContent = `${batteryName}: ON`;
      }
  }

  function moveSatellite(direction) {
      alert(`Satellite moving ${direction}`);
  }

  function updateSatelliteMeasurements() {
      satellitePositionEl.textContent = "Position & Orbit: Stable at [X,Y,Z]";
      signalQualityEl.textContent = "Signal Quality: Excellent (98%)";
      clockSyncEl.textContent = "Clock Sync: Synchronized with ground station";
      atmosphericDataEl.textContent = "Atmospheric Data: Normal";
      healthStatusEl.textContent = "Health & Status: All systems functional";
      rangeCarrierEl.textContent = "Range & Carrier: 12,000 km, Carrier Phase: Stable";
  }

  primaryBatteryToggleButton.addEventListener('click', () => toggleBattery(primaryBatteryToggleButton, "Primary Battery"));
  secondaryBatteryToggleButton.addEventListener('click', () => toggleBattery(secondaryBatteryToggleButton, "Secondary Battery"));

  moveForwardButton.addEventListener('click', () => moveSatellite("forward"));
  moveBackwardButton.addEventListener('click', () => moveSatellite("backward"));
  turnLeftButton.addEventListener('click', () => moveSatellite("left"));
  turnRightButton.addEventListener('click', () => moveSatellite("right"));

  updateBatteryStatus();
  updateSatelliteMeasurements();

  setInterval(updateBatteryStatus, 10000);
  setInterval(updateSatelliteMeasurements, 10000);
});
