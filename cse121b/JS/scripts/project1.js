document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const playerList = document.getElementById('player-list');
  
    // Replace this with a real API endpoint
    const apiUrl = "https://www.thesportsdb.com/api/v1/json/1/lookup_all_players.php?id=133602"
    ;
  
    // Function to fetch player data
    const fetchPlayers = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error fetching player data:', error);
      }
    };
  
    // Function to display players in the list
    const displayPlayers = (players) => {
      playerList.innerHTML = '';
      players.forEach((player) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
          <img src="https://www.thesportsdb.com/api/v1/json/1/lookup_all_players.php?id=133602
          " alt="${player.name}">
          <div>
            <h3>${player.name}</h3>
            <p>${player.email}</p>
          </div>
        `;
        playerList.appendChild(listItem);
      });
    };
  
    // Event listener for search input
    searchInput.addEventListener('input', async () => {
      const searchTerm = searchInput.value.toLowerCase();
      const players = await fetchPlayers();
  
      if (!searchTerm) {
        displayPlayers(players);
      } else {
        const filteredPlayers = players.filter((player) =>
          player.name.toLowerCase().includes(searchTerm) ||
          player.email.toLowerCase().includes(searchTerm)
        );
        displayPlayers(filteredPlayers);
      }
    });
  
    // Initial data display
    fetchPlayers()
      .then(displayPlayers)
      .catch((error) => console.error('Error:', error));
  });
  