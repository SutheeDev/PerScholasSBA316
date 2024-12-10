const textToType = [
  {
    textId: 1,
    level: "easy",
    str: `Dear Mrs Brown\n\nI cannot come to school today. My cat sat on my math homework and I am still trying to convince her to move. She is very stubborn. I will see you tomorrow, hopefully cat-free!\n\nTimmy`,
  },
  {
    textId: 2,
    level: "easy",
    str: `Hi Mom\n\nI ate my last candy. The world feels dull now. Can I have more? Maybe just a truckload? I will clean my room... or at least think about it. Love you!\n\nEmily`,
  },
  {
    textId: 3,
    level: "easy",
    str: `Dear Laundry Fairy\n\nOne sock has vanished again. I demand a full investigation. I suspect the dryer is secretly eating them. Please return the sock or I will go barefoot forever.\n\nJoey`,
  },
  {
    textId: 4,
    level: "easy",
    str: `Hi Boss\n\nMy dog chewed the internet cable. He thought it was a toy. I cannot work until it gets fixed. Sorry about the delay.\n\nAlex`,
  },
  {
    textId: 5,
    level: "easy",
    str: `Hi Grandpa\n\nGrandma learned how to text! She is sending me 50 cat gifs per hour. Please distract her with cookies or a puzzle before I drown in cats.\n\nThanks\nSarah`,
  },
  {
    textId: 6,
    level: "medium",
    str: `Hi Grandpa,\n\nI tried your cookie recipe, but I accidentally added salt instead of sugar. Now the cookies taste like the ocean! Should I call them “beach cookies” and hope nobody notices, or start over? Please reply quickly; the party is tonight!\n\nLove,\nSam`,
  },
  {
    textId: 7,
    level: "medium",
    str: `Dear Time Travel Agency,\n\nI wanted to visit 1999, but you sent me to 1599 instead. The people here are nice, but they don’t understand my phone, and I really miss pizza. Can you bring me back or at least send snacks?\n\nThanks,\nMorgan`,
  },
  {
    textId: 8,
    level: "medium",
    str: `Hi Maintenance,\n\nI think my office chair is haunted. It spins by itself, and yesterday it rolled away while I was sitting on it! Could you check for ghosts or upgrade me to a non-haunted chair? Thanks!\n\nSincerely,\nTaylor`,
  },
  {
    textId: 9,
    level: "medium",
    str: `Hi Professor,\n\nI wrote my essay in invisible ink because it seemed cool, but now I can’t read it. Is there a way to fix this? If not, can I get an extension while I rewrite it? I promise it’s a really good essay!\n\nThanks,\nAlex`,
  },
  {
    textId: 10,
    level: "medium",
    str: `Dear Wizard Academy,\n\nMy dragon refuses to follow commands. I told it to “breathe fire,” and it sneezed instead. Now my curtains are gone. Is there a training manual for stubborn dragons? I don’t want to fail my fire-breathing final!\n\nYours,\nLily`,
  },
  {
    textId: 11,
    level: "hard",
    str: `Dear Philharmonic,\n\nMy cat, Maestro Meowzart, would like to audition for your esteemed opera. He excels in mezzo-soprano caterwauling, with a penchant for arias about tuna. Do you accommodate feline virtuosos, or shall we await the formation of a Cat Philharmonic?\n\nCordially,\nPenelope`,
  },
  {
    textId: 12,
    level: "hard",
    str: `Dear Paleontology Society,\n\nAn unruly triceratops has trampled my azaleas and devoured the hydrangeas. I suspect it wandered through an inadvertent time portal. Please dispatch a specialist proficient in prehistoric problem-solving to relocate this herbivorous hooligan before my garden becomes extinct!\n\nBest regards,\nGenevieve`,
  },
  {
    textId: 13,
    level: "hard",
    str: `Dear Paranormal Real Estate Agency,\n\nThe haunted credenza you sold me emits inexplicable moaning and sporadically rearranges the cutlery. While I appreciate the spectral ambiance, it’s impeding my dinner parties. Kindly advise on exorcism options or a trade-in for a less temperamental poltergeist.\n\nSincerely,\nFrederick`,
  },
  {
    textId: 14,
    level: "hard",
    str: `Dear Neighborhood Association,\n\nMy neighbor has installed a legion of luminous lawn gnomes that glare ominously into my dining room. This grotesque gnome invasion violates all principles of suburban harmony. Please initiate adjudication or issue an ordinance prohibiting their nocturnal glow.\n\nGrievously,\nMeredith`,
  },
  {
    textId: 15,
    level: "hard",
    str: `Dear Antiquities Curator,\n\nThe ornate butterknife I acquired from your medieval collection appears to harbor a vexatious curse. It animates at night, rearranging my pantry alphabetically. Kindly exchange it for a non-enchanted equivalent or provide a curse removal guide.\n\nYours enchantingly,\nPercival`,
  },
  {
    textId: 16,
    level: "insane",
    str: `Dear DevOps Team,\n\nThe deploy.sh script (line 42) mistakenly uses $unset(VAR) instead of export VAR=0. Consequently, the server at 192.168.1.24 crashed at 3:14 AM UTC. The logs read: “SyntaxError: Expected semicolon; found chaos.” Please fix ASAP—my cat depends on this app!\n\nThanks,\nLinus`,
  },
  {
    textId: 17,
    level: "insane",
    str: `Dear IRS,\n\nFor Form 42B-O for interplanetary income, do I declare 3,141,592 ZogCoins from my mining colony? Section 7(b) asks for “otherworldly earnings,” but ZogCoins aren’t earthly. Will penalties apply if my quantum wallet address isn’t U.S.-based?\n\nSincerely,\nZark Polaris`,
  },
  {
    textId: 18,
    level: "insane",
    str: `Dear Marine Research Team,\n\nDuring our dive at 23N, 89W, we observed an octopus arranging shells into what resembled binary: 10110011. Is it signaling, or just an aquatic prankster? DNA sample M-B098 also shows traces of glowing algae—possible symbiosis? Please advise before it "hacks" our sonar.\n\nSincerely,\nDr. Coral Reefington`,
  },
  {
    textId: 19,
    level: "insane",
    str: `Dear Creative Team,\n\nMy laptop’s Helvetica turned into Comic Sans overnight, and the logo mockup exported at 72 DPI instead of 300. Layers in project_final_final_v3.psd mysteriously renamed themselves to “lol_goodluck.png.” Is this a virus, or just Adobe being Adobe?\n\nDesperately,\nAlex the Designer`,
  },
  {
    textId: 20,
    level: "insane",
    str: `Dear Botanical Research Team,\n\nSpecimen B-42 (Asplenium ferox) has developed thorns overnight. The pH of its soil dropped to 4.2, and its chlorophyll shows abnormal fluorescence under UV light. Is this linked to the experimental fertilizer (Batch #X99)? Please advise before it evolves further.\n\nRegards,\nDr. Ivy Greenleaf`,
  },
];

export default textToType;

// Test Text
// const textToType = [
//   { textId: 1, level: "easy", str: "111" },
//   { textId: 2, level: "easy", str: "222" },
//   { textId: 3, level: "easy", str: "333" },
//   { textId: 4, level: "medium", str: "type 111" },
//   { textId: 5, level: "medium", str: "type 222" },
//   { textId: 6, level: "medium", str: "type 333" },
//   { textId: 7, level: "hard", str: "type type 111" },
//   { textId: 8, level: "hard", str: "type type 222" },
//   { textId: 9, level: "hard", str: "type type 333" },
//   { textId: 10, level: "insane", str: "type type type 111" },
//   { textId: 11, level: "insane", str: "type type type 222" },
//   { textId: 12, level: "insane", str: "type type type 333" },
// ];
// export default textToType;
