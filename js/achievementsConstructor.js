class Achievement {
  constructor(title, progress, img) {
    this.title = title;
    this.progress = progress;
    this.img = img;
  }
}

const achievements = [
  new Achievement("???", "68% x2", ""),
  new Achievement("Solar Flare", "69%", "solarFlare.png"),
  new Achievement("Midnight", "100%", "midnight.png"),
  new Achievement("arcturus", "83%", "arcturus.png"),
  new Achievement("Starlight Summit", "100%", "starlight.png"),
  new Achievement("Starlit Stroll", "100%", "starlit.png"),
  new Achievement("VOID", "78%", "void.png"),
  new Achievement("Sky Shredder", "100%", "skyShredder.png"),
  new Achievement("shimmer", "95%", "shimmer.png"),
  new Achievement("RUST", "100%", "rust.png"),
  new Achievement("Lucid Nightmares", "100%", "lucidNightmares.png"),
  new Achievement("The Rupture", "100%", "theRupture.png"),
  new Achievement("Sazerix", "100%", "sazerix.png"),
  new Achievement("Nullscapes", "68-100", "nullscapes.png"),
  new Achievement("Kyouki", "77-100", "kyouki.png"),
  new Achievement("Endless Dream", "100%", "endlessDream.png"),
  new Achievement("Bloodbath", "100%", "bloodbath.png"),
  new Achievement("Hidden In The Sand", "100%", "hiddenInTheSand.png"),
];

const displayAchievement = (achievements) => {
  for (i = 0; i < achievements.length; i++) {
    const list = document.querySelector(".list-achievements");

    const etiket = `
            <div id="list-level-${Number(i + 1)}" class="list-level achievement row">
                <div class="list-level-placement col-2">
                    <span>#${Number(i + 1)}</span>
                </div>
                <div class="list-level-background-image col-10" style="background-image: url(../img/${achievements[i].img});">
                    <span class="list-level-title">${achievements[i].title} ${achievements[i].progress}</span>
                </div>
            </div>
        `;

    list.insertAdjacentHTML("beforeend", etiket);
  }
};

displayAchievement(achievements);
