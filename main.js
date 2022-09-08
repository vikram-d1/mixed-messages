function randomNumber(num){
    return Math.floor(Math.random() * num);
}

const randomVals = {
    name: ['Zuhura Theodosius', 'Aglaia Manus', 'Emeka Encarnita', 'Dottie Octavia', 'Jagdish Darayavahush', 'Ratimir Gronw', 'Libuše Esmée', 'Octavius Bishop', 'Candelas Jyotsna', 'Inayat Aniela'],
    age: [20, 18, 15, 27, 30, 40, 45, 22, 60, 35],
    phone: [2818756411, 920860173, 3862834688, 5743485543, 6418650186, 5417355030, 6082423143, 2057375350, 6627060317, 9064974218]
}

let generated = [];

for(let data in randomVals){
    let rand = randomNumber(randomVals[data].length);

    switch(data){
        case 'name':
            generated.push(randomVals['name'][rand]);
            break;

        case 'age':
            generated.push(randomVals['age'][rand]);
            break;

        case 'phone':
            generated.push(randomVals['phone'][rand]);
            break;
    }
}
