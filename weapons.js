// Initialize the current rotation angle and timeline index
let currentRotation = 0;
let currentTimelineIndex = 0;

// Create an array to store your weapon item timelines
const weaponItemTimelines = [];

// Initialize and add animations to your weapon item timelines
for (let i = 0; i < 6; i++) {
  weaponItemTimelines[i] = gsap.timeline({ paused: true });

  // Sample animation for weapon item timeline i
  switch (i) {
    case 0:
      weaponItemTimelines[i].to(
        ".weapon-panel",
        { opacity: 0, duration: 0.2 },
        0
      );
      weaponItemTimelines[i].to(
        ".weapon-checkmark",
        { opacity: 0, duration: 0.2 },
        0
      );
      weaponItemTimelines[i].fromTo(
        ".weapon-panel.cc-weapon-1",
        { opacity: 0, display: "none" },
        { opacity: 1, duration: 0.7, display: "flex" },
        0
      );
      weaponItemTimelines[i].fromTo(
        ".weapon-checkmark.cc-weapon-1",
        { opacity: 0 },
        { opacity: 1, duration: 0.7 },
        0
      );
      break;
    case 1:
      weaponItemTimelines[i].to(
        ".weapon-panel",
        { opacity: 0, duration: 0.2 },
        0
      );
      weaponItemTimelines[i].to(
        ".weapon-checkmark",
        { opacity: 0, duration: 0.2 },
        0
      );
      weaponItemTimelines[i].fromTo(
        ".weapon-panel.cc-weapon-2",
        { opacity: 0, display: "none" },
        { opacity: 1, duration: 0.7, display: "flex" },
        0
      );
      weaponItemTimelines[i].fromTo(
        ".weapon-checkmark.cc-weapon-2",
        { opacity: 0 },
        { opacity: 1, duration: 0.7 },
        0
      );
      break;
    case 2:
      weaponItemTimelines[i].to(
        ".weapon-panel",
        { opacity: 0, duration: 0.2 },
        0
      );
      weaponItemTimelines[i].to(
        ".weapon-checkmark",
        { opacity: 0, duration: 0.2 },
        0
      );
      weaponItemTimelines[i].fromTo(
        ".weapon-panel.cc-weapon-3",
        { opacity: 0, display: "none" },
        { opacity: 1, duration: 0.7, display: "flex" },
        0
      );
      weaponItemTimelines[i].fromTo(
        ".weapon-checkmark.cc-weapon-3",
        { opacity: 0 },
        { opacity: 1, duration: 0.7 },
        0
      );
      break;
    case 3:
      weaponItemTimelines[i].to(
        ".weapon-panel",
        { opacity: 0, duration: 0.2 },
        0
      );
      weaponItemTimelines[i].to(
        ".weapon-checkmark",
        { opacity: 0, duration: 0.2 },
        0
      );
      weaponItemTimelines[i].fromTo(
        ".weapon-panel.cc-weapon-4",
        { opacity: 0, display: "none" },
        { opacity: 1, duration: 0.7, display: "flex" },
        0
      );
      weaponItemTimelines[i].fromTo(
        ".weapon-checkmark.cc-weapon-4",
        { opacity: 0 },
        { opacity: 1, duration: 0.7 },
        0
      );
      break;
    case 4:
      weaponItemTimelines[i].to(
        ".weapon-panel",
        { opacity: 0, duration: 0.2 },
        0
      );
      weaponItemTimelines[i].to(
        ".weapon-checkmark",
        { opacity: 0, duration: 0.2 },
        0
      );
      weaponItemTimelines[i].fromTo(
        ".weapon-panel.cc-weapon-5",
        { opacity: 0, display: "none" },
        { opacity: 1, duration: 0.7, display: "flex" },
        0
      );
      weaponItemTimelines[i].fromTo(
        ".weapon-checkmark.cc-weapon-5",
        { opacity: 0 },
        { opacity: 1, duration: 0.7 },
        0
      );
      break;
    case 5:
      weaponItemTimelines[i].to(
        ".weapon-panel",
        { opacity: 0, duration: 0.2 },
        0
      );
      weaponItemTimelines[i].to(
        ".weapon-checkmark",
        { opacity: 0, duration: 0.2 },
        0
      );
      weaponItemTimelines[i].fromTo(
        ".weapon-panel.cc-weapon-6",
        { opacity: 0, display: "none" },
        { opacity: 1, duration: 0.7, display: "flex" },
        0
      );
      weaponItemTimelines[i].fromTo(
        ".weapon-checkmark.cc-weapon-6",
        { opacity: 0 },
        { opacity: 1, duration: 0.7 },
        0
      );
      break;
    default:
      break;
  }
}

// Function to rotate the .weapon-triggers element
function rotateWeaponTriggers(rotation) {
  gsap.to(".weapon-triggers", { duration: 1, rotation: -rotation });
  gsap.to(".weapon-item", { duration: 0.7, rotation: rotation });
}

// Function to handle the "Next" button click
function nextTimeline() {
  currentRotation += 60; // Increment by 60 degrees
  currentTimelineIndex =
    (currentTimelineIndex + 1) % weaponItemTimelines.length;

  // Rotate the .weapon-triggers element
  rotateWeaponTriggers(currentRotation);

  // Play the corresponding weapon item timeline and restart if at the end
  weaponItemTimelines[currentTimelineIndex].restart().play();
}

// Function to handle the "Prev" button click
function prevTimeline() {
  currentRotation -= 60; // Decrement by 60 degrees

  // Handle looping both forward and backward
  if (currentTimelineIndex === 0) {
    currentTimelineIndex = weaponItemTimelines.length - 1; // Go to the last timeline when at the beginning
  } else {
    currentTimelineIndex--; // Move to the previous timeline
  }

  // Rotate the .weapon-triggers element
  rotateWeaponTriggers(currentRotation);

  // Play the corresponding weapon item timeline and restart if at the end
  weaponItemTimelines[currentTimelineIndex].restart().play();
}

// Add event listeners to the arrow buttons
document.getElementById("prevArrow").addEventListener("click", prevTimeline);
document.getElementById("nextArrow").addEventListener("click", nextTimeline);

// Play the first weapon item timeline at load
weaponItemTimelines[0].play();

// Start with all weapon item timelines paused except the first one
for (let i = 1; i < weaponItemTimelines.length; i++) {
  weaponItemTimelines[i].pause();
}
