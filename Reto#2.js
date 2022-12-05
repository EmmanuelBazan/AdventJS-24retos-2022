const year = 2022
const holidays = ['01/06', '04/01', '12/25']

const getExtraHrs = (year = 0,holidays = []) => {
    return holidays.map((item = '') => {
        const newDte = new Date(item.concat('/'+year.toString()));
        const weekD = newDte.getDay();
        if(weekD !== 0 && weekD !== 6){
            return weekD
        } else {
            return []
        }
    }).flat().length * 2;
}

console.log(getExtraHrs(year,holidays))