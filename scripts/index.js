window.onload = function () {
    Particles.init({
        selector: '.background',
        maxParticles: 150,
        sizeVariations: 6,
        connectParticles: true,
        color: "#001199",
        responsive: [
            {
                breakpoint: 768,
                options: {
                    maxParticles: 120,
                }
            }, {
                breakpoint: 425,
                options: {
                    maxParticles: 100,
                }
            }, {
                breakpoint: 320,
                options: {
                    maxParticles: 0
                }
            }
        ]
    });
};