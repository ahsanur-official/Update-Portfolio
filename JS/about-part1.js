const screen = document.getElementById("screen");
const cursor = document.querySelector(".cursor");
const code = [
    "console.log('Hello, World!');",
    "const skills = ['HTML', 'CSS', 'JavaScript', 'C', 'C++', 'Java', 'Python'];",
    "function showSkills() { return skills.join(', '); }",
    "console.log(showSkills());"
];
let index = 0;
let charIndex = 0;
function typeCode() {
    if (charIndex < code[index].length) {
        screen.innerHTML = code[index].slice(0, charIndex) + '<span class="cursor"></span>';
        charIndex++;
        setTimeout(typeCode, 100);
    } else {
        charIndex = 0;
        index = (index + 1) % code.length;
        setTimeout(() => { screen.innerHTML = "<span class='cursor'></span>"; typeCode(); }, 2000);
    }
}
typeCode();