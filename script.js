//on appelle le fichier json pour
//et pour chaque element on affiche une card dans cards, donc on crée la div card avec tout elements et stats
const persos = [
    "Albedo",
    "Alhaitham",
    "Amber",
    "Arataki Itto",
    "Baizhu",
    "Barbara",
    "Beidou",
    "Bennett",
    "Candace",
    "Chongyun",
    "Collei",
    "Cyno",
    "Dehya",
    "Diluc",
    "Diona",
    "Dori",
    "Eula",
    "Faruzan",
    "Fischl",
    "Ganyu",
    "Gorou",
    "Hu Tao",
    "Jean",
    "Kaedahara Kazuha",
    "Kaeya",
    "Kamisato Ayaka",
    "Kamisato Ayato",
    "Kaveh",
    "Keqing",
    "Kirara",
    "Klee",
    "Kujou Sara",
    "Kuki Shinobu",
    "Layla",
    "Lisa",
    "Lumine",
    "Mika",
    "Mona",
    "Nahida",
    "Nilou",
    "Ningguang",
    "Nomade",
    "Noelle",
    "Qiqi",
    "Razor",
    "Rosalia",
    "Sangonomiya Kokomi",
    "Sayu",
    "Shenhe",
    "Shikanoin Heizou",
    "Shogun Raiden",
    "Sucrose",
    "Tartaglia",
    "Thomas",
    "Tighnari",
    "Venti",
    "Xiangling",
    "Xiao",
    "Xingqiu",
    "Xinyan",
    "Yae Miko",
    "Yanfei",
    "Yaoyao",
    "Yelan",
    "Yoimiya",
    "Yun Jin",
    "Zhongli"
];

const nomImage = [
    "Albedo",
    "Alhaitham",
    "Amber",
    "Itto",
    "Baizhu",
    "Barbara",
    "Beidou",
    "Bennett",
    "Candace",
    "Chongyun",
    "Collei",
    "Cyno",
    "Dehya",
    "Diluc",
    "Diona",
    "Dori",
    "Eula",
    "Faruzan",
    "Fischl",
    "Ganyu",
    "Gorou",
    "HuTao",
    "Jean",
    "Kazuha",
    "Kaeya",
    "Ayaka",
    "Ayato",
    "Kaveh",
    "Keqing",
    "Kirara",
    "Klee",
    "SaraKujou",
    "KukiShinobu",
    "Layla",
    "Lisa",
    "Lumine",
    "Mika",
    "Mona",
    "Nahida",
    "Nilou",
    "Ningguang",
    "Nomade",
    "Noelle",
    "Qiqi",
    "Razor",
    "Rosalia",
    "Kokofish",
    "Sayu",
    "Shenhe",
    "Heizou",
    "RaidenShogun",
    "Sucrose",
    "Tartaglia",
    "Thomas",
    "Tighnari",
    "Venti",
    "Xiangling",
    "Xiao",
    "Xingqiu",
    "Xinyan",
    "YaeMiko",
    "Yanfei",
    "Yaoyao",
    "Yelan",
    "Yoimiya",
    "YunJin",
    "Zhongli"
];

const ids = [
    "albedo",
    "alhaitham",
    "amber",
    "itto",
    "baizhu",
    "barbara",
    "beidou",
    "bennett",
    "candace",
    "chongyun",
    "collei",
    "cyno",
    "dehya",
    "diluc",
    "diona",
    "dori",
    "eula",
    "faruzan",
    "fischl",
    "ganyu",
    "gorou",
    "huTao",
    "jean",
    "kazuha",
    "kaeya",
    "ayaka",
    "ayato",
    "kaveh",
    "keqing",
    "kirara",
    "klee",
    "sara",
    "kuki",
    "layla",
    "lisa",
    "lumine",
    "mika",
    "mona",
    "nahida",
    "nilou",
    "ningguang",
    "nomade",
    "noelle",
    "qiqi",
    "razor",
    "rosalia",
    "kokomi",
    "sayu",
    "shenhe",
    "heizou",
    "ei",
    "sucrose",
    "tartaglia",
    "thomas",
    "tighnari",
    "venti",
    "xiangling",
    "xiao",
    "xingqiu",
    "xinyan",
    "yaeMiko",
    "yanfei",
    "yaoyao",
    "yelan",
    "yoimiya",
    "yunJin",
    "zhongli"
];

const elements = [
    "anemo",
    "geo",
    "electro",
    "dendro",
    "hydro",
    "pyro",
    "cryo"
];

let selectionner = 0;

for(let index0 in ids){
    document.getElementById(ids[index0]).addEventListener("click", () => showCharacter(ids[index0]));
}

const url = "./stats.json";
const personnages = [];

fetch(url)
    .then(response => response.json())
    .then(data => {
        personnages.push(...data);
    })
    .catch(error => {
        console.error("Erreur lors de la récupération du fichier JSON :", error);
    });

function showCharacter(value){
    const active = document.querySelector(".active");
    active.classList.add("characterSwiperListItem");
    active.classList.remove("active");
    const perso = document.getElementById(value);
    perso.classList.add("active");
    const imagePrincipale = document.getElementById("imagePrincipale");
    imagePrincipale.setAttribute("src", "media/"+nomImage[ids.indexOf(value)]+".png");
    imagePrincipale.setAttribute("alt", persos[ids.indexOf(value)]);
    selectionner = ids.indexOf(value);

    const nomAChercher = persos[ids.indexOf(value)];
    let objetTrouve = null;
    for(let i=0; i<personnages.length; i++){
        if(personnages[i].name === nomAChercher){
            objetTrouve = personnages[i];
            break;
        }
    }

    const regionAAfficher = objetTrouve.region;

    const container = document.querySelector(".container");
    let extension = "";
    if(regionAAfficher === "Mondstadt"){
        extension = ".webp";
    }else{
        extension = ".jpg";
    }
    container.style.background = "url(media/" + regionAAfficher + extension + ") no-repeat center";
    container.style.backgroundSize = "cover";

    const charactersInfos = document.getElementById("charactersInfos");
    charactersInfos.innerHTML = "";
    if(objetTrouve.own === true){
        const statsTableHP = document.createElement("div");
        statsTableHP.className = "statsTableHP";

        // Section PV
        const hpSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        hpSvg.classList.add("HPSVG");
        hpSvg.setAttribute("viewBox", "0 0 14 14");

        const hpPath1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
        hpPath1.setAttribute("fill", "currentColor");
        hpPath1.setAttribute("d", "M3.5 7.654a.978.978 0 0 1 .449-.571c1.510-0.850 3.586 2.117 6.544 0.548 1.927 6.083-8.893 6.247-6.992 0.023zM7 14c-3.373 0-6.75-2.421-5.134-7.26A18.543 18.543 0 0 1 6.57 0.213 0.748 0.748 0 0 1 7 0a.751.751 0 0 1 .432 0.212 18.543 18.543 0 0 1 4.705 6.528C13.749 11.579 10.376 14 7 14zm0.22-12.19A0.639 0.639 0 0 0 7 1.735a0.649 0.649 0 0 0-.22 0.075C5.070 3.134 2.700 7.092 2.839 9.21A4.019 4.019 0 0 0 7 12.753a4.019 4.019 0 0 0 4.162-3.538c0.139-2.123-2.231-6.081-3.942-7.405Z");

        const hpPath2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
        hpPath2.setAttribute("fill", "currentColor");
        hpPath2.setAttribute("d", "M7.98 8.03a12.566 12.566 0 0 1 1.573-1.509c0.569-0.413 0.94 1.11 0.94 1.11a3.731 3.731 0 0 1-2.513 0.399");

        hpSvg.appendChild(hpPath1);
        hpSvg.appendChild(hpPath2);

        const contentHP = document.createElement("div");
        contentHP.className = "contentHP";

        const spanPV = document.createElement("span");
        spanPV.className = "spanPV";
        spanPV.textContent = "PV";

        const spanPVQ = document.createElement("span");
        spanPVQ.className = "spanPVQ";
        spanPVQ.textContent = objetTrouve.pv;

        contentHP.appendChild(spanPV);
        contentHP.appendChild(spanPVQ);

        statsTableHP.appendChild(hpSvg);
        statsTableHP.appendChild(contentHP);

        charactersInfos.appendChild(statsTableHP);

        // Section ATQ
        const statsTableATQ = document.createElement("div");
        statsTableATQ.className = "statsTableATQ";

        const atqSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        atqSvg.classList.add("ATQSVG");
        atqSvg.setAttribute("viewBox", "0 0 14 14");

        const atqPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
        atqPath.setAttribute("fill", "currentColor");
        atqPath.setAttribute("d", "m7.755 1.651 1.643 1.643 1.928-1.926L11.3.25a.228.228 0 0 1 .228-.22h2.2a.228.228 0 0 1 .228.229c-.121 2.66.556 2.457-1.337 2.4l-1.933 1.925L12.33 6.23a.228.228 0 0 1 0 .322c-1.167 1.208-.775.907-1.892-.106l-7.151 7.147a.457.457 0 0 1-.313.137 21.32 21.32 0 0 1-2.954.238 21.172 21.172 0 0 1 .238-2.953.451.451 0 0 1 .134-.319l7.146-7.153-.838-.839a.229.229 0 0 1 0-.323l.732-.73a.228.228 0 0 1 .322 0z");

        atqSvg.appendChild(atqPath);

        const contentATQ = document.createElement("div");
        contentATQ.className = "contentATQ";

        const spanATQ = document.createElement("span");
        spanATQ.className = "spanATQ";
        spanATQ.textContent = "ATQ";

        const spanATQQ = document.createElement("span");
        spanATQQ.className = "spanATQQ";
        spanATQQ.textContent = objetTrouve.atq;

        contentATQ.appendChild(spanATQ);
        contentATQ.appendChild(spanATQQ);

        statsTableATQ.appendChild(atqSvg);
        statsTableATQ.appendChild(contentATQ);

        charactersInfos.appendChild(statsTableATQ);

        // Section DEF
        const statsTableDEF = document.createElement("div");
        statsTableDEF.className = "statsTableDEF";

        const defSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        defSvg.classList.add("DEFSVG");
        defSvg.setAttribute("viewBox", "0 0 14 14");

        const defPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
        defPath.setAttribute("fill", "currentColor");
        defPath.setAttribute("d", "M13.442 0.726a.291.291 0 0 0-.175-.268C12.859 0.286 11.503 0 7 0S1.143 0.286 0.735 0.458a.291.291 0 0 0-.176 0.269v7.44a.868.868 0 0 0 .125 0.453c1.579 2.6 5.347 4.855 6.16 5.339a.292.292 0 0 0 .3 0c.79-.482 4.56-2.688 6.169-5.335a.868.868 0 0 0 .127-0.455zM7 11.968c0.059 0.013-3.56-2.017-4.824-4.368V1.565s0-.452 4.824-.452z");

        defSvg.appendChild(defPath);

        const contentDEF = document.createElement("div");
        contentDEF.className = "contentDEF";

        const spanDEF = document.createElement("span");
        spanDEF.className = "spanDEF";
        spanDEF.textContent = "DÉF";

        const spanDEFQ = document.createElement("span");
        spanDEFQ.className = "spanDEFQ";
        spanDEFQ.textContent = objetTrouve.def;

        contentDEF.appendChild(spanDEF);
        contentDEF.appendChild(spanDEFQ);

        statsTableDEF.appendChild(defSvg);
        statsTableDEF.appendChild(contentDEF);

        charactersInfos.appendChild(statsTableDEF);

        // Section EM
        const statsTableEM = document.createElement("div");
        statsTableEM.className = "statsTableEM";

        const emSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        emSvg.classList.add("EMSVG");
        emSvg.setAttribute("viewBox", "0 0 14 14");

        const emPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
        emPath.setAttribute("fill", "currentColor");
        emPath.setAttribute("d", "m8.076 8.152-.017-.05A4.335 4.335 0 0 0 7.3 6.796a4.431 4.431 0 0 0-.325-.346A2.113 2.113 0 1 0 7 2.223a2.144 2.144 0 0 0-1.838 3.18 4.374 4.374 0 0 0-1.2-.168 4.42 4.42 0 0 0-.755.066l-.038.007C1.836-.24 10.7-1.672 10.962 4.342a3.985 3.985 0 0 1-2.886 3.81zm3.662-2.137a3.949 3.949 0 0 0-.626-.235 4.473 4.473 0 0 1-1.105 1.7h.031a2.113 2.113 0 1 1-2.113 2.113 4.09 4.09 0 0 0-.025-.445 3.968 3.968 0 0 0-1.863-2.931l-.19-.11a3.963 3.963 0 1 0 .645 6.535c.082-.068.16-.14.236-.214L6.7 12.39a4.367 4.367 0 0 1-.891-1.765 2.112 2.112 0 1 1-.883-2.914q.1.05.189.11a2.111 2.111 0 0 1 .942 1.49 2.159 2.159 0 0 1 .018.28 3.963 3.963 0 1 0 5.663-3.577z");

        emSvg.appendChild(emPath);

        const contentEM = document.createElement("div");
        contentEM.className = "contentEM";

        const spanEM = document.createElement("span");
        spanEM.className = "spanEM";
        spanEM.textContent = "Maîtrise élémentaire";

        const spanEMQ = document.createElement("span");
        spanEMQ.className = "spanEMQ";
        spanEMQ.textContent = objetTrouve.em;

        contentEM.appendChild(spanEM);
        contentEM.appendChild(spanEMQ);

        statsTableEM.appendChild(emSvg);
        statsTableEM.appendChild(contentEM);

        charactersInfos.appendChild(statsTableEM);

        // Section TC
        const statsTableTC = document.createElement("div");
        statsTableTC.className = "statsTableTC";

        const tcSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        tcSvg.classList.add("TCSVG");
        tcSvg.setAttribute("viewBox", "0 0 14 14");

        const tcPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
        tcPath.setAttribute("fill", "currentColor");
        tcPath.setAttribute("d", "M14 0 7.256 3.5 1.973 1.465 3.5 6.236 0 14l7.256-3.5 4.771 1.527L10.5 7.256Zm-3.24 3.24L8.88 7.136 9.701 9.7l-2.564-.82-3.898 1.88 1.88-4.17-.82-2.565L7.137 5.12Z");

        tcSvg.appendChild(tcPath);

        const contentTC = document.createElement("div");
        contentTC.className = "contentTC";

        const spanTC = document.createElement("span");
        spanTC.className = "spanTC";
        spanTC.textContent = "Taux CRIT";

        const spanTCQ = document.createElement("span");
        spanTCQ.className = "spanTCQ";
        spanTCQ.textContent = objetTrouve.tc + "%";

        contentTC.appendChild(spanTC);
        contentTC.appendChild(spanTCQ);

        statsTableTC.appendChild(tcSvg);
        statsTableTC.appendChild(contentTC);

        charactersInfos.appendChild(statsTableTC);

        // Section DC
        const statsTableDC = document.createElement("div");
        statsTableDC.className = "statsTableDC";

        const dcSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        dcSvg.classList.add("DCSVG");
        dcSvg.setAttribute("viewBox", "0 0 14 14");

        const dcPath1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
        dcPath1.setAttribute("fill", "currentColor");
        dcPath1.setAttribute("d", "m0 14 3.5-7.764-1.527-4.772L7.255 3.5 14 0l-3.5 7.255 1.527 4.772L7.255 10.5 0 14");

        const dcPath2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
        dcPath2.setAttribute("fill", "currentColor");
        dcPath2.setAttribute("d", "M7.045 0.19a6.756 6.756 0 0 0-3.326.857l3.613 1.392L10.168 0.967A6.648 6.648 0 0 0 7.045 0.189zM1.502 3.073A6.812 6.812 0 0 0 .309 6.947c0 .925.189 1.808.529 2.612l1.601-3.555-.937-2.93zm11.63 0.998-1.571 3.26 1.076 3.361a6.709 6.709 0 0 0 .496-6.621zm-5.8 7.489-3.11 1.5a6.693 6.693 0 0 0 6.436-.436L7.332 11.56z");

        dcSvg.appendChild(dcPath1);
        dcSvg.appendChild(dcPath2);

        const contentDC = document.createElement("div");
        contentDC.className = "contentDC";

        const spanDC = document.createElement("span");
        spanDC.className = "spanDC";
        spanDC.textContent = "DGT CRIT";

        const spanDCQ = document.createElement("span");
        spanDCQ.className = "spanDCQ";
        spanDCQ.textContent = objetTrouve.dc + "%";

        contentDC.appendChild(spanDC);
        contentDC.appendChild(spanDCQ);

        statsTableDC.appendChild(dcSvg);
        statsTableDC.appendChild(contentDC);

        charactersInfos.appendChild(statsTableDC);

        // Section ER
        const statsTableER = document.createElement("div");
        statsTableER.className = "statsTableER";

        const erSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        erSvg.classList.add("ERSVG");
        erSvg.setAttribute("viewBox", "0 0 14 14");

        const erPath1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
        erPath1.setAttribute("fill", "currentColor");
        erPath1.setAttribute("d", "M3.562 7.002a4.03 4.03 0 0 1 4.045-4.049L7.606 0.608C4.090 0.610 1.216 3.487 1.216 7.003Z");

        const erPath2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
        erPath2.setAttribute("fill", "currentColor");
        erPath2.setAttribute("d", "M7.607 0.607v2.344a4.03 4.03 0 0 1 4.047 4.047 4.03 4.03 0 0 1-4.047 4.047 4.03 4.03 0 0 1-3.578-2.17l1.727-0.348L1.87 4.123 0 9.689l1.67-0.337c0.942 2.36 3.251 4.039 5.937 4.039C11.123 13.39 14 10.517 14 7S11.123 0.607 7.607 0.607Z");

        erSvg.appendChild(erPath1);
        erSvg.appendChild(erPath2);

        const contentER = document.createElement("div");
        contentER.className = "contentER";

        const spanER = document.createElement("span");
        spanER.className = "spanER";
        spanER.textContent = "Recharge d\"énergie";

        const spanERQ = document.createElement("span");
        spanERQ.className = "spanERQ";
        spanERQ.textContent = objetTrouve.re + "%";

        contentER.appendChild(spanER);
        contentER.appendChild(spanERQ);

        statsTableER.appendChild(erSvg);
        statsTableER.appendChild(contentER);

        charactersInfos.appendChild(statsTableER);

        // Section Bonus
        if(objetTrouve.bonus !== "x"){
            const statsTableBonus = document.createElement("div");
            statsTableBonus.className = "statsTableBonus";

            const bonusSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            bonusSvg.classList.add("BONUSSVG");
            bonusSvg.setAttribute("viewBox", "0 0 14 14");

            const bonusPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
            bonusPath.setAttribute("d", "m2.923 12.245.253.13a7.943 7.943 0 0 0 3.89.963 3.753 3.753 0 0 0 .487-7.464 3.6 3.6 0 0 0-1.691.132.938.938 0 0 1-.716-1.732 4.3 4.3 0 0 1 1.48-.366 4.912 4.912 0 0 1 5.049 3.446 4.933 4.933 0 0 1-2.517 5.764c4.218-1.543 4.723-7.809.812-10.017a5.342 5.342 0 0 0-3.437-.829 5.506 5.506 0 0 0-3.65 1.775 6.606 6.606 0 0 0-.416.524.873.873 0 0 1-.927.337.929.929 0 0 1-.781-.638.881.881 0 0 1 .1-.684 6.158 6.158 0 0 1 1.363-1.721A7.091 7.091 0 0 1 6.136.081a6.933 6.933 0 0 1 6.848 3.359c2.683 4.1-.263 9.987-5.094 10.472a6.838 6.838 0 0 1-3.241-.343 3.994 3.994 0 0 1-1.726-1.324zm5.516-.119a2.044 2.044 0 0 1-2.35.064 1.5 1.5 0 0 1-.007-2.613.949.949 0 0 1 1.433.505c.77 2.06 2.637.147 1.424-1.246a2.385 2.385 0 0 0-2.17-.95 2.486 2.486 0 1 0 .784 4.891 2.393 2.393 0 0 0 1.52-1.151c-.21.166-.41.351-.634.5zM2.21 9.521a.663.663 0 1 0 .663.663.663.663 0 0 0-.663-.663zM.959 6.133a.958.958 0 1 0 .957.957.958.958 0 0 0-.957-.957z");
            bonusPath.style.fill = "#3e99ff";

            bonusSvg.appendChild(bonusPath);

            const contentBonus = document.createElement("div");
            contentBonus.className = "contentBonus";

            const spanBonus = document.createElement("span");
            spanBonus.className = "spanBonus";
            spanBonus.textContent = objetTrouve.bonus.split(":")[0].trim();

            const spanBonusQ = document.createElement("span");
            spanBonusQ.className = "spanBonusQ";
            spanBonusQ.textContent = objetTrouve.bonus.split(":")[1].trim();

            contentBonus.appendChild(spanBonus);
            contentBonus.appendChild(spanBonusQ);

            statsTableBonus.appendChild(bonusSvg);
            statsTableBonus.appendChild(contentBonus);

            charactersInfos.appendChild(statsTableBonus);
        }
    }else{
        const p = document.createElement("p");
        p.textContent = "Je ne l'ai pas !";
        charactersInfos.appendChild(p);
    }
}

const characterSwiperList = document.getElementById("characterSwiperList");
let scrollPosition = 0;

document.getElementById("prevBtn").addEventListener("click", () => {
    if(selectionner === 0){
        selectionner = persos.length-1;
        scrollPosition = -scrollPosition - (144 * persos.length) + 144*6;
        console.log(scrollPosition);
        characterSwiperList.style.transitionDuration = "300ms";
        characterSwiperList.style.transform = `translate3d(${scrollPosition}px, 0, 0)`;
        showCharacter(ids[selectionner]);
    }else{
        selectionner -= 1;
        scrollPosition += 144;
        characterSwiperList.style.transitionDuration = "300ms";
        characterSwiperList.style.transform = `translate3d(${scrollPosition}px, 0, 0)`;
        showCharacter(ids[selectionner]);
    }
});

document.getElementById("nextBtn").addEventListener("click", () => {
    if(selectionner === persos.length-1){
        selectionner = 0;
        scrollPosition = -scrollPosition - (144 * persos.length) + 144*6;
        console.log(scrollPosition);
        characterSwiperList.style.transitionDuration = "300ms";
        characterSwiperList.style.transform = `translate3d(${scrollPosition}px, 0, 0)`;
        showCharacter(ids[selectionner]);
    }else{
        selectionner += 1;
        scrollPosition -= 144;
        characterSwiperList.style.transitionDuration = "300ms";
        characterSwiperList.style.transform = `translate3d(${scrollPosition}px, 0, 0)`;
        showCharacter(ids[selectionner]);
    }
});

document.getElementById("elementHydro").addEventListener("click", () => {
    let persosHydro = [];
    for(let i=0; i<personnages.length; i++){
        if(personnages[i].element === "hydro"){
            persosHydro.push(personnages[i].name);
        }
    }
    console.log(persosHydro);

    // const idsPersosHydro = [];
    // for(let index1 in persosHydro){
    //     idsPersosHydro.push(ids[persos.indexOf(persosHydro[index1])]);
    // }

    // const characterSwiperList = document.getElementById("characterSwiperList");
    // const liElements = characterSwiperList.getElementsByTagName("li");

    // for(let i=0; i<liElements.length; i++){
    //     let liId = liElements[i].id;

    //     if(idsPersosHydro.includes(liId)){
    //         console.log("L'ID " + liId + " existe dans la liste UL.");
    //     }else{
    //         liElements[i].classList.add("hidden")
    //     }
    // }
});

document.getElementById("elementPyro").addEventListener("click", () => {
    let persosPyro = [];
    for(let i=0; i<personnages.length; i++){
        if(personnages[i].element === "pyro"){
            persosPyro.push(personnages[i].name);
        }
    }

    console.log(persosPyro);
});

document.getElementById("elementCryo").addEventListener("click", () => {
    let persosCryo = [];
    for(let i=0; i<personnages.length; i++){
        if(personnages[i].element === "cryo"){
            persosCryo.push(personnages[i].name);
        }
    }

    console.log(persosCryo);
});

document.getElementById("elementElectro").addEventListener("click", () => {
    let persosElectro = [];
    for(let i=0; i<personnages.length; i++){
        if(personnages[i].element === "electro"){
            persosElectro.push(personnages[i].name);
        }
    }

    console.log(persosElectro);
});

document.getElementById("elementAnemo").addEventListener("click", () => {
    let persosAnemo = [];
    for(let i=0; i<personnages.length; i++){
        if(personnages[i].element === "anemo"){
            persosAnemo.push(personnages[i].name);
        }
    }

    console.log(persosAnemo);
});

document.getElementById("elementGeo").addEventListener("click", () => {
    let persosGeo = [];
    for(let i=0; i<personnages.length; i++){
        if(personnages[i].element === "geo"){
            persosGeo.push(personnages[i].name);
        }
    }

    console.log(persosGeo);
});

document.getElementById("elementDendro").addEventListener("click", () => {
    let persosDendro = [];
    for(let i=0; i<personnages.length; i++){
        if(personnages[i].element === "dendro"){
            persosDendro.push(personnages[i].name);
        }
    }

    console.log(persosDendro);
});