
    const faders = document.querySelectorAll(".fade");

    const appearOnScroll = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    faders.forEach(fade => {
      appearOnScroll.observe(fade);
    });
  
