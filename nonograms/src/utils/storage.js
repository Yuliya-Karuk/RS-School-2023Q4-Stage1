class Storage {
  constructor() {
    this.score = 'YKaruk-nonograms';
    this.savedGame = 'YKaruk-saved';
  }

  saveResult(name, level, value) {
    const games = localStorage.getItem(this.score);

    if (!games) {
      localStorage.setItem(this.score, JSON.stringify([{ name, level, value }]));
    } else {
      const parsedGames = JSON.parse(games);
      if (parsedGames.length === 5) parsedGames.pop();
      parsedGames.push({ name, level, value });
      parsedGames.sort((a, b) => a.value - b.value);

      localStorage.setItem(this.score, JSON.stringify(parsedGames));
    }
  }

  getResults() {
    const games = localStorage.getItem(this.score);
    return JSON.parse(games);
  }

  saveGame(matrix, timer, nameWinImage) {
    localStorage.setItem(this.savedGame, JSON.stringify({ matrix, timer, nameWinImage }));
  }

  getSavedGame() {
    const savedGame = localStorage.getItem(this.savedGame);
    return JSON.parse(savedGame);
  }
}

export default Storage;
