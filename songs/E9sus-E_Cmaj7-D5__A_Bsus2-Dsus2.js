showSongInfo('In Desperate Need of Lyrics','X¢Rx');

createChord("Em(b6)", "X", 7, 5, 5, 5, "X", "intro");
addRepeat('intro');
    createButton("Emb6", "Em(b6)", "X", 7, 5, 5, 5, "X", "intro", "hammer-on 1st note");
    createButton("Gbmb6", "F#m(b6)",  "X", 9, 7, 7, 7, "X", "intro", "hammer-on 1st note");
    createButton("Abmb6", "G#m(b6)",  "X", 11, 9, 9, 9, "X", "intro", "hammer-on 1st note");
endRepeat('intro', 2);


addRepeat('verse');
    createButton("E9sus", "E9sus", 0, 9, 7, 7, 7, "X", "verse");
    createButton("Ev2", "E", 0, 11, 9, 9, 9, "X", "verse");
endRepeat('verse', 4);
createButton("Esus_add9", "Esus(add9)", 0, 12, "X", 11, 10, "X", "verse");
createButton("Ev4", "E", 0, 14, "X", 13, 12, "X", "verse");
addRepeat('prechorus');
    createButton("Cmaj7", "Cmaj7", "X", 3, 2, 0, 0, "X", "prechorus");
    createButton("D5_A", "D5/A", "X", 0, 0, 2, 3, "X", "prechorus");
endRepeat('prechorus', 4);

addRepeat('chorus');
    createButton("Bsus2_F-", "Bsus2/F#", 2, 2, 4, 4, 2, 2, "chorus");
    createButton("Dsus2_Av2", "Dsus2/A", 5, 5, 7, 7, 5, 5, "chorus");
    createButton("Asus2_E", "Asus2/E", 0, 0, 2, 2, 0, 0, "chorus");
    createButton("Ev1", "E", 0, 2, 2, 1, 0, 0, "chorus");
endRepeat('chorus', 4);
createButton("F_", "F#", 2, 4, 4, 3, 2, 2, "chorus");
createButton("Aadd9", "A(add9)", 5, 7, 7, 6, 0, 0, "chorus");