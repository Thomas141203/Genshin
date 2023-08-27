document.getElementById("tableau").addEventListener("click", () => {
    const tableau = document.getElementById("container");
    tableau.innerHTML = "";
    
    const url = "./stats.json";
    const personnages = [];

    fetch(url)
        .then(response => response.json())
        .then(data => {
            personnages.push(...data);
            const table = document.createElement('table');
            table.className = 'tableau';

            const thead = document.createElement('thead');
            const headerRow = document.createElement('tr');

            const headers = ['#', 'Nom', 'PV', 'ATQ', 'DEF', 'EM', 'TC%', 'DC%', 'RE%', 'Bonus'];

            headers.forEach(headerText => {
                const th = document.createElement('th');
                if(headerText === "TC%"){
                    th.id = "TC";
                }else if(headerText === "DC%"){
                    th.id = "DC";
                }else if(headerText === "RE%"){
                    th.id = "RE";
                }else{
                    th.id = headerText;
                }
                th.textContent = headerText;
                headerRow.appendChild(th);
            });

            thead.appendChild(headerRow);
            table.appendChild(thead);

            const tbody = document.createElement('tbody');
            for(let i=0; i<personnages.length; i++){
                const dataRow = document.createElement('tr');
                const nameMapping = {
                    "Hu Tao": "HuTao",
                    "Kamisato Ayato": "Ayato",
                    "Kamisato Ayaka": "Ayaka",
                    "Kaedahara Kazuha": "Kazuha",
                    "Sangonomiya Kokomi": "Kokomi",
                    "Lumine": "undefined",
                    "Kuki Shinobu": "Kuki",
                    "Shogun Raiden": "RaidenShogun",
                    "Yae Miko": "YaeMiko",
                    "Yun Jin": "YunJin",
                    "Kujou Sara": "SaraKujou",
                    "Arataki Itto": "Itto",
                    "Shikanoin Heizou": "Heizou"
                };
                
                nameImage = nameMapping[personnages[i].name] || personnages[i].name;

                const data = [
                    { 
                        className: 'numberOfCharacters', 
                        content: i
                    },{
                        className: 'iconOfCharacters', 
                        content: '<img class="imageCharacters" src="media/slider/'+nameImage+'.png"><span>'+personnages[i].name+'</span>'
                    },{ 
                        className: 'pv', 
                        content: (personnages[i].pv !== undefined) ? personnages[i].pv : "-"
                    },{ 
                        className: 'atq', 
                        content: (personnages[i].atq !== undefined) ? personnages[i].atq : "-"
                    },{ 
                        className: 'def', 
                        content: (personnages[i].def !== undefined) ? personnages[i].def : "-"
                    },{ 
                        className: 'em', 
                        content: (personnages[i].em !== undefined) ? personnages[i].em : "-"
                    },{ 
                        className: 'tc', 
                        content: (personnages[i].tc !== undefined) ? personnages[i].tc : "-"
                    },{ 
                        className: 'dc', 
                        content: (personnages[i].dc !== undefined) ? personnages[i].dc : "-"
                    },{ 
                        className: 're', 
                        content: (personnages[i].re !== undefined) ? personnages[i].re : "-"
                    },{ 
                        className: 'bonus', 
                        content: (personnages[i].bonus !== undefined) ? personnages[i].bonus : "-"
                    },
                ];

                data.forEach(column => {
                    const td = document.createElement('td');
                    td.className = column.className;
                    td.innerHTML = column.content;
                    dataRow.appendChild(td);
                });

                tbody.appendChild(dataRow);
            }

            table.appendChild(tbody);
            document.getElementById("container").appendChild(table);

            //Partie de tri pour les noms
            let sortAscendingName = true;

            function compareNames(a, b){
                const nameA = a.querySelector('.iconOfCharacters span').textContent;
                const nameB = b.querySelector('.iconOfCharacters span').textContent;
                return sortAscendingName ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
            }
            
            function sortTableByName(){
                const table = document.querySelector('.tableau');
                const tbody = table.querySelector('tbody');
                const rows = Array.from(tbody.querySelectorAll('tr'));
            
                rows.sort(compareNames);
                rows.forEach(row => tbody.removeChild(row));
                rows.forEach(row => tbody.appendChild(row));
                sortAscendingName = !sortAscendingName;
            }
            
            const nameHeader = document.getElementById("Nom");
            nameHeader.addEventListener('click', sortTableByName);

            //Partie de tri pour pv
            let sortAscendingPV = false;

            function comparePV(a, b){
                const pvA = parseInt(a.querySelector('.pv').textContent);
                const pvB = parseInt(b.querySelector('.pv').textContent);
                return sortAscendingPV ? pvA - pvB : pvB - pvA;
            }

            function sortTableByPV(){
                const table = document.querySelector('.tableau');
                const tbody = table.querySelector('tbody');
                const rows = Array.from(tbody.querySelectorAll('tr'));

                rows.sort(comparePV);
                rows.forEach(row => tbody.removeChild(row));
                rows.forEach(row => tbody.appendChild(row));
                sortAscendingPV = !sortAscendingPV;
            }

            const pvHeader = document.querySelector('.tableau th:nth-child(3)');
            pvHeader.addEventListener('click', sortTableByPV);

            //Partie de tri pour atq
            let sortAscendingATQ = false;

            function compareATQ(a, b){
                const atqA = parseInt(a.querySelector('.atq').textContent);
                const atqB = parseInt(b.querySelector('.atq').textContent);
                return sortAscendingATQ ? atqA - atqB : atqB - atqA;
            }

            function sortTableByATQ(){
                const table = document.querySelector('.tableau');
                const tbody = table.querySelector('tbody');
                const rows = Array.from(tbody.querySelectorAll('tr'));

                rows.sort(compareATQ);
                rows.forEach(row => tbody.removeChild(row));
                rows.forEach(row => tbody.appendChild(row));
                sortAscendingATQ = !sortAscendingATQ;
            }
            const atqHeader = document.querySelector('.tableau th:nth-child(4)');
            atqHeader.addEventListener('click', sortTableByATQ);

            //Partie de tri pour def
            let sortAscendingDEF = false;

            function compareDEF(a, b){
                const defA = parseInt(a.querySelector('.def').textContent);
                const defB = parseInt(b.querySelector('.def').textContent);
                return sortAscendingDEF ? defA - defB : defB - defA;
            }

            function sortTableByDEF(){
                const table = document.querySelector('.tableau');
                const tbody = table.querySelector('tbody');
                const rows = Array.from(tbody.querySelectorAll('tr'));

                rows.sort(compareDEF);
                rows.forEach(row => tbody.removeChild(row));
                rows.forEach(row => tbody.appendChild(row));
                sortAscendingDEF = !sortAscendingDEF;
            }

            const defHeader = document.querySelector('.tableau th:nth-child(5)');
            defHeader.addEventListener('click', sortTableByDEF);
            
            //Partie de tri pour em
            let sortAscendingEM = false;

            function compareEM(a, b){
                const emA = parseInt(a.querySelector('.em').textContent);
                const emB = parseInt(b.querySelector('.em').textContent);
                return sortAscendingEM ? emA - emB : emB - emA;
            }

            function sortTableByEM(){
                const table = document.querySelector('.tableau');
                const tbody = table.querySelector('tbody');
                const rows = Array.from(tbody.querySelectorAll('tr'));

                rows.sort(compareEM);
                rows.forEach(row => tbody.removeChild(row));
                rows.forEach(row => tbody.appendChild(row));
                sortAscendingEM = !sortAscendingEM;
            }

            const emHeader = document.querySelector('.tableau th:nth-child(6)');
            emHeader.addEventListener('click', sortTableByEM);

            //Partie de tri pour tc
            let sortAscendingTC = false;

            function compareTC(a, b){
                const tcA = parseFloat(a.querySelector('.tc').textContent);
                const tcB = parseFloat(b.querySelector('.tc').textContent);
                return sortAscendingTC ? tcA - tcB : tcB - tcA;
            }

            function sortTableByTC(){
                const table = document.querySelector('.tableau');
                const tbody = table.querySelector('tbody');
                const rows = Array.from(tbody.querySelectorAll('tr'));

                rows.sort(compareTC);
                rows.forEach(row => tbody.removeChild(row));
                rows.forEach(row => tbody.appendChild(row));
                sortAscendingTC = !sortAscendingTC;
            }

            const tcHeader = document.querySelector('.tableau th:nth-child(7)');
            tcHeader.addEventListener('click', sortTableByTC);

            //Partie de tri pour dc
            let sortAscendingDC = false;

            function compareDC(a, b){
                const dcA = parseFloat(a.querySelector('.dc').textContent);
                const dcB = parseFloat(b.querySelector('.dc').textContent);
                return sortAscendingDC ? dcA - dcB : dcB - dcA;
            }

            function sortTableByDC(){
                const table = document.querySelector('.tableau');
                const tbody = table.querySelector('tbody');
                const rows = Array.from(tbody.querySelectorAll('tr'));

                rows.sort(compareDC);
                rows.forEach(row => tbody.removeChild(row));
                rows.forEach(row => tbody.appendChild(row));
                sortAscendingDC = !sortAscendingDC;
            }

            const dcHeader = document.querySelector('.tableau th:nth-child(8)');
            dcHeader.addEventListener('click', sortTableByDC);

            //Partie de tri pour re
            let sortAscendingRE = false;

            function compareRE(a, b){
                const reA = parseFloat(a.querySelector('.re').textContent);
                const reB = parseFloat(b.querySelector('.re').textContent);
                return sortAscendingRE ? reA - reB : reB - reA;
            }

            function sortTableByRE(){
                const table = document.querySelector('.tableau');
                const tbody = table.querySelector('tbody');
                const rows = Array.from(tbody.querySelectorAll('tr'));

                rows.sort(compareRE);
                rows.forEach(row => tbody.removeChild(row));
                rows.forEach(row => tbody.appendChild(row));
                sortAscendingRE = !sortAscendingRE;
            }

            const reHeader = document.querySelector('.tableau th:nth-child(9)');
            reHeader.addEventListener('click', sortTableByRE);

            //Partie de tri pour les bonus
            const bonusOrder = [
                "Hydro", "Géo", "Pyro", "Anémo", "Cryo",
                "Électro", "Dendro", "Physique", "soins"
            ];
            
            let sortAscendingBonus = true;
            
            function getBonusIndex(bonusText){
                for (let i = 0; i < bonusOrder.length; i++) {
                    if (bonusText.includes(bonusOrder[i])) {
                        return i;
                    }
                }
                return bonusOrder.length;
            }
            
            function compareBonus(a, b){
                const bonusA = a.querySelector('.bonus').textContent;
                const bonusB = b.querySelector('.bonus').textContent;
            
                const indexA = getBonusIndex(bonusA);
                const indexB = getBonusIndex(bonusB);
            
                return sortAscendingBonus ? indexA - indexB : indexB - indexA;
            }
            
            function sortTableByBonus(){
                const table = document.querySelector('.tableau');
                const tbody = table.querySelector('tbody');
                const rows = Array.from(tbody.querySelectorAll('tr'));
            
                rows.sort(compareBonus);
                rows.forEach(row => tbody.removeChild(row));
                rows.forEach(row => tbody.appendChild(row));
                sortAscendingBonus = !sortAscendingBonus;
            }
            
            const bonusHeader = document.querySelector('.tableau th:nth-child(10)');
            bonusHeader.addEventListener('click', sortTableByBonus);

        })
        .catch(error => {
            console.error("Erreur lors de la récupération du fichier JSON :", error);
        });
});