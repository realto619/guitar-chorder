showSongInfo('Hendrixy','X¢Rx');
// showSongArtist('X\u00A2Rx');

// createChord("E", 0, 7, 9, 9, 9, "X", "verse");
addRepeat('verse');
    createButton("E__", "E", 0, 7, 9, 9, 9, "X", "verse");
    createButton("Abmb6", "G#m(b6)",  "X", 11, 9, 9, 9, "X", "verse", "hammer-on 1st note");
    createButton("Gbm7", "F#m7",  "X", 9, 11, 9, 10, 9, "verse");
    createButton("E___", "E", 0, 7, 9, 9, 9, "X", "verse");
    createButton("Abmb6_", "G#m(b6)",  "X", 11, 9, 9, 9, "X", "verse");
    createButton("Gbm7_", "F#m7",  "X", 9, 11, 9, 10, 9, "verse");
    createButton("A_", "A",  "X", 12, 11, 9, 10, 9, "verse");
    createButton("B_", "B",  "X", 14, 13, 11, 12, 11, "verse", "slide up to this from the A");
endRepeat('verse', 3);


addRepeat('chorus');
    createButton("Dbm", "C#m", "X", 4, 6, 6, 5, 4, "chorus");
    createButton("Gb_", "F#", 2, 4, 4, 3, 2, 2, "chorus");
    createButton("A__", "A", "X", 0, 2, 2, 2, 0, "chorus");
    createButton("Dbmb6", "C#m(b6)", "X", 4, 2, 2, 2, "X", "chorus", "hammer-on 1st note");
    createButton("E____", "E", 0, 2, 2, 1, 0, 0, "chorus");
    createButton("B__", "B", "X", 2, 4, 4, 4, 2, "chorus");
endRepeat('chorus', 2);


addRepeat('bridge');
    createButton("Dbm_", "C#m", "X", 4, 6, 6, 5, 4, "bridge");
    createButton("E_____", "E", 0, 7, 9, 9, 9, 7, "bridge");
    createButton("Gbm7__", "F#m7",  "X", 9, 11, 9, 10, 9, "bridge");
    createButton("A___", "A",  "X", 12, 11, 9, 10, 9, "bridge");
    createButton("B___", "B",  "X", 14, 13, 11, 12, 11, "bridge");
endRepeat('bridge', 3);

// createButton("Esus_add9", "Esus(add9)", 0, 12, "X", 11, 10, "X", "verse");
// createButton("Ev4", "E", 0, 14, "X", 13, 12, "X", "verse");
// addRepeat('prechorus');
//     createButton("Cmaj7", "Cmaj7", "X", 3, 2, 0, 0, "X", "prechorus");
//     createButton("D5_A", "D5/A", "X", 0, 0, 2, 3, "X", "prechorus");
// repeatEnd('prechorus', 3);

// addRepeat('chorus');
//     createButton("Bsus2_F-", "Bsus2/F#", 2, 2, 4, 4, 2, 2, "chorus");
//     createButton("Dsus2_Av2", "Dsus2/A", 5, 5, 7, 7, 5, 5, "chorus");
//     createButton("Asus2_E", "Asus2/E", 0, 0, 2, 2, 0, 0, "chorus");
//     createButton("Ev1", "E", 0, 2, 2, 1, 0, 0, "chorus");
// repeatEnd('chorus', 3);
// createButton("F_", "F#", 2, 4, 4, 3, 2, 2, "chorus");
// createButton("Aadd9", "A(add9)", 5, 7, 7, 6, 0, 0, "chorus");
