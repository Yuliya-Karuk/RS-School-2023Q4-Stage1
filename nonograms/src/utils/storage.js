class Storage {
  constructor() {
    this.name = 'YKaruk-nonograms';
  }

  saveResult(name, level, value) {
    const games = localStorage.getItem(this.name);

    if (!games) {
      localStorage.setItem(this.name, JSON.stringify([{ name, level, value }]));
    } else {
      const parsedGames = JSON.parse(games);
      if (parsedGames.length === 5) parsedGames.pop();
      parsedGames.push({ name, level, value });
      parsedGames.sort((a, b) => a.value - b.value);

      localStorage.setItem(this.name, JSON.stringify(parsedGames));
    }
  }

  getResults() {
    const games = localStorage.getItem(this.name);
    return JSON.parse(games);
  }
}

export default Storage;
