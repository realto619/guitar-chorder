if(clg !== 'undefined') {
  let clg = false;
} else {
  clg = false;
}
// console.log('Enter "clg = true" in console for troubleshooting');

function addRepeat(section) {
  let start = document.createElement("span");
  // start.setAttribute("style", "color:white");
  start.setAttribute("class", "repeat_start");
  start.innerHTML = "[";
  document.querySelector(`.${section}`).appendChild(start);
}

function endRepeat(section, num) {
  let end = document.createElement("span");
  // end.setAttribute("style", "color:white");
  end.setAttribute("class", "repeat_end");
  end.setAttribute("title", "total number of times played");
  end.innerHTML = "]x" + num + "";
  document.querySelector(`.${section}`).appendChild(end);
}

function separator(section) {
  let divider = document.createElement("span");
  // start.setAttribute("style", "color:white");
  divider.setAttribute("class", "separator");
  divider.innerHTML = " | ";
  document.querySelector(`.${section}`).appendChild(divider);
}

function addBreak(ele = "chords") {
  let brk = document.createElement('br');
  if(ele !== "chords") {
        //   if(clg) console.log(document.getElementById(ele));
      document.querySelector('.'+ele).appendChild(brk);
  } else {
    chords.appendChild(brk);
  }
}


function getNote(val) {
let standard = {
  s6fX: "X",
  s6f0: "E1",
  s6f1: "F1",
  s6f2: "F#1",
  s6f3: "G1",
  s6f4: "G#1",
  s6f5: "A1",
  s6f6: "A#1",
  s6f7: "B1",
  s6f8: "C2",
  s6f9: "C#2",
  s6f10: "D2",
  s6f11: "D#2",
  s6f12: "E2",
  s6f13: "F2",
  s6f14: "F#2",
  s6f15: "G2",
  s6f16: "G#2",
  s5fX: "X",
  s5f0: "A1",
  s5f1: "A#1",
  s5f2: "B1",
  s5f3: "C2",
  s5f4: "C#2",
  s5f5: "D2",
  s5f6: "D#2",
  s5f7: "E2",
  s5f8: "F2",
  s5f9: "F#2",
  s5f10: "G2",
  s5f11: "G#2",
  s5f12: "A2",
  s5f13: "A#2",
  s5f14: "B2",
  s5f15: "C3",
  s5f16: "C#3",
  s4fX: "X",
  s4f0: "D2",
  s4f1: "D#2",
  s4f2: "E2",
  s4f3: "F2",
  s4f4: "F#2",
  s4f5: "G2",
  s4f6: "G#2",
  s4f7: "A2",
  s4f8: "A#2",
  s4f9: "B2",
  s4f10: "C3",
  s4f11: "C#3",
  s4f12: "D3",
  s4f13: "D#3",
  s4f14: "E3",
  s4f15: "F3",
  s4f16: "F#3",
  s3fX: "X",
  s3f0: "G2",
  s3f1: "G#2",
  s3f2: "A2",
  s3f3: "A#2",
  s3f4: "B2",
  s3f5: "C3",
  s3f6: "C#3",
  s3f7: "D3",
  s3f8: "D#3",
  s3f9: "E3",
  s3f10: "F3",
  s3f11: "F#3",
  s3f12: "G3",
  s3f13: "G#3",
  s3f14: "A3",
  s3f15: "A#3",
  s3f16: "B3",
  s2fX: "X",
  s2f0: "B2",
  s2f1: "C3",
  s2f2: "C#3",
  s2f3: "D3",
  s2f4: "D#3",
  s2f5: "E3",
  s2f6: "F3",
  s2f7: "F#3",
  s2f8: "G3",
  s2f9: "G#3",
  s2f10: "A3",
  s2f11: "A#3",
  s2f12: "B3",
  s2f13: "C4",
  s2f14: "C#4",
  s2f15: "D4",
  s2f16: "D#4",
  s1fX: "X",
  s1f0: "E3",
  s1f1: "F3",
  s1f2: "F#3",
  s1f3: "G3",
  s1f4: "G#3",
  s1f5: "A3",
  s1f6: "A#3",
  s1f7: "B3",
  s1f8: "C4",
  s1f9: "C#4",
  s1f10: "D4",
  s1f11: "D#4",
  s1f12: "E4",
  s1f13: "F4",
  s1f14: "F#4",
  s1f15: "G4",
  s1f16: "G#4"
};
let result = standard[val];
return result;
}

function clearNotes() {
let notes = document.querySelectorAll(".notes");
notes.forEach((element) => {
  element.setAttribute("class", "notes note-off");
  element.innerText = "";
});
}

const fret = document.querySelectorAll('.string .fret');
const header = document.createElement("header");
const theTitle = document.createElement("div");
const theArtist = document.createElement("div");
const chordname = document.createElement("div");
const frets = document.createElement("div");
const fretboard = document.createElement("div");
const showchords = document.createElement("div");
const footer = document.createElement("footer");
theTitle.setAttribute("id", "title");
theArtist.setAttribute("id", "artist");
chordname.setAttribute("id", "chordName");
header.appendChild(theTitle);
header.appendChild(theArtist);
fretboard.setAttribute("class", "fretboard");
frets.setAttribute("class", "frets");
showchords.setAttribute("class", "showchords");
const inject_frets = `<div class='fret'>
              <div id="F0" class='fret-label'>
              </div>
              </div>
              <div class='fret'>
              <div id="F1" class='fret-label'>
              </div>
              </div>
              <div class='fret'>
              <div id="F2" class='fret-label'>
              </div>
              </div>
              <div class='fret'>
              <div id="F3" class='fret-label'>
                3
              </div>
              </div>
              <div class='fret'>
              <div id="F4" class='fret-label'>
              </div>
              </div>
              <div class='fret'>
              <div id="F5" class='fret-label'>
                5
              </div>
              </div>
              <div class='fret'>
              <div id="F6" class='fret-label'>
              </div>
              </div>
              <div class='fret'>
              <div id="F7" class='fret-label'>
                7
              </div>
              </div>
              <div class='fret'>
              <div id="F8" class='fret-label'>
              </div>
              </div>
              <div class='fret'>
              <div id="F9" class='fret-label'>
                9
              </div>
              </div>
              <div class='fret'>
              <div id="F10" class='fret-label'>
              </div>
              </div>
              <div class='fret'>
              <div id="F11" class='fret-label'>
              </div>
              </div>
              <div class='fret'>
              <div id="F12" class='fret-label'>
                12
              </div>
              </div>
              <div class='fret'>
              <div id="F13" class='fret-label'>
              </div>
              </div>
              <div class='fret'>
              <div id="F14" class='fret-label'>
              </div>
              </div>
              <div class='fret'>
              <div id="F15" class='fret-label'>
                15
              </div>
              </div>
              <div class='fret'>
              <div id="F16" class='fret-label'>
              </div>
              </div>`;
const inject_strings = `<!--String S1 -->
              <div class='string'>
                <div class='fret'>
                  <div id="s1f0" class='notes note-off'>
                  </div>
                </div>
                <div class='fret'>
                  <div id="s1f1" class='notes note-off'>
                  </div>
                </div>
                <div class='fret'>
                  <div id="s1f2" class='notes note-off'>
                  </div>
                </div>
                <div class='fret'>
                  <div id="s1f3" class='notes note-off'>
                  </div>
                </div>
                <div class='fret'>
                  <div id="s1f4" class='notes note-off'>
                  </div>
                </div>
                <div class='fret'>
                  <div id="s1f5" class='notes note-off'>
                  </div>
                </div>
                <div class='fret'>
                  <div id="s1f6" class='notes note-off'>
                  </div>
                </div>
                <div class='fret'>
                  <div id="s1f7" class='notes note-off'>
                  </div>
                </div>
                <div class='fret'>
                  <div id="s1f8" class='notes note-off'>
                  </div>
                </div>
                <div class='fret'>
                  <div id="s1f9" class='notes note-off'>
                  </div>
                </div>
                <div class='fret'>
                  <div id="s1f10" class='notes note-off'>
                  </div>
                </div>
                <div class='fret'>
                  <div id="s1f11" class='notes note-off'>
                  </div>
                </div>
                <div class='fret'>
                  <div id="s1f12" class='notes note-off'>
                  </div>
                </div>
                <div class='fret'>
                  <div id="s1f13" class='notes note-off'>
                  </div>
                </div>
                <div class='fret'>
                  <div id="s1f14" class='notes note-off'>
                  </div>
                </div>
                <div class='fret'>
                  <div id="s1f15" class='notes note-off'>
                  </div>
                </div>
                <div class='fret'>
                  <div id="s1f16" class='notes note-off'>
                  </div>
                </div>

                <!--String S2 -->
                <div class='string'>
                  <div class='fret'>
                    <div id="s2f0" class='notes note-off'>
                    </div>
                  </div>
                  <div class='fret'>
                    <div id="s2f1" class='notes note-off'>
                    </div>
                  </div>
                  <div class='fret'>
                    <div id="s2f2" class='notes note-off'>
                    </div>
                  </div>
                  <div class='fret'>
                    <div id="s2f3" class='notes note-off'>
                    </div>
                  </div>
                  <div class='fret'>
                    <div id="s2f4" class='notes note-off'>
                    </div>
                  </div>
                  <div class='fret'>
                    <div id="s2f5" class='notes note-off'>
                    </div>
                  </div>
                  <div class='fret'>
                    <div id="s2f6" class='notes note-off'>
                    </div>
                  </div>
                  <div class='fret'>
                    <div id="s2f7" class='notes note-off'>
                    </div>
                  </div>
                  <div class='fret'>
                    <div id="s2f8" class='notes note-off'>
                    </div>
                  </div>
                  <div class='fret'>
                    <div id="s2f9" class='notes note-off'>
                    </div>
                  </div>
                  <div class='fret'>
                    <div id="s2f10" class='notes note-off'>
                    </div>
                  </div>
                  <div class='fret'>
                    <div id="s2f11" class='notes note-off'>
                    </div>
                  </div>
                  <div class='fret'>
                    <div id="s2f12" class='notes note-off'>
                    </div>
                  </div>
                  <div class='fret'>
                    <div id="s2f13" class='notes note-off'>
                    </div>
                  </div>
                  <div class='fret'>
                    <div id="s2f14" class='notes note-off'>
                    </div>
                  </div>
                  <div class='fret'>
                    <div id="s2f15" class='notes note-off'>
                    </div>
                  </div>
                  <div class='fret'>
                    <div id="s2f16" class='notes note-off'>
                    </div>
                  </div>
                </div>

                <!--String S3 -->
                <div class='string'>
                  <div class='fret'>
                    <div id="s3f0" class='notes note-off'>
                    </div>
                  </div>
                  <div class='fret'>
                    <div id="s3f1" class='notes note-off'>
                    </div>
                  </div>
                  <div class='fret'>
                    <div id="s3f2" class='notes note-off'>
                    </div>
                  </div>
                  <div class='fret'>
                    <div id="s3f3" class='notes note-off'>
                    </div>
                  </div>
                  <div class='fret'>
                    <div id="s3f4" class='notes note-off'>
                    </div>
                  </div>
                  <div class='fret'>
                    <div id="s3f5" class='notes note-off'>
                    </div>
                  </div>
                  <div class='fret'>
                    <div id="s3f6" class='notes note-off'>
                    </div>
                  </div>
                  <div class='fret'>
                    <div id="s3f7" class='notes note-off'>
                    </div>
                  </div>
                  <div class='fret'>
                    <div id="s3f8" class='notes note-off'>
                    </div>
                  </div>
                  <div class='fret'>
                    <div id="s3f9" class='notes note-off'>
                    </div>
                  </div>
                  <div class='fret'>
                    <div id="s3f10" class='notes note-off'>
                    </div>
                  </div>
                  <div class='fret'>
                    <div id="s3f11" class='notes note-off'>
                    </div>
                  </div>
                  <div class='fret'>
                    <div id="s3f12" class='notes note-off'>
                    </div>
                  </div>
                  <div class='fret'>
                    <div id="s3f13" class='notes note-off'>
                    </div>
                  </div>
                  <div class='fret'>
                    <div id="s3f14" class='notes note-off'>
                    </div>
                  </div>
                  <div class='fret'>
                    <div id="s3f15" class='notes note-off'>
                    </div>
                  </div>
                  <div class='fret'>
                    <div id="s3f16" class='notes note-off'>
                    </div>
                  </div>
                </div>
                <!--String S4 -->
                <div class='string'>
                  <div class='fret'>
                    <div id="s4f0" class='notes note-off'>
                    </div>
                  </div>
                  <div class='fret'>
                    <div id="s4f1" class='notes note-off'>
                    </div>
                  </div>
                  <div class='fret'>
                    <div id="s4f2" class='notes note-off'>
                    </div>
                  </div>
                  <div class='fret'>
                    <div id="s4f3" class='notes note-off'>
                    </div>
                  </div>
                  <div class='fret'>
                    <div id="s4f4" class='notes note-off'>
                    </div>
                  </div>
                  <div class='fret'>
                    <div id="s4f5" class='notes note-off'>
                    </div>
                  </div>
                  <div class='fret'>
                    <div id="s4f6" class='notes note-off'>
                    </div>
                  </div>
                  <div class='fret'>
                    <div id="s4f7" class='notes note-off'>
                    </div>
                  </div>
                  <div class='fret'>
                    <div id="s4f8" class='notes note-off'>
                    </div>
                  </div>
                  <div class='fret'>
                    <div id="s4f9" class='notes note-off'>
                    </div>
                  </div>
                  <div class='fret'>
                    <div id="s4f10" class='notes note-off'>
                    </div>
                  </div>
                  <div class='fret'>
                    <div id="s4f11" class='notes note-off'>
                    </div>
                  </div>
                  <div class='fret'>
                    <div id="s4f12" class='notes note-off'>
                    </div>
                  </div>
                  <div class='fret'>
                    <div id="s4f13" class='notes note-off'>
                    </div>
                  </div>
                  <div class='fret'>
                    <div id="s4f14" class='notes note-off'>
                    </div>
                  </div>
                  <div class='fret'>
                    <div id="s4f15" class='notes note-off'>
                    </div>
                  </div>
                  <div class='fret'>
                    <div id="s4f16" class='notes note-off'>
                    </div>
                  </div>
                </div>
                <!--String S5 -->
                <div class='string'>
                  <div class='fret'>
                    <div id="s5f0" class='notes note-off'>
                    </div>
                  </div>
                  <div class='fret'>
                    <div id="s5f1" class='notes note-off'>
                    </div>
                  </div>
                  <div class='fret'>
                    <div id="s5f2" class='notes note-off'>
                    </div>
                  </div>
                  <div class='fret'>
                    <div id="s5f3" class='notes note-off'>
                    </div>
                  </div>
                  <div class='fret'>
                    <div id="s5f4" class='notes note-off'>
                    </div>
                  </div>
                  <div class='fret'>
                    <div id="s5f5" class='notes note-off'>
                    </div>
                  </div>
                  <div class='fret'>
                    <div id="s5f6" class='notes note-off'>
                    </div>
                  </div>
                  <div class='fret'>
                    <div id="s5f7" class='notes note-off'>
                    </div>
                  </div>
                  <div class='fret'>
                    <div id="s5f8" class='notes note-off'>
                    </div>
                  </div>
                  <div class='fret'>
                    <div id="s5f9" class='notes note-off'>
                    </div>
                  </div>
                  <div class='fret'>
                    <div id="s5f10" class='notes note-off'>
                    </div>
                  </div>
                  <div class='fret'>
                    <div id="s5f11" class='notes note-off'>
                    </div>
                  </div>
                  <div class='fret'>
                    <div id="s5f12" class='notes note-off'>
                    </div>
                  </div>
                  <div class='fret'>
                    <div id="s5f13" class='notes note-off'>
                    </div>
                  </div>
                  <div class='fret'>
                    <div id="s5f14" class='notes note-off'>
                    </div>
                  </div>
                  <div class='fret'>
                    <div id="s5f15" class='notes note-off'>
                    </div>
                  </div>
                  <div class='fret'>
                    <div id="s5f16" class='notes note-off'>
                    </div>
                  </div>
                </div>
                <!--String S6 -->
                <div class='string'>
                  <div class='fret'>
                    <div id="s6f0" class='notes note-off'>
                    </div>
                  </div>
                  <div class='fret'>
                    <div id="s6f1" class='notes note-off'>
                    </div>
                  </div>
                  <div class='fret'>
                    <div id="s6f2" class='notes note-off'>
                    </div>
                  </div>
                  <div class='fret'>
                    <div id="s6f3" class='notes note-off'>
                    </div>
                  </div>
                  <div class='fret'>
                    <div id="s6f4" class='notes note-off'>
                    </div>
                  </div>
                  <div class='fret'>
                    <div id="s6f5" class='notes note-off'>
                    </div>
                  </div>
                  <div class='fret'>
                    <div id="s6f6" class='notes note-off'>
                    </div>
                  </div>
                  <div class='fret'>
                    <div id="s6f7" class='notes note-off'>
                    </div>
                  </div>
                  <div class='fret'>
                    <div id="s6f8" class='notes note-off'>
                    </div>
                  </div>
                  <div class='fret'>
                    <div id="s6f9" class='notes note-off'>
                    </div>
                  </div>
                  <div class='fret'>
                    <div id="s6f10" class='notes note-off'>
                    </div>
                  </div>
                  <div class='fret'>
                    <div id="s6f11" class='notes note-off'>
                    </div>
                  </div>
                  <div class='fret'>
                    <div id="s6f12" class='notes note-off'>
                    </div>
                  </div>
                  <div class='fret'>
                    <div id="s6f13" class='notes note-off'>
                    </div>
                  </div>
                  <div class='fret'>
                    <div id="s6f14" class='notes note-off'>
                    </div>
                  </div>
                  <div class='fret'>
                    <div id="s6f15" class='notes note-off'>
                    </div>
                  </div>
                  <div class='fret'>
                    <div id="s6f16" class='notes note-off'>
                    </div>
                  </div>
                </div>

              </div>`;
const inject_showchords = `<div class="chords none">chords<br></div>
                        <div class="intro none">intro<br></div>
                        <div class="verse none">verse<br></div>
                        <div class="prechorus none">pre-chorus<br></div>
                        <div class="chorus none">chorus<br></div>
                        <div class="bridge none">bridge<br></div>
                        <div class="outro none">outro<br></div>`;
const inject_footer = `Chord names determined with <a target="_blank" href="https://www.oolimo.com/guitarchords/analyze">oolimo.com Chord
Analyzer</a>`;

frets.innerHTML = inject_frets;
fretboard.innerHTML = inject_strings;
showchords.innerHTML = inject_showchords;
footer.innerHTML = inject_footer;
const links = document.createElement("div");
links.setAttribute("class", "links");
document.body.appendChild(header);
document.body.appendChild(chordname);
document.body.appendChild(frets);
document.body.appendChild(fretboard);
document.body.appendChild(showchords);
document.body.appendChild(links);
document.body.appendChild(footer);
const chord = document.querySelector("#chord");
const chordName = document.querySelector("#chordName");
const bridge = document.querySelector(".bridge");
const verse = document.querySelector(".verse");
const chorus = document.querySelector(".chorus");
const prechorus = document.querySelector(".prechorus");
const intro = document.querySelector(".intro");
const outro = document.querySelector(".outro");
const chords = document.querySelector(".chords");

let song_title = "";
let song_artist = "";

function playNote(file, duration = "", type = "acoustic" ) {
  if (!file.includes("X")) {
    let audio = document.createElement("audio");
    audio.setAttribute('id', file);
    audio.setAttribute('class', 'playing');
    if (type === "acoustic") {
      audio.src = "https://js.netcentrx.net/_media/acoustic/" + file + ".mp3";
    } else {
      audio.src = "https://js.netcentrx.net/_media/electric/" + file + ".mp3";
    }
    // if (clg) console.log(audio.src);
    // alert(audio.id);
    document.body.appendChild(audio);
    audio.play();
    // if (clg) console.log("play " + file);
    if(duration !== "") {
      setTimeout(function() { 
        document.body.removeChild(audio);
      }, duration);
    } else {
      audio.onended = function () {
        this.parentNode.removeChild(this);
      };
    }
  }
}

/**/
function createNote(noteLocation, color) {
  if (noteLocation.includes("X")) {
    noteLocation = noteLocation.replace("X", 0);
    let note = document.querySelector(`#${noteLocation}`);
    // if(clg) console.log(`${noteLocation}`);
    //let noted;
    note.innerText = "×";
    //noted = note.innerText.replace(/X/, &#215;);
    if(clg) console.log(`getNote('${noteLocation}')`, getNote(`${noteLocation}`));
    note.setAttribute("style", `background-color: none;`);
    note.setAttribute("class", "notes muted");
  } else {
    let note = document.querySelector(`#${noteLocation}`);
    if (noteLocation.toLowerCase() === "x") {
    }
    // if (clg) console.log(`${noteLocation}`);
    note.innerText = getNote(`${noteLocation}`);
    if (clg)
      console.log(`getNote('${noteLocation}')`, getNote(`${noteLocation}`));
    note.setAttribute("style", `background-color: ${color};`);
    note.setAttribute("class", "notes note-on");
  }
}

function removeAudio(ele) {
  if(document.querySelector(ele)) {
    let note = document.querySelector(ele);
    // setTimeout(function() {
      note.parentElement.removeChild(note);
    // }, 50);
  }
}

function stopAllNotes() {
  let playing = document.querySelectorAll('.playing');
  playing.forEach(() => {
    removeAudio(".playing");
  });
}

function resetActive(ele) {
  console.log('removing .active class!');
  ele.forEach((item) => item.classList.remove("active"));
}
/**/

function createButton(
  id,
  chordName,
  s6,
  s5,
  s4,
  s3,
  s2,
  s1,
  section = "showchords",
  hoverIt = ""
  ){
  let button = document.createElement("button");
  button.innerHTML = chordName;
  button.setAttribute("id", id);
  button.setAttribute("class", "btn");
  if(hoverIt!=="") { button.setAttribute("data-title", hoverIt); }
  if (clg) console.log("section = " + section);
  if (clg) console.log("id = " + button.id);
  document.querySelector(`.${section}`).classList.remove("none");
  document.querySelector(`.${section}`).appendChild(button);
  document.querySelector(`#${id}`).addEventListener("click", function (e) {
    resetActive(document.querySelectorAll('.btn'));
    this.classList.add("active");
    stopAllNotes();
    createChord(chordName, s6, s5, s4, s3, s2, s1);
  });
}

function createChord(chordName, s6, s5, s4, s3, s2, s1, noteInt=250) {
  clearNotes();
  document.querySelector("#chordName").innerText = chordName;
  createNote(`s1f${s1}`, "green");
  createNote(`s2f${s2}`, "blue");
  createNote(`s3f${s3}`, "green");
  createNote(`s4f${s4}`, "blue");
  createNote(`s5f${s5}`, "green");
  createNote(`s6f${s6}`, "blue");
  playNote(`s6f${s6}`);
  setTimeout(function() {
    playNote(`s5f${s5}`);    
  }, noteInt);
  setTimeout(function() {
    playNote(`s4f${s4}`);  
  }, noteInt*2);
  setTimeout(function() {
    playNote(`s3f${s3}`);    
  }, noteInt*3);
  setTimeout(function() {
    playNote(`s2f${s2}`);    
  }, noteInt*4);
  setTimeout(function() {
    playNote(`s1f${s1}`);    
  }, noteInt*5);
}

function getQSVar(val) {
const query = window.location.search.substring(1);
let vars = query.split("&");
for (let i = 0; i < vars.length; i++) {
  let pair = vars[i].split("=");
  if (pair[0] == val) {
    return pair[1];
  }
}
return false;
}

if (getQSVar("song")) {
  let song = getQSVar("song");
  let script = document.createElement("script");
  script.src = `./songs/${song}.js`;
  document.title = song;
  script.setAttribute("id", "song-js");
  document.body.appendChild(script);
}

function showSongInfo(song_title="", song_artist="") {
  if (song_title !== "") {
    theTitle.innerText = song_title;
    document.title = "Guitar Chorder :: " + song_title;
  }
  if (song_artist !== "") {
    theArtist.innerText = song_artist;
  }
}
