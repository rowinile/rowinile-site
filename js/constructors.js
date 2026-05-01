class Level {
  constructor(
    title,
    completionLink,
    number,
    placement,
    personalPlacement,
    rating,
    experience,
    enjoyment,
    attempts,
    worstFails,
    hardestParts,
    easiestParts,
    img,
  ) {
    this.title = title;
    this.completionLink = completionLink;
    this.number = number;
    this.placement = placement;
    this.personalPlacement = personalPlacement;
    this.rating = rating;
    this.experience = experience;
    this.enjoyment = enjoyment;
    this.attempts = attempts;
    this.worstFails = worstFails;
    this.hardestParts = hardestParts;
    this.easiestParts = easiestParts;
    this.img = img;
  }
}

const levels = [
  new Level(
    "Midnight by zYuko",
    "https://youtu.be/vFh--H8HSJU",
    "8",
    "38",
    "1",
    "8/10",
    "6/10",
    "8/10",
    "66275",
    "94%, 85%",
    "28-31, 40-50, 57-60, 65, 78",
    "0-28, 81-100",
    "midnight.png",
  ),
  new Level(
    "Starlight Summit by hazelmrow",
    "https://youtu.be/1hbvPzbMG3Q",
    "11",
    "91",
    "2",
    "8/10",
    "0/10",
    "5/10",
    "19269",
    "80% x2, 78%",
    "the level",
    "",
    "starlight.png",
  ),
  new Level(
    "Starlit Stroll by Enfur",
    "https://youtu.be/w0UNwmrgOt8",
    "10",
    "84",
    "2",
    "9/10",
    "10/10",
    "8/10",
    "10935 (153 for rebeat)",
    "100%, 86%, 79%",
    "35-45, 60-68",
    "0-11, 68-76",
    "starlit.png",
  ),
  new Level(
    "Sky Shredder by dorvict",
    "https://youtu.be/Mn6JugEwMHk",
    "7",
    "73",
    "1",
    "10/10",
    "10/10",
    "9/10",
    "19753",
    "86%, 77%, 70%",
    "18-23, 27, 39-52, 70-86",
    "9-15, 52-70",
    "skyShredder.png",
  ),
  new Level(
    "RUST by neigefeu",
    "https://youtu.be/82rnpDKG45Q",
    "2",
    "79",
    "1",
    "8/10",
    "7/10",
    "9/10",
    "17507",
    "95% x3, 94%, 88%, 86% x2",
    "0-17, 24-27, 76-100",
    "43-76",
    "rust.png",
  ),
  new Level(
    "Lucid Nightmares by CairoX",
    "https://youtu.be/Pof6tfPB3pA",
    "2",
    "79",
    "1",
    "6/10",
    "3/10",
    "5/10",
    "56244",
    "90%, 75% x4, 74% x2, 72% x3",
    "2-7, 50-66, 72-75",
    "40-50, 7-18",
    "lucidNightmares.png",
  ),
  new Level(
    "The Rupture by Ka1ns",
    "https://youtu.be/O90XpWzvoxQ",
    "5",
    "103",
    "3",
    "7/10",
    "7/10",
    "7/10",
    "14690",
    "71% x3, 70%, 62% x2",
    "11-13, 34-36, 45-50, 69-72",
    "18-27, 30-34, 54-65, 81-100",
    "theRupture.png",
  ),
  new Level(
    "Sazerix by Zeptrus",
    "https://youtu.be/9BGKB-diLHM",
    "3",
    "110",
    "2",
    "8/10",
    "9/10",
    "8/10",
    "10620",
    "76%, 71%, 70%",
    "17-32, 0-17 (in that order)",
    "50-66",
    "sazerix.png",
  ),
  new Level(
    "Endless Dream by DreamTide",
    "https://youtu.be/jGplXh3pZDo",
    "6",
    "N/A",
    "5",
    "10/10",
    "10/10",
    "10/10",
    "?",
    "50%, 49%",
    "0-23, 32-34, 85-100",
    "23-32, 36-65",
    "endlessDream.png",
  ),
  new Level(
    "Bloodbath by Riot",
    "https://youtu.be/t0yCY1tKMhU",
    "1",
    "N/A",
    "1",
    "4/10",
    "5/10",
    "1/10",
    "6022+",
    "N/A",
    "N/A",
    "N/A",
    "bloodbath.png",
  ),
  new Level(
    "Hidden in The Sand",
    "https://youtu.be/dQw4w9WgXcQ",
    "9",
    "N/A",
    "9",
    "3/10",
    "5/10",
    "5/10",
    "N/A",
    "N/A",
    "N/A",
    "N/A",
    "hiddenInTheSand.png",
  ),
];

const displayLevel = (levels) => {
  for (i = 0; i < levels.length; i++) {
    const list = document.querySelector(".list-levels");

    const etiket = `
            <div id="list-level-${Number(i + 1)}" class="list-level row">
                <div class="list-level-placement col-2">
                    <span>#${Number(i + 1)}</span>
                </div>
                <div class="list-level-background-image col-10" style="background-image: url(img/${levels[i].img});">
                    <span class="list-level-title">${levels[i].title}</span>
                </div>
            </div>
            <div id="list-level-details-${Number(i + 1)}" class="col-12 list-level-details">
                <span>
                    Completion Video: <strong><a href="${levels[i].completionLink}" target="_blank">Click Me</a></strong>
                </span>
                <span>
                    Extreme Demon: <strong>#${levels[i].number}</strong>
                </span>
                <span>
                    Placement on Demon List When Beaten: <strong>#${levels[i].placement}</strong>
                </span>
                <span>
                    Placement on Personal Demon List When Beaten: <strong>#${levels[i].personalPlacement}</strong>
                </span>
                <span>
                    Level Rating: <strong>${levels[i].rating}</strong>
                </span>
                <span>
                    Experience: <strong>${levels[i].experience}</strong>
                </span>
                <span>
                    Enjoyment: <strong>${levels[i].enjoyment}</strong>
                </span>
                <span>
                    Attempts: <strong>${levels[i].attempts}</strong>
                </span>
                <span>
                    Worst Fails: <strong>${levels[i].worstFails}</strong>
                </span>
                <span>
                    Hardest Part(s): <strong>${levels[i].hardestParts}</strong>
                </span>
                <span>
                    Easiest Part(s): <strong>${levels[i].easiestParts}</strong>
                </span>
            </div>
        `;

    list.insertAdjacentHTML("beforeend", etiket);
  }
};

displayLevel(levels);
