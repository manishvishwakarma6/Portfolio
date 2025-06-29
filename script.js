
// navbar
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("toggle-button");
  const navLinks = document.getElementById("nav-links");
  const navItems = document.querySelectorAll(".nav-link");

  // Toggle nav menu
  toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
    navLinks.classList.toggle("active");
  });

  // Smooth scroll and activate clicked link
  navItems.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 70, // Adjust for navbar height
          behavior: "smooth"
        });

        // Close mobile nav and set active class
        navItems.forEach(item => item.classList.remove("active"));
        link.classList.add("active");
        navLinks.classList.remove("active");
        toggle.classList.remove("active");
      }
    });
  });

  // ScrollSpy to auto-highlight nav link while scrolling
  const sectionIds = Array.from(navItems).map(link => link.getAttribute("href").substring(1));

  window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY + 80;

    sectionIds.forEach(id => {
      const section = document.getElementById(id);
      if (section && scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
        navItems.forEach(item => item.classList.remove("active"));
        const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
        if (activeLink) activeLink.classList.add("active");
      }
    });
  });
});


// certificates

const overlay = document.getElementById("sliderOverlay");
  const slider = document.getElementById("slider");

  const imageElements = document.querySelectorAll(".image-grid img");
  const imageSources = Array.from(imageElements).map(img => img.src);
  let current = 0;

  // Dynamically create slides
  function createSlides() {
    slider.innerHTML = imageSources.map(src => `
      <div class="slide">
        <img src="${src}" alt="">
      </div>
    `).join("");
  }

  createSlides(); // Call once at load

  function showSlide(index) {
    const slides = document.querySelectorAll(".slide");
    if (index >= slides.length) current = 0;
    else if (index < 0) current = slides.length - 1;
    else current = index;

    slider.style.transform = `translateX(-${current * 100}%)`;
  }

  function moveSlide(step) {
    showSlide(current + step);
  }

  function openSlider(index) {
    overlay.style.display = "block";
    showSlide(index);
  }

  function closeSlider() {
    overlay.style.display = "none";
  }

  // Optional: Auto Slide (remove if not needed)
   setInterval(() => { moveSlide(1); }, 2000);

  // Assign click handler dynamically
  imageElements.forEach((img, index) => {
    img.addEventListener("click", () => openSlider(index));
  });
  

// awards
 let myIndex = 0;
carousel();

function carousel() {
  const slides = document.getElementsByClassName("mySlides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > slides.length) {
    myIndex = 1;
  }
  slides[myIndex - 1].style.display = "block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}


// contact 






// card slider 

	let testSlide = document.querySelectorAll('.testItem');
	let dots = document.querySelectorAll('.dot');

	var counter = 0;
	function switchTest(currentTest){
		currentTest.classList.add('active');
		var testId = currentTest.getAttribute('attr');
		if(testId > counter){
			testSlide[counter].style.animation = 'next1 0.5s ease-in forwards';
			counter = testId;
			testSlide[counter].style.animation = 'next2 0.5s ease-in forwards';
		}
		else if(testId == counter){return;}
		else{
			testSlide[counter].style.animation = 'prev1 0.5s ease-in forwards';
			counter = testId;
			testSlide[counter].style.animation = 'prev2 0.5s ease-in forwards';
		}
		indicators();
	}
	function indicators(){
		for(i = 0; i < dots.length; i++){
			dots[i].className = dots[i].className.replace(' active', '');
		}
		dots[counter].className += ' active';
	}
	function slideNext(){
		testSlide[counter].style.animation = 'next1 0.5s ease-in forwards';
		if(counter >= testSlide.length - 1){
			counter = 0;
		}
		else{
			counter++;
		}
		testSlide[counter].style.animation = 'next2 0.5s ease-in forwards';
		indicators();
	}
	function autoSliding(){
		deleteInterval = setInterval(timer, 2000);
		function timer(){
			slideNext();
			indicators();
		}
	}
	autoSliding();
	const container = document.querySelector('.indicators');
	container.addEventListener('mouseover', pause);
	function pause(){
		clearInterval(deleteInterval);
	}
	container.addEventListener('mouseout', autoSliding);



