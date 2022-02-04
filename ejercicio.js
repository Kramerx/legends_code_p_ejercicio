// const input = [3, 1, 5, 3, 5, 5, 7]
const input = [8, 1, 5, 6, 10, 5, 18, 1, 25, 6, 25, 5, 30, 8, 30]

let missions = 0;
let jounin = input.shift();
let missionsList = []
while (jounin != 0) {
    missionsList.push(input.splice(0, 2))
    jounin--;
}

// console.log(missionsList)

missionsList.forEach(([v1, v2], i) => {
    let auxMission = v1 && v2 ? (v2 - v1 + 1) : 0;
    missionsList.forEach(([f1, f2], j) => {
        if (j < i) {
            if ((v1 >= f1 && v1 <= f2) && (v2 >= f1 && v2 <= f2)) {
                missionsList[i] = [0, 0]
                auxMission = 0;
            }
        } else if (j > i) {
            if (v1 > f1 && v2 < f2) {
                missionsList[i] = [0, 0];
                auxMission = 0;
                return;
            } else if (f1 >= v1 && f1 <= v2 && f2 >= v1 && f2 <= v2) {
                missionsList[j] = [0, 0];
            } else if ((v1 == f1 && v2 == f2)) {
                missionsList[j] = [0, 0];
                auxMission = 0;
            } else if ((v1 > f1 && v1 < f2 && v2) || (v1 < f1 && v2 == f2) || (v1 == f2 && v2 > f2)) {
                missionsList[j] = [f1, v1 - 1]
            } else if ((v2 >= f1 && v2 < f2) || (v1 == f1 && v2 < f2)) {
                missionsList[j] = [v2 + 1, f2]
            }
        }
    })
    missions += auxMission;
});

console.log(missions)