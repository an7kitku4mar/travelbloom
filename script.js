document.getElementById('search-input').addEventListener('input', handleSearch);

function handleSearch() {
  const query = document.getElementById('search-input').value;
  const resultsContainer = document.getElementById('search-results');

  if (query.trim() === '') {
    resultsContainer.innerHTML = '';
    return;
  }

  const recommendations = [
    'Paris - City of Lights',
    'Kyoto - Cultural Treasure',
    'Cape Town - Scenic Beauty',
    'New York - Urban Adventure',
    'Bali - Tropical Paradise'
  ];

  const filtered = recommendations.filter(place =>
    place.toLowerCase().includes(query.toLowerCase())
  );

  if (filtered.length) {
    resultsContainer.innerHTML =
      '<ul class="mt-2 list-disc pl-5 text-white">' +
      filtered.map(r => `<li>${r}</li>`).join('') +
      '</ul>';
  } else {
    resultsContainer.innerHTML = '<p class="text-white mt-2">No results found.</p>';
  }
}


  function startCarousel(id) {
    const container = document.getElementById(id);
    const images = container.querySelectorAll('.carousel-image');
    let index = 0;

    setInterval(() => {
      images[index].classList.remove('active');
      index = (index + 1) % images.length;
      images[index].classList.add('active');
    }, 3000); // Change every 3 seconds
  }

  // Start both carousels
  startCarousel("beach-carousel");
  startCarousel("temple-carousel");
